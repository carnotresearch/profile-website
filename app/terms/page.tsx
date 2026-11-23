import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Carnot Research",
  description:
    "Terms of Service for Carnot Research. Read our terms and conditions.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="mb-2 text-4xl font-bold text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-invert mt-12 max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Agreement to Terms
            </h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you ("User" or "you") and Carnot Research Pvt.
              Ltd. ("Company", "we", "us", or "our"), concerning your use of
              the carnotresearch.com website (the "Service").
            </p>
            <p>
              By accessing and using this Service, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Carnot Research's Service
              for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempting to decompile or reverse engineer any software
                contained on the Service
              </li>
              <li>
                Transferring the materials to another person or "mirroring"
                the materials on any other server
              </li>
              <li>
                Removing any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transferring the materials to another person or "mirroring"
                the materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Disclaimer
            </h2>
            <p>
              The materials on Carnot Research's Service are provided on an
              'as is' basis. Carnot Research makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions
              of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Limitations
            </h2>
            <p>
              In no event shall Carnot Research or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on Carnot Research's Service,
              even if Carnot Research or a Carnot Research authorized
              representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Accuracy of Materials
            </h2>
            <p>
              The materials appearing on Carnot Research's Service could include
              technical, typographical, or photographic errors. Carnot Research
              does not warrant that any of the materials on its Service are
              accurate, complete, or current. Carnot Research may make changes
              to the materials contained on its Service at any time without
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Links</h2>
            <p>
              Carnot Research has not reviewed all of the sites linked to its
              Service and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              Carnot Research of the site. Use of any such linked website is at
              the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Modifications
            </h2>
            <p>
              Carnot Research may revise these Terms of Service for its Service
              at any time without notice. By using this Service, you are
              agreeing to be bound by the then current version of these Terms
              of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts located in New Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <address className="mt-4 not-italic space-y-2">
              <p>
                <strong>Carnot Research Pvt. Ltd.</strong>
              </p>
              <p>2-A-2B, Research and Innovation Park</p>
              <p>IIT Delhi, Hauz Khas</p>
              <p>New Delhi, 110016, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@carnotresearch.com"
                  className="text-primary hover:underline"
                >
                  legal@carnotresearch.com
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </main>
  )
}
