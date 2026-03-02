import React from 'react';
import { Lock } from 'lucide-react';
import '../styles/SimplePage.css';

const Privacy = () => {
  return (
    <div className="document-page-wrapper">
      <div className="document-container">

        <header className="doc-header">
          <h1>Privacy Policy</h1>
          <div className="doc-updated">
            <Lock size={16} className="doc-primary-icon" />
            Last Updated: November 15, 2025
          </div>
        </header>

        <main className="doc-content">

          <div className="doc-important-box">
            <p>Your privacy is important to us. We only collect the necessary information required to securely process your Duolingo English Test booking.</p>
          </div>

          <section>
            <h2>1. Information We Collect</h2>
            <p>When you book a test through DuoNepal, we collect personal information essential for test registration and payment verification:</p>
            <ul>
              <li>Full Name (as per your legal ID)</li>
              <li>Email Address</li>
              <li>Phone Number (WhatsApp contact)</li>
              <li>Payment receipt screenshots/data</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We do not sell or rent your personal data to third parties. We use your data exclusively for:</p>
            <ul>
              <li>Creating your Duolingo English Test account or verifying an existing one.</li>
              <li>Purchasing the test voucher on your behalf.</li>
              <li>Communicating booking updates and delivery of credentials.</li>
              <li>Internal reporting and security fraud prevention.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Protection & Security</h2>
            <p>We implement standard security measures to protect your personal information. Payment receipts and sensitive identifiers are stored securely and purged periodically as per our data retention policies.</p>
          </section>

          <section>
            <h2>4. Third-Party Sharing</h2>
            <p>Your name and email address are shared strictly with Duolingo Inc. during the test booking phase. Financial transaction data is processed securely by your chosen payment gateway (e.g., eSewa) and is subject to their own privacy and security provisions.</p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>You have the right to request information on the data we hold about you and request deletion of your data post-test completion, provided there are no ongoing disputes or regulatory requirements to retain it.</p>
            <p>For any privacy-related inquiries, please contact us at <strong>getduolingo@gmail.com</strong>.</p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Privacy;
