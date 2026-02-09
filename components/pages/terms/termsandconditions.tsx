'use client'

export default function TermsAndConditions() {
  return (
    <section className="container px-6 py-12 bg-card">
      <div className="container-wide px-6 mx-auto text-white leading-relaxed">
        <p className="mb-6">
          Please read these Terms and Conditions carefully as they will form a
          contract between us and you; the client acceptance of which is agreed
          from the moment the client signs our Website Agreement, Hosting
          Agreement or Support Agreement. We have tried to keep these terms
          brief and straightforward.
        </p>

        <hr className="border-gray-700 mb-8" />

        {/* Terminology */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Terminology
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>The Client:</strong> The individual or entity entering the
              agreement.
            </li>
            <li>
              <strong>The Company:</strong> Nostalgic Studio Web Design.
            </li>
            <li>
              <strong>The Project:</strong> The body of work being undertaken,
              including consultation, design, development, and/or hosting.
            </li>
          </ul>
        </section>

        {/* Client Agreements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            The Client Agrees To:
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Provide all requested text, images, and info within a reasonable
              timescale.
            </li>
            <li>
              Guarantee ownership or legal permission for all furnished
              elements. The Client will{' '}
              <strong>hold harmless and indemnify</strong> the Company from any
              liability or legal fees arising from supplied content.
            </li>
            <li>
              Review work, provide feedback, and sign-off in a timely manner.
            </li>
            <li>Adhere to the payment schedule and all agreed deadlines.</li>
            <li>
              Mark any sensitive data as <strong>"Confidential"</strong> in the
              subject line or document body.
            </li>
            <li>
              Provide a minimum of <strong>30 days’ notice</strong> in writing
              for any contract cancellation.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mb-8 bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Timeline</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Quotations are valid for <strong>30 days</strong>.
            </li>
            <li>
              Standard development: 2–3 weeks (FullStack apps and eCommerce: up
              to 7-8 weeks) from receipt of all content.
            </li>
            <li>
              <strong>The 3-Month Rule:</strong> All content must be submitted
              within 3 months of commencement. Failure to do so results in the{' '}
              <strong>loss of the deposit paid</strong>.
            </li>
            <li>
              Time frames commence ONLY after receipt of all info, images, and
              the deposit.
            </li>
          </ul>
        </section>

        {/* General */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">General</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Formats:</strong> Content must be electronic (Word for
              text; JPEG, TIFF, or PNG for images).{' '}
              <strong>Scanned PDFs are not accepted.</strong>
            </li>
            <li>
              <strong>Credits:</strong> A 10% fee of total development charges
              applies if the Client requests the removal of design credits.
            </li>
            <li>
              <strong>Responsibility:</strong> Providing login details
              (Admin/FTP) transfers responsibility for the site to the Client.
            </li>
            <li>
              <strong>Security:</strong> The Company is not responsible for
              security unless a maintenance package is active.
            </li>
            <li>
              <strong>Errors:</strong> The Client is responsible for
              spell-checking. The Company is not liable for spelling errors or
              copyright infringements on supplied content.
            </li>
            <li>
              <strong>Browsers:</strong> We support current versions of popular
              browsers (Chrome, Firefox, etc.). We cannot guarantee
              functionality on older systems or versions released post-handover.
            </li>
          </ul>
        </section>

        {/* Post Project Alterations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Post Project Alterations
          </h2>
          <p className="mb-4">
            Requests for new pages, different functionality, or alterations to
            completed pages will be quoted separately.
          </p>
          <p>
            The Company is not responsible for alterations made by the Client or
            third parties. Resolving issues caused by such changes may require a
            one-off Web Development charge.
          </p>
        </section>

        {/* Payments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Payments</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>50% Deposit on acceptance; Balance on delivery.</strong>
            </li>
            <li>
              The Company reserves the right to suspend accounts without warning
              for late payments.
            </li>
            <li>
              <strong>The 2-Week Trial:</strong> All changes must be submitted
              within 2 weeks after trial. After this, the project is considered
              complete. Later changes are billed at{' '}
              <strong>R450 per hour</strong>.
            </li>
            <li>All prices exclude VAT.</li>
            <li>
              Annual renewal fees are payable via bank deposit on the month of
              inception.
            </li>
          </ul>
        </section>

        {/* Technology & SEO */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Technology & SEO
          </h2>
          <p className="mb-4">
            We utilize modern technology stacks including Nextjs, Tailwind,
            JavaScript, MongoDB and <strong>Convex (React)</strong>.
          </p>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p>
              <strong>SEO Note:</strong> Rankings cannot be guaranteed. No
              business can guarantee a #1 spot on Google. We highly recommend
              our SEO packages to increase your visibility.
            </p>
          </div>
        </section>

        {/* Warranty */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Warranty</h2>
          <p className="mb-4">
            The Company takes no responsibility for websites hosted on external
            servers. This includes hacking, downtime, backups, or email
            failures.
          </p>
          <p className="italic">
            Repairs or updates requested for external hosting environments will
            be billed at our basic hourly rate of <strong>R350 per hour</strong>
            .
          </p>
        </section>
      </div>
    </section>
  )
}
