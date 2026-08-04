"use client"

import { useEffect, useRef, useState } from "react"

const BAR_HEIGHTS = [55, 80, 40, 90, 65, 75, 50, 85, 60, 70, 45, 88]

function VerticalLinesSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${className}`}>
      {/* Vertical bars */}
      <div className="flex h-full items-end gap-[5px] px-5 pb-6 pt-10">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gray-200"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* Thin top label row skeleton */}
      <div className="absolute top-4 left-5 right-5 flex gap-3">
        <div className="h-2.5 w-24 rounded-full bg-gray-200" />
        <div className="h-2.5 w-16 rounded-full bg-gray-200" />
      </div>
      {/* Shimmer sweep */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmerSweep 1.6s ease-in-out infinite",
        }}
      />
    </div>
  )
}

export function VideoWithSkeleton({
  src,
  className = "",
  skeletonClassName = "",
  ariaLabel = "Product demo video",
}: {
  src: string
  className?: string
  skeletonClassName?: string
  ariaLabel?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Lazy-load: don't attach the video src (and don't download bytes) until
  // the placeholder scrolls near the viewport. Without this, all use-case
  // videos on the page (~50 MB total) start downloading on page load and
  // saturate the connection, making the page feel slow.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShouldLoad(true)
          io.disconnect()
        }
      },
      // Start loading a bit before the video enters view so it's ready when
      // the user gets there — but not so early that off-screen videos are
      // still downloading during initial page paint.
      { rootMargin: "400px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="relative">
      {!loaded && (
        <VerticalLinesSkeleton className={skeletonClassName || "w-full aspect-video"} />
      )}
      {shouldLoad && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          onLoadedData={() => setLoaded(true)}
          className={`${className} ${loaded ? "" : "absolute inset-0 opacity-0 pointer-events-none"}`}
        />
      )}
    </div>
  )
}
