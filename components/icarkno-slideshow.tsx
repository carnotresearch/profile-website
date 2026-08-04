"use client"

import { useEffect, useRef, useState } from "react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const slides = [
  "/assets/clients/meet-icarkno/icarkno-1.jpeg",
  "/assets/clients/meet-icarkno/icarkno-2.jpeg",
  "/assets/clients/meet-icarkno/icarkno-3.jpeg",
  "/assets/clients/meet-icarkno/icarkno-4.jpeg",
  "/assets/clients/meet-icarkno/icarkno-5.jpeg",
]

interface IcarKnoSlideshowProps {
  className?: string
  interval?: number
}

export function IcarKnoSlideshow({ className = "", interval = 3500 }: IcarKnoSlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Only observe once — start ticking when the slideshow enters the viewport
  // and stop when it leaves. Prevents a background setInterval from re-rendering
  // (and painting cross-fading images) while the user is scrolling elsewhere.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        setAnimating(true)
        return (c + 1) % slides.length
      })
    }, interval)
    return () => clearInterval(timer)
  }, [interval, visible])

  useEffect(() => {
    if (!animating) return
    const t = setTimeout(() => { setPrev(null); setAnimating(false) }, 600)
    return () => clearTimeout(t)
  }, [animating])

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={`${B}${slides[prev]}`}
          alt={`icarKno slide ${prev + 1}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ animation: "fadeOut 0.6s ease forwards" }}
        />
      )}
      <img
        key={`curr-${current}`}
        src={`${B}${slides[current]}`}
        alt={`icarKno slide ${current + 1}`}
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ animation: animating ? "fadeIn 0.6s ease forwards" : undefined }}
      />
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); setAnimating(true) }}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "6px",
              background: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
