export default function Page() {
  return (
    <main className="py-20 md:py-40">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-12 max-w-4xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-secondary/70 dark:text-white/70">
              Last updated: January 16, 2026
            </p>
          </div>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              1. Information We Collect
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              We may collect the following types of information from you:
            </p>
            <ul className="list-disc pl-6 text-secondary/70 dark:text-white/70 flex flex-col gap-2">
              <li>
                Personal Information: Name, email address, phone number, and
                other contact details provided during inquiries, course
                purchases, or webinar registrations.
              </li>
              <li>
                Payment Information: Billing address and payment details (e.g.,
                credit card or bank information) for course purchases.
              </li>
              <li>
                Communication Data: Messages or inquiries submitted through our
                contact forms or email.
              </li>
              <li>
                Usage Data: Information about how you use our website,
                including IP addresses, browser type, and interaction with our
                content.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-secondary/70 dark:text-white/70 flex flex-col gap-2">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>
                To process and manage course purchases and webinar
                registrations.
              </li>
              <li>
                To send newsletters, promotional materials, and updates about
                our services.
              </li>
              <li>
                To improve our website and user experience through analytics
                and feedback.
              </li>
              <li>
                To comply with legal obligations and prevent fraud or misuse of
                our services.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              3. How We Protect Your Information
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              We implement a variety of security measures to ensure the safety
              of your personal information. This includes encryption of
              sensitive data, secure servers, and regular monitoring for
              vulnerabilities.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              4. Sharing Your Information
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted
              third parties who assist us in operating our website, conducting
              business, or providing services to you, provided they agree to
              keep this information confidential.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              5. Your Rights
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              You have the right to access, update, or delete your personal
              information. To make such requests, please contact us at
              info@ilc.limited. We will respond to your request promptly.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              6. Cookies
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              Our website may use cookies to enhance your experience. Cookies
              are small files that your browser stores on your device. You can
              choose to disable cookies through your browser settings, but some
              features of the website may not function properly as a result.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              7. Third-Party Links
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              external sites. We encourage you to review the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              We reserve the right to update this Privacy Policy at any time.
              Any changes will be posted on this page, and the updated date
              will be indicated at the top of the policy. Continued use of our
              website constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white">
              9. Contact Us
            </h2>
            <p className="text-secondary/70 dark:text-white/70">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <div className="text-secondary/70 dark:text-white/70 flex flex-col gap-2">
              <p>Head Office: Sector 56, Gurgaon, Haryana</p>
              <p>Phone: +91-7303031659</p>
              <p>Email: info@ilc.limited</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
