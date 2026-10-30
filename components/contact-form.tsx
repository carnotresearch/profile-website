"use client"

import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const API_ENDPOINT =
  "https://izwz05lqn1.execute-api.ap-south-1.amazonaws.com/default/sendMail"

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "6Lehn-cpAAAAAJ4E59tN-ihLUUDt3zpEykVAMRPI"

const serviceOptions = [
  "Product Development",
  "Research Consulting",
  "Industry Skilling",
  "Custom LLM Development",
  "On-Premise Deployment",
]

const productOptions = ["icarKno™", "BharGati™ AI", "SAATHI", "Other"]

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const { tx } = useLanguage()
  const f = tx.contactPage.form

  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg("")

    const recaptchaResponse = recaptchaRef.current?.getValue()
    if (!recaptchaResponse) {
      setErrorMsg(f.captchaError)
      return
    }

    setStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    const name     = (formData.get("name")    as string) ?? ""
    const email    = (formData.get("email")   as string) ?? ""
    const company  = (formData.get("company") as string) ?? ""
    const message  = (formData.get("message") as string) ?? ""
    const services = formData.getAll("services") as string[]
    const products = formData.getAll("products") as string[]

    const subject = `Contact from ${name}${company ? ` (${company})` : ""}`

    const fullMessage = [
      `Name: ${name}`,
      company         ? `Organization: ${company}`               : "",
      services.length ? `Services: ${services.join(", ")}`        : "",
      products.length ? `Products: ${products.join(", ")}`        : "",
      "",
      message,
    ].filter(Boolean).join("\n")

    const params = new URLSearchParams()
    params.set("template-contactform-name",     name)
    params.set("template-contactform-email",    email)
    params.set("template-contactform-phone",    "")
    params.set("template-contactform-subject",  subject)
    params.set("template-contactform-message",  fullMessage)
    params.set("template-contactform-botcheck", "")
    params.set("g-recaptcha-response",          recaptchaResponse)
    services.forEach((s) => params.append("template-contactform-service[]", s))

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      if (response.ok) {
        setStatus("success")
        recaptchaRef.current?.reset()
      } else {
        let errMsg = `Server error (${response.status}). Please try again or email us directly.`
        try {
          const body = await response.text()
          const json = JSON.parse(body)
          if (json?.message) errMsg = json.message
          else if (json?.error) errMsg = json.error
        } catch { /* non-JSON body */ }
        setErrorMsg(errMsg)
        setStatus("error")
        recaptchaRef.current?.reset()
      }
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : f.networkError)
      setStatus("error")
      recaptchaRef.current?.reset()
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 ring-4 ring-green-100">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-gray-900">{f.successTitle}</h3>
        <p className="mt-1.5 max-w-xs text-sm text-gray-500">{f.successDesc}</p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 " +
    "focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"

  const chipClass =
    "flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 " +
    "transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 " +
    "has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium text-gray-600">
            {f.nameLabel} <span className="text-red-400">*</span>
          </label>
          <input type="text" id="cf-name" name="name" required placeholder={f.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-gray-600">
            {f.emailLabel} <span className="text-red-400">*</span>
          </label>
          <input type="email" id="cf-email" name="email" required placeholder={f.emailPlaceholder} className={inputClass} />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="cf-company" className="mb-1.5 block text-xs font-medium text-gray-600">
          {f.orgLabel}
        </label>
        <input type="text" id="cf-company" name="company" placeholder={f.orgPlaceholder} className={inputClass} />
      </div>

      {/* Services */}
      <div>
        <label htmlFor="cf-service" className="mb-1.5 block text-xs font-medium text-gray-600">{f.servicesLabel}</label>
        <select id="cf-service" name="services" className={inputClass}>
          <option value="">{f.selectServiceDefault}</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* Products */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-600">{f.productsLabel}</label>
        <div className="flex flex-wrap gap-1.5">
          {productOptions.map((o) => (
            <label key={o} className={chipClass}>
              <input type="checkbox" name="products" value={o} className="sr-only" />
              {o}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium text-gray-600">
          {f.messageLabel} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="cf-message" name="message" required rows={2}
          placeholder={f.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60 transition-all"
      >
        {status === "sending" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> {f.sending}</>
        ) : (
          <>{f.sendBtn} <ArrowRight className="h-4 w-4" /></>
        )}
      </button>

      {(status === "error" || errorMsg) && (
        <p className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
