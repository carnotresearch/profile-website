"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// ─── Ring-Particles Canvas ─────────────────────────────────────────────────────
// Faithful canvas port of css-houdini-ringparticles (used on antigravity.google).
// Source math from: https://unpkg.com/css-houdini-ringparticles/dist/ringparticles.js
//
// Rendering: rows × count particles placed in concentric rings.
//   base_radius(row) = ring_radius + (row/(rows-1)) * ring_thickness
//   displacement     = sin(angle*M + tick*2π*I*S) + sin(angle*z + tick*2π*(-S)) + sin(row*P + tick*2π)
//   particle_radius  = base_radius + displacement * V
//   x = centerX + cos(angle) * particle_radius
//   y = centerY + sin(angle) * particle_radius
//   alpha = lerp(minA, maxA, power((displacement_norm+3)/6, 1.5)) * edge_fade
//
// Ring center smoothly follows cursor (lerp ≈ 3 s ease, matching the CSS transition).
// Ring radius oscillates 150 → 250 px over 6 s (matching the CSS ring animation).
// Animation tick goes 0 → 1 over 6 s linear (matching the CSS ripple animation).
// ──────────────────────────────────────────────────────────────────────────────

// Pre-computed constants from seeded RNG (seed = 200, same as codepen)
const M  = 4      // sin frequency 1   randomInt(2,8)
const IF = 2      // sin frequency 2   randomInt(1,2)
const S  = 1      // direction         hash(210)>0.5
const Z  = 6      // sin frequency 3   randomInt(2,9)
const P  = 0.5    // row frequency     randomFloat(0.2,0.8)
const V  = 12     // displacement mag  randomInt(8,20)

// Visual parameters matching the codepen CSS variables
const ROWS      = 25    // --particle-rows: 25
const PER_ROW   = 80    // --particle-count: 80
const THICKNESS = 600   // --ring-thickness: 600
const PX_SIZE   = 2     // --particle-size: 2
const MIN_A     = 0.1   // --particle-min-alpha: 0.1
const MAX_A     = 1.0   // --particle-max-alpha: 1.0
const COLOR     = "navy" // --particle-color: navy

// Alpha buckets for batched arc drawing — reduces canvas API calls ~10×
const ALPHA_BUCKETS = 16

