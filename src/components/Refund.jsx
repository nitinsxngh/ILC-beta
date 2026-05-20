import React from 'react';

export default function Refund() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">REFUND POLICY</h1>
        <p className="legal-meta">
          <strong>Innovative ILC India Pvt Ltd</strong>
        </p>

        <section className="legal-section">
          <h2>REFUND POLICY FOR THE FIRM ON FIRM’S WEBSITE</h2>

          <h3>1. Psychometric Tests</h3>
          <ul>
            <li>No refund once test is started or completed.</li>
            <li>Refund only if:</li>
            <li>Payment deducted but test not accessible.</li>
            <li>Technical failure from our side.</li>
            <li>Before starting the test, 100% refund would be initiated.</li>
          </ul>

          <h3>2. Verified CV</h3>
          <ul>
            <li>No refund once after CV has started.</li>
            <li>Refund only if:</li>
            <li>Payment deducted but CV is not accessible.</li>
            <li>Technical failure from our side.</li>
            <li>Before accessing the CV, 100% refund would be initiated.</li>
          </ul>

          <h3>3. Counselling Sessions</h3>
          <ul>
            <li>In case counsellor didn’t show up, 100% refund would be initiated.</li>
            <li>Sessions can be cancelled or rescheduled up to 24 hours before the scheduled time.</li>
            <li>Cancellations within 12 hours of the session are non-refundable.</li>
            <li>Failure to attend the session (no-show) will result in forfeiture of the session without refund.</li>
            <li>
              In case the counsellor fails to attend or there is a technical issue from our side,
              users are eligible for a full refund or rescheduling.
            </li>
          </ul>

          <h3>4. Packages</h3>
          <ul>
            <li>
              Customers may request a refund within 3 days of purchase, provided no services
              included in the package have been used.
            </li>
            <li>
              Once any service within the package is accessed or initiated, the package becomes
              partially consumed and is no longer eligible for a full refund.
            </li>
            <li>The company reserves the right to assess refund eligibility on a case-by-case basis.</li>
          </ul>
        </section>

        <div className="legal-actions">
          <a className="legal-back" href="#top">
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
}

