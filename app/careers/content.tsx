"use client"

import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Briefcase, GraduationCap, ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const API_ENDPOINT =
  "https://izwz05lqn1.execute-api.ap-south-1.amazonaws.com/default/sendMail"

// Add your reCAPTCHA v2 site key here (or set NEXT_PUBLIC_RECAPTCHA_SITE_KEY env var)
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6Lehn-cpAAAAAJ4E59tN-ihLUUDt3zpEykVAMRPI"

type PositionType = "Job Position" | "Internship" | ""
type Status = "idle" | "sending" | "success" | "error"

function isValidGoogleDriveLink(url: string): boolean {
  const patterns = [
    /drive\.google\.com\/file\/d\/.+/,
    /drive\.google\.com\/open\?id=.+/,
    /docs\.google\.com\/.+/,
    /drive\.google\.com\/drive\/folders\/.+/,
  ]
  return patterns.some((p) => p.test(url))
}

export function CareersContent() {
  const { tx } = useLanguage()
  const c = tx.careersPage

  const [positionType, setPositionType] = useState<PositionType>("")
  const [status, setStatus] = useState<Status>("idle")
  const [notification, setNotification] = useState<{ msg: string; type: "success" | "error" } | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)

  function showNotification(msg: string, type: "success" | "error") {
    setNotification({ msg, type })
    setTimeout(() => setNotification(null), 6000)
  }

  function handleApply(type: PositionType) {
    setPositionType(type)
    setStatus("idle")
    setNotification(null)
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Check reCAPTCHA
    const recaptchaResponse = recaptchaRef.current?.getValue()
    if (!recaptchaResponse) {
      showNotification(c.form.captchaError, "error")
      return
    }

    const form = e.currentTarget
    const get = (id: string) => (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value.trim() ?? ""

    const name       = get("applicant-name")
    const email      = get("applicant-email")
    const phone      = get("applicant-phone") || "Not provided"
    const experience = get("experience-level")
    const coverLetter = get("cover-letter")
    const resumeLink  = get("resume-drive-link")

    // Validate required fields
    if (!name || !email || !experience || !coverLetter || !resumeLink) {
      showNotification(c.form.fillError, "error")
      return
    }

    // Validate Google Drive link
    if (!isValidGoogleDriveLink(resumeLink)) {
      showNotification(c.form.driveError, "error")
      return
    }

    setStatus("sending")

    // Build email body — same format as the other app
    const emailBody = `New Application Submitted

Position Type: ${positionType}
Name: ${name}
Email: ${email}
Phone: ${phone}
Experience Level: ${experience}

Cover Letter:
${coverLetter}

Resume Google Drive Link: ${resumeLink}`

    const requestData: Record<string, string> = {
      "template-contactform-name":    name,
      "template-contactform-email":   email,
      "template-contactform-phone":   phone,
      "template-contactform-subject": `${positionType} Application - ${name}`,
      "template-contactform-message": emailBody,
      "template-contactform-botcheck": "",
      "g-recaptcha-response":         recaptchaResponse,
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(requestData).toString(),
      })

      if (response.ok) {
        showNotification(c.form.successMsg, "success")
        setStatus("success")
        form.reset()
        recaptchaRef.current?.reset()
      } else {
        showNotification(c.form.serverError, "error")
        setStatus("idle")
        recaptchaRef.current?.reset()
      }
    } catch (error) {
      showNotification(c.form.serverError + (error instanceof Error ? " " + error.message : ""), "error")
      setStatus("idle")
      recaptchaRef.current?.reset()
    }
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"

  return (
    <>
      {/* ── Position cards ── */}
      <section className="bg-secondary/30 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">{c.hero.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {c.hero.heading}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.hero.desc}
            </p>
          </div>

          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{c.openRoles.heading}</h2>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {/* Full-Time */}
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/25">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{c.openRoles.jobTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.openRoles.jobDesc}
              </p>
              <Button
                className="mt-6"
                variant="outline"
                size="sm"
                onClick={() => handleApply("Job Position")}
              >
                {c.openRoles.jobBtn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Internship */}
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/25">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent/70 to-accent/0" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{c.openRoles.internTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.openRoles.internDesc}
              </p>
              <Button
                className="mt-6"
                variant="outline"
                size="sm"
                onClick={() => handleApply("Internship")}
              >
                {c.openRoles.internBtn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application form (shown after clicking Apply Now) ── */}
      {positionType && (
        <section ref={formSectionRef} className="bg-background py-14 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {c.form.heading}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {c.form.subtitle}
              </p>
            </div>

            {/* Notification banner */}
            {notification && (
              <div
                className={`mb-6 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
                  notification.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                }`}
              >
                {notification.type === "success" && <Check className="mt-0.5 h-4 w-4 shrink-0" />}
                {notification.msg}
              </div>
            )}

            <form
              id="application-form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8 flex flex-col gap-5"
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="applicant-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    {c.form.nameLabel} <span className="text-destructive">*</span>
                  </label>
                  <input id="applicant-name" type="text" required placeholder={c.form.namePlaceholder} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="applicant-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    {c.form.emailLabel} <span className="text-destructive">*</span>
                  </label>
                  <input id="applicant-email" type="email" required placeholder={c.form.emailPlaceholder} className={inputClass} />
                </div>
              </div>

              {/* Phone + Experience */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="applicant-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    {c.form.phoneLabel} <span className="text-muted-foreground text-xs">{c.form.phoneOptional}</span>
                  </label>
                  <input id="applicant-phone" type="tel" placeholder={c.form.phonePlaceholder} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="experience-level" className="mb-1.5 block text-sm font-medium text-foreground">
                    {c.form.experienceLabel} <span className="text-destructive">*</span>
                  </label>
                  <select id="experience-level" required className={inputClass}>
                    <option value="">{c.form.selectDefault}</option>
                    <option value="Fresher (0 years)">Fresher (0 years)</option>
                    <option value="Junior (1–2 years)">Junior (1–2 years)</option>
                    <option value="Mid (3–5 years)">Mid (3–5 years)</option>
                    <option value="Senior (5+ years)">Senior (5+ years)</option>
                    <option value="Student / Intern">Student / Intern</option>
                  </select>
                </div>
              </div>

              {/* Resume Drive Link */}
              <div>
                <label htmlFor="resume-drive-link" className="mb-1.5 block text-sm font-medium text-foreground">
                  {c.form.resumeLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  id="resume-drive-link"
                  type="url"
                  required
                  placeholder="https://drive.google.com/file/d/..."
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.form.resumeHelp}
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="cover-letter" className="mb-1.5 block text-sm font-medium text-foreground">
                  {c.form.coverLetterLabel} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="cover-letter"
                  required
                  rows={5}
                  placeholder={c.form.coverLetterPlaceholder}
                  className={inputClass}
                />
              </div>

              {/* reCAPTCHA */}
              <div>
                <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#2563eb]/90 text-white"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {c.form.sending}
                  </>
                ) : (
                  <>
                    {c.form.submitBtn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}
