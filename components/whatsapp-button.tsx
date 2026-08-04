"use client"

import { useState } from "react"

const WHATSAPP_URL =
  "https://wa.me/918019174141?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20icarKno%E2%84%A2"

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end gap-3"
      style={{
        // Promote to its own compositor layer so Chrome mobile can reposition
        // this fixed element on the GPU (during URL-bar toggle animation)
        // without a main-thread paint that would compete with scroll.
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      {/* Tooltip — slides in from right */}
      <div
        className={`
          whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-lg
          transition-all duration-200
          ${hovered ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      >
        Chat with us on WhatsApp
        {/* Arrow */}
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>

      <div className="relative flex-shrink-0">
        {/* Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="
            relative flex h-14 w-14 items-center justify-center rounded-full
            bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)]
            transition-all duration-200 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)]
            active:scale-95
          "
        >
          {/* Official WhatsApp logo path */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.813A13.24 13.24 0 0 0 16.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24a10.587 10.587 0 0 1-5.413-1.493l-.387-.24-4.08 1.067 1.093-3.973-.267-.413A10.587 10.587 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16 26.667zm5.84-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547l-.613-.013c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
