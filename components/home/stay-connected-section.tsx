"use client"

import { useEffect, useRef, useState } from "react"

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.08 }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

export function StayConnectedSection() {
  return (
    <section className="bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
              Stay Connected
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/carnot-research-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c8dff5] bg-[#e8f1fb] text-[#0A66C2] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4e8f7] hover:shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M9.5 11.5H7V21H9.5V11.5ZM8.25 10.5C9.08 10.5 9.75 9.83 9.75 9C9.75 8.17 9.08 7.5 8.25 7.5C7.42 7.5 6.75 8.17 6.75 9C6.75 9.83 7.42 10.5 8.25 10.5ZM21 21H18.5V16.3C18.5 14.3 16 14.45 16 16.3V21H13.5V11.5H16V12.97C17.06 11.06 21 10.92 21 14.97V21Z" fill="#0A66C2"/>
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://carnotresearch.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our research on Medium"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M7 9.5L5.3 7.8V7.5H10.4L14.4 16.2L17.9 7.5H22.8V7.8L21.3 9.3C21.2 9.4 21.1 9.6 21.15 9.75V18.25C21.1 18.4 21.2 18.6 21.3 18.7L22.75 20.2V20.5H15.35V20.2L16.85 18.65C17 18.5 17 18.45 17 18.2V12.5L13 20.45H12.55L7.85 12.5V17.7C7.8 18.05 7.95 18.4 8.2 18.6L10.15 21.05V21.35H4.5V21.05L6.45 18.6C6.7 18.4 6.85 18.05 6.8 17.7V11C6.85 10.75 6.75 10.5 6.6 10.3L7 9.5Z" fill="#1a1a1a"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/carnot.research/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-200 bg-pink-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-100 hover:shadow-md"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="url(#igGrad)"/>
                  <defs>
                    <linearGradient id="igGrad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F58529"/>
                      <stop offset="0.5" stopColor="#DD2A7B"/>
                      <stop offset="1" stopColor="#8134AF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@CarnotResearch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch demos on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-100 hover:shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M21.6 10.4C21.4 9.6 20.7 9 19.9 8.8C18.5 8.5 14 8.5 14 8.5C14 8.5 9.5 8.5 8.1 8.8C7.3 9 6.6 9.6 6.4 10.4C6.1 11.8 6.1 14 6.1 14C6.1 14 6.1 16.2 6.4 17.6C6.6 18.4 7.3 19 8.1 19.2C9.5 19.5 14 19.5 14 19.5C14 19.5 18.5 19.5 19.9 19.2C20.7 19 21.4 18.4 21.6 17.6C21.9 16.2 21.9 14 21.9 14C21.9 14 21.9 11.8 21.6 10.4ZM12.2 16.5V11.5L16.6 14L12.2 16.5Z" fill="#FF0000"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