function AntigravityCanvas({ startDelay = 0 }: { startDelay?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let W = 0, H = 0

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    let ringX = 0, ringY = 0
    let targetX = 0, targetY = 0

    const onInit = () => { ringX = targetX = W / 2; ringY = targetY = H / 2 }
    onInit()

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      targetX = e.clientX - r.left
      targetY = e.clientY - r.top
    }
    const onLeave = () => { targetX = W / 2; targetY = H / 2 }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    const ro = new ResizeObserver(() => { resize(); onInit() })
    ro.observe(canvas)

    // Pre-allocated typed arrays — zero GC pressure per frame
    const MAX_PTS = ROWS * PER_ROW
    const bX = Array.from({ length: ALPHA_BUCKETS }, () => new Float32Array(MAX_PTS))
    const bY = Array.from({ length: ALPHA_BUCKETS }, () => new Float32Array(MAX_PTS))
    const bN = new Int32Array(ALPHA_BUCKETS)

    let raf: number
    let startAt = 0

    const draw = () => {
      const elapsed = (performance.now() - startAt) / 1000
      const tick    = (elapsed % 6) / 6
      const ringRad = 200 - 50 * Math.cos((elapsed / 6) * Math.PI)

      ringX += (targetX - ringX) * 0.012
      ringY += (targetY - ringY) * 0.012

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = COLOR

      const C     = tick * Math.PI * 2
      const outerR = ringRad + THICKNESS
      const halfT  = THICKNESS / 2

      // Reset bucket counts
      bN.fill(0)

      for (let row = 0; row < ROWS; row++) {
        const baseR = ringRad + (ROWS > 1 ? row / (ROWS - 1) : 0) * THICKNESS
        for (let p = 0; p < PER_ROW; p++) {
          const angle = (p / PER_ROW) * Math.PI * 2
          const sineSum =
            Math.sin(angle * M  + C * IF * S) +
            Math.sin(angle * Z  + C * (-S))   +
            Math.sin(row   * P  + C)
          const norm  = Math.pow(Math.max(0, (sineSum + 3) / 6), 1.5)
          let alpha   = MIN_A + norm * (MAX_A - MIN_A)
          const pRad  = baseR + sineSum * V
          const edgeDist = Math.min(pRad - ringRad, outerR - pRad) / halfT
          alpha *= Math.max(0, Math.min(1, edgeDist))
          if (alpha < 0.015) continue
          const px = ringX + Math.cos(angle) * pRad
          const py = ringY + Math.sin(angle) * pRad
          if (px < -10 || px > W + 10 || py < -10 || py > H + 10) continue
          const b = Math.min(ALPHA_BUCKETS - 1, Math.floor(alpha * ALPHA_BUCKETS))
          const i = bN[b]++
          bX[b][i] = px
          bY[b][i] = py
        }
      }

      // One beginPath+fill per alpha bucket instead of one per particle
      for (let b = 0; b < ALPHA_BUCKETS; b++) {
        const count = bN[b]
        if (count === 0) continue
        ctx.globalAlpha = (b + 0.5) / ALPHA_BUCKETS
        ctx.beginPath()
        for (let i = 0; i < count; i++) {
          ctx.moveTo(bX[b][i] + PX_SIZE, bY[b][i])
          ctx.arc(bX[b][i], bY[b][i], PX_SIZE, 0, Math.PI * 2)
        }
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    // Use setTimeout so we never burn rAF frames while idle
    const preWarm = Math.max(0, startDelay - 0.3) * 1000
    const timer = setTimeout(() => {
      startAt = performance.now()
      raf = requestAnimationFrame(draw)
    }, preWarm)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      ro.disconnect()
    }
  }, [startDelay])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        opacity: 0,
        animation: `fadeIn 0.6s ease ${Math.max(0, startDelay).toFixed(2)}s both`,
      }}
    />
  )
}

// ─── Word-by-word reveal ───────────────────────────────────────────────────────
const CHAR_STAGGER = 0.015
const LETTER_REVEAL_DURATION = 0.45

