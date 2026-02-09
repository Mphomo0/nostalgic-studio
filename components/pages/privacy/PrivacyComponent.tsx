'use client'

export default function PrivacyComponent() {
  return (
    <section className="container px-6 py-12 bg-card">
      <div className="container-wide px-6 mx-auto text-white leading-relaxed">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-6 text-gray-300">
          Nostalgic Studio welcomes you (“Nostalgic Studio,” “we,” “us,” or
          “our”). At Nostalgic Studio, we&rsqo;re dedicated to safeguarding your
          personal data and maintaining your privacy. This Privacy Policy
          describes the kinds of data we gather, how we use and safeguard it,
          and your options for data collection and usage.
        </p>

        <hr className="border-gray-700 mb-8" />

        {/* 1. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            1. Information We Collect
          </h2>
          <div className="space-y-4">
            <p>
              <strong>Personal Information:</strong> When you use our website or
              engage with our services, we may collect personal information,
              such as your name, email address, phone number, and other contact
              details.
            </p>
            <p>
              <strong>Usage Information:</strong> We may collect information
              about how you use our website, including your browsing history, IP
              address, and device information.
            </p>
            <p>
              <strong>Cookies and Similar Technologies:</strong> We use cookies
              and similar technologies to enhance your experience on our
              website, personalize content, and analyze website traffic.
            </p>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Provide Services:</strong> We use your personal
              information to provide you with our web engineering services and
              to fulfill your requests.
            </li>
            <li>
              <strong>Communication:</strong> We may use your contact
              information to communicate with you about our services, updates,
              and promotional offers.
            </li>
            <li>
              <strong>Improve Our Services:</strong> We analyze usage data to
              improve our website, services, and user experience.
            </li>
          </ul>
        </section>

        {/* 3. Information Sharing */}
        <section className="mb-8 bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            3. Information Sharing
          </h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third
            parties.
          </p>
          <p>
            We may share your information with trusted third-party service
            providers who assist us in operating our website and delivering
            services.
          </p>
        </section>

        {/* 4. Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            4. Data Security
          </h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>

        {/* 5. Your Choices */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            5. Your Choices
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You can opt-out of receiving promotional emails from us by
              following the instructions in the emails.
            </li>
            <li>
              You can disable cookies through your browser settings, but this
              may affect your ability to use certain features of our website.
            </li>
          </ul>
        </section>

        {/* 6. Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            Please review the privacy policies of third parties before providing
            any personal information.
          </p>
        </section>

        {/* 7. Children’s Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            7. Children’s Privacy
          </h2>
          <p>
            Our services are not directed at children under the age of 13. We do
            not knowingly collect personal information from children.
          </p>
        </section>

        {/* 8. Changes to the Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            8. Changes to the Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices. We will notify you of any significant changes by posting
            the new Privacy Policy on our website.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section className="mb-8 border-t border-gray-700 pt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            9. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at:
          </p>
          <a
            href="mailto:info@nostalgic-studio.co.za"
            className="text-xl font-bold text-blue-400 hover:underline"
          >
            info@nostalgic-studio.co.za
          </a>
          <p className="mt-6 text-sm text-gray-400">
            By using our website and services, you consent to the terms of this
            Privacy Policy.
            <br />
            Thank you for choosing Nostalgic Studio.
          </p>
        </section>
      </div>
    </section>
  )
}
