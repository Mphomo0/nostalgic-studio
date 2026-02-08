'use client'

export default function TermsAndConditions() {
  return (
    <section className="container px-6 py-12 bg-card ">
      <div className="container-wide px-6 mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Please read these Terms and Conditions carefully, as they form a
          legally binding contract between Nostalgic Studio Web Design (“the
          Company”) and you (“the Client”). Acceptance is deemed to occur once
          the Client signs a Website Agreement, Hosting Agreement, or Support
          Agreement.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Terminology</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>The Client:</strong> The individual or organisation
              engaging the Company.
            </li>
            <li>
              <strong>The Company:</strong> Nostalgic Studio Web Design.
            </li>
            <li>
              <strong>The Project:</strong> The body of work undertaken by the
              Company.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Provide all required content and materials in a timely manner.
            </li>
            <li>Ensure ownership or permission for all supplied materials.</li>
            <li>Review work and provide approvals without delay.</li>
            <li>Adhere to agreed deadlines and payment schedules.</li>
            <li>Provide 30 days’ written notice for contract cancellation.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Technology</h2>
          <p className="mb-2">
            Nostalgic Studio develops websites and web applications using modern
            web technologies including <strong>Next.js (React)</strong>,
            JavaScript, HTML5, CSS, and supporting backend services where
            required.
          </p>
          <p>
            SEO results and search engine rankings cannot be guaranteed. SEO
            services are recommended to improve online visibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Payments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>50% deposit on acceptance, balance payable on delivery.</li>
            <li>Late payments may result in service suspension.</li>
            <li>All prices exclude VAT.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Warranty & Liability</h2>
          <p>
            Nostalgic Studio Web Design accepts no responsibility for websites
            hosted on third-party servers or for issues caused by client or
            third-party modifications.
          </p>
        </section>
      </div>
    </section>
  )
}