function Words({ text, color, delay = 0 }: { text: string; color?: string; delay?: number }) {
  const letters = Array.from(text)
  // Group into word segments so mid-word line breaks don't occur on narrow screens
  const segments: Array<{ word: string; startIdx: number }> = []
  let i = 0
  while (i < letters.length) {
    const start = i
    const isSpace = letters[i] === " "
    while (i < letters.length && (letters[i] === " ") === isSpace) i++
    segments.push({ word: letters.slice(start, i).join(""), startIdx: start })
  }
  return (
    <>
      {segments.map((seg, si) => {
        const isSpaceSeg = seg.word[0] === " "
        return (
          <span
            key={si}
            style={isSpaceSeg ? undefined : { display: "inline-block", whiteSpace: "nowrap" }}
          >
            {Array.from(seg.word).map((char, ci) => (
              <span
                key={ci}
                style={{
                  display: "inline-block",
                  color,
                  opacity: 0,
                  animation: "wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay: `${delay + (seg.startIdx + ci) * CHAR_STAGGER}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        )
      })}
    </>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
// Layout mirrors antigravity.google exactly:
//   – small wordmark row (logo + product name)
//   – large headline (4.5 em, weight 500) with a lighter second line
//   – two pill CTA buttons
// ──────────────────────────────────────────────────────────────────────────────
export function HeroSection() {
  const line1Text = "Knowledge AI built for"
  const line2LeadText = "India's toughest"
  const line2AccentText = " environments."
  const subText = "100% on-premise AI. Zero cloud dependency. Full data sovereignty."

  // Letter animations use a stagger; keep group timings continuous, then reveal logo/buttons after copy completes.
  const line1Start = 0.1
  const line2LeadStart = line1Start + line1Text.length * CHAR_STAGGER
  const line2AccentStart = line2LeadStart + line2LeadText.length * CHAR_STAGGER
  const subStart = line2AccentStart + line2AccentText.length * CHAR_STAGGER

  const btnDelay = subStart + subText.length * CHAR_STAGGER + LETTER_REVEAL_DURATION + 0.1
  const logoDelay = btnDelay
  const bgDelay = btnDelay

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#ffffff", height: "calc(100vh - 3.75rem)" }}
    >
      {/* ── Ring-particles canvas ── */}
      <AntigravityCanvas startDelay={bgDelay} />

      {/* ── Centred hero content — antigravity.google layout ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6"
        style={{ maxWidth: 860, width: "100%" }}
      >
        {/* Wordmark stays on top, but reveals together with the CTA buttons */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 24,
            opacity: 0,
            animation: `wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) ${logoDelay.toFixed(2)}s both`,
          }}
        >
          <Image
            src={`${B}/assets/logo/carnot-logo.png`}
            alt="icarKno™ logo"
            width={64}
            height={64}
            priority
            style={{ width: 64, height: 64, objectFit: "contain" }}
          />
          <span style={{ fontSize: 22, fontWeight: 600, color: "#0f172a", letterSpacing: "-0.01em" }}>
            icarKno™
          </span>
        </div>

        {/* Headline — matches the codepen <p> at 4.5 em / weight 500 */}
        <p
          style={{
            fontSize: "clamp(2.4rem, 7vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#0f172a",
            margin: "0 0 1.1rem",
          }}
        >
          {/* Line 1 — main headline */}
          <span style={{ display: "block" }}>
            <Words text={line1Text} delay={line1Start} />
          </span>

          {/* Line 2 — secondary line, smaller + lighter color (matches codepen span) */}
          <span
            style={{
              display: "block",
              fontSize: "0.7em",
              color: "#64748b",
            }}
          >
            <Words text={line2LeadText} delay={line2LeadStart} />
            <Words text={line2AccentText} color="#0d9488" delay={line2AccentStart} />
          </span>
        </p>

        {/* Sub-copy */}
        <p
          style={{
            fontSize: "clamp(0.92rem, 1.6vw, 1.05rem)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 460,
            margin: "0 0 2.1rem",
          }}
        >
          <Words text={subText} delay={subStart} />
        </p>

        {/* CTA buttons appear after text reveal */}
        <div
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center"
          style={{
            gap: "0.3em",
            width: "90%",
            margin: "0 auto",
            opacity: 0,
            animation: `wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) ${btnDelay.toFixed(2)}s both`,
          }}
        >
          {/* Primary — dark fill */}
          <Link
            href="/products/icarkno"
            className="inline-flex items-center gap-2 transition-all duration-150 hover:opacity-90 active:scale-[.97]"
            style={{
              background: "#0f172a",
              color: "#fff",
              borderRadius: 9999,
              padding: "0.6em 1.5em",
              fontSize: "1.15em",
              fontWeight: 500,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 14px rgba(15,23,42,0.20)",
            }}
          >
            Explore icarKno™
          </Link>

          {/* Secondary — teal outline */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 transition-all duration-150 hover:bg-teal-50 active:scale-[.97]"
            style={{
              background: "transparent",
              color: "#0d9488",
              borderRadius: 9999,
              padding: "0.6em 1.5em",
              fontSize: "1.15em",
              fontWeight: 500,
              letterSpacing: "0.01em",
              border: "1.5px solid #0d9488",
              whiteSpace: "nowrap",
            }}
          >
            Discover the solution <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        style={{ zIndex: 10, opacity: 0.22 }}
      >
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="#94a3b8" strokeWidth="1.4" />
          <circle cx="7" cy="6" r="2" fill="#94a3b8">
            <animate attributeName="cy" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  )
}
