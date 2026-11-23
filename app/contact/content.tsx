"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/lib/language-context"

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.537V8.395L11.036 22.08h-.728L3.997 8.395v9.099c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V6.887z" />
    </svg>
  )
}

export function ContactContent() {
  const { tx } = useLanguage()
  const c = tx.contactPage

  return (
    <div className="bg-background">
      {/* ── Section 1: Form ── */}
      <section className="min-h-hero-page flex items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                {c.form.eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                {c.form.heading1}<br />{c.form.heading2}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {c.form.desc}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400" />
              <div className="px-7 py-7">
                <h2 className="mb-5 text-xl font-semibold text-foreground">{c.form.formHeading}</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 2: Info + Map ── */}
      <section className="min-h-hero-page flex items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">

          {/* Section heading */}
          <div className="mb-8 text-center">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary">{c.location.eyebrow}</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{c.location.heading}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.location.desc}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-stretch">

            {/* Left — contact cards + social */}
            <div className="flex flex-col gap-4">

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.location.visitLabel}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {c.location.visitAddr}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.location.emailLabel}</p>
                  <a href="mailto:contact@carnotresearch.com" className="mt-0.5 block text-sm text-muted-foreground hover:text-primary transition-colors">
                    contact@carnotresearch.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-50">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.location.callLabel}</p>
                  <a href="tel:+918449710411" className="mt-0.5 block text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 8449710411
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <p className="mb-3 text-sm font-semibold text-foreground">{c.location.connectLabel}</p>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/carnotresearch" target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href="https://www.youtube.com/@CarnotResearch" target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white hover:opacity-90 transition-opacity" aria-label="YouTube">
                    <YouTubeIcon />
                  </a>
                  <a href="https://medium.com/@carnotresearch" target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:opacity-90 transition-opacity" aria-label="Medium">
                    <MediumIcon />
                  </a>
                </div>
              </div>

            </div>

            {/* Right — Google Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Carnot Research - IIT Delhi"
                src="https://maps.google.com/maps?q=Research+and+Innovation+Park+IIT+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
