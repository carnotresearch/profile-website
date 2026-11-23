import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Carnot Research",
  description:
    "Privacy policy for Carnot Research. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-invert mt-12 max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Introduction
            </h2>
            <p>
              Carnot Research Pvt. Ltd. ("we", "our", or "us") operates the
              carnotresearch.com website. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data
              when you use our Service and the choices you have associated with
              that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Types of Data Collected
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Personal Data:</strong> While using our Service, we may
                ask you to provide us with certain personally identifiable
                information that can be used to contact or identify you
                ("Personal Data"). This may include but is not limited to:
                <ul className="ml-6 mt-2 list-inside list-circle space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong> We may also collect information on
                how the Service is accessed and used ("Usage Data"). This may
                include information such as your computer's Internet Protocol
                address (e.g. IP address), browser type, browser version, the
                pages of our Service that you visit, the time and date of your
                visit, the time spent on those pages, and other diagnostic data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Use of Data
            </h2>
            <p>Carnot Research uses the collected data for various purposes:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Security</h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
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
                  href="mailto:privacy@carnotresearch.com"
                  className="text-primary hover:underline"
                >
                  privacy@carnotresearch.com
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </main>
  )
}
