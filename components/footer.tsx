import Link from "next/link"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function renderName(name: string) {
  if (!name.includes("™")) return <>{name}</>
  const [before, after] = name.split("™")
  return <>{before}<sup className="text-[0.8em]">™</sup>{after ?? ""}</>
}

const footerLinks = {
  Products: [
    { name: "icarKno™", href: "/products/icarkno" },
    { name: "BharGati™ AI", href: "/products/bhargati" },
    { name: "SAATHI", href: "/products/saathi" },
  ],
  Solutions: [
    { name: "AI for Government", href: "/solutions#government" },
    { name: "Enterprise Knowledge AI", href: "/solutions/enterprise-rag" },
    { name: "On-Premise & Offline AI", href: "/solutions/on-prem-ai" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Research", href: "/company/resources" },
    { name: "Blog", href: "https://carnotresearch.medium.com/", external: true },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  "Trust & Partnerships": [
    { name: "Certifications", href: "/company#certifications" },
    { name: "Partners", href: "/company#partners" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${B}/assets/logo/carnot-logo.png`}
                alt="icarKno™"
                className="h-8 w-auto object-contain"
              />
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {renderName("icarKno™")}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Deep-tech AI company building production-grade Generative AI, NLP,
              and Computer Vision systems for government and enterprise.
            </p>
            <address className="mt-4 not-italic text-sm text-muted-foreground space-y-1">
              <p>2-A-2B, Research and Innovation Park</p>
              <p>IIT Delhi, Hauz Khas</p>
              <p>New Delhi, 110016, India</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:info@carnotresearch.com" className="hover:text-foreground transition-colors">
                  info@carnotresearch.com
                </a>
              </p>
            </address>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/carnot-research-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="icarKno™ on LinkedIn"
                className="transition-opacity hover:opacity-80"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="6" fill="#0A66C2"/>
                  <path d="M9.5 11.5H7V21H9.5V11.5ZM8.25 10.5C9.08 10.5 9.75 9.83 9.75 9C9.75 8.17 9.08 7.5 8.25 7.5C7.42 7.5 6.75 8.17 6.75 9C6.75 9.83 7.42 10.5 8.25 10.5ZM21 21H18.5V16.3C18.5 14.3 16 14.45 16 16.3V21H13.5V11.5H16V12.97C17.06 11.06 21 10.92 21 14.97V21Z" fill="white"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@CarnotResearch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="icarKno™ on YouTube"
                className="transition-opacity hover:opacity-80"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="6" fill="#FF0000"/>
                  <path d="M21.6 10.4C21.4 9.6 20.7 9 19.9 8.8C18.5 8.5 14 8.5 14 8.5C14 8.5 9.5 8.5 8.1 8.8C7.3 9 6.6 9.6 6.4 10.4C6.1 11.8 6.1 14 6.1 14C6.1 14 6.1 16.2 6.4 17.6C6.6 18.4 7.3 19 8.1 19.2C9.5 19.5 14 19.5 14 19.5C14 19.5 18.5 19.5 19.9 19.2C20.7 19 21.4 18.4 21.6 17.6C21.9 16.2 21.9 14 21.9 14C21.9 14 21.9 11.8 21.6 10.4ZM12.2 16.5V11.5L16.6 14L12.2 16.5Z" fill="white"/>
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://carnotresearch.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="icarKno™ on Medium"
                className="transition-opacity hover:opacity-80"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="6" fill="#000000"/>
                  <path d="M8.5 10.2L6.5 8.3V8H12.3L16.8 17.6L20.7 8H26.2V8.3L24.5 9.9C24.4 10 24.3 10.2 24.35 10.4V18.6C24.3 18.8 24.4 19 24.5 19.1L26.1 20.7V21H18.1V20.7L19.8 19.1C19.95 18.95 19.95 18.9 19.95 18.6V12.4L15.4 20.95H14.9L9.65 12.4V18C9.6 18.4 9.75 18.8 10.05 19.05L12.25 21.6V21.9H6V21.6L8.2 19.05C8.5 18.8 8.65 18.4 8.6 18V11.2C8.65 10.9 8.55 10.6 8.35 10.4L8.5 10.2Z" fill="white" transform="scale(0.82) translate(2, 2)"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title}>
              <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {renderName(link.name)}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {renderName(link.name)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Carnot Research Pvt. Ltd. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/site-map"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
