import React from 'react';
import { ShieldAlert } from 'lucide-react';
import '../styles/SimplePage.css';

const Terms = () => {
  return (
    <div className="document-page-wrapper">
      <div className="document-container">

        <header className="doc-header">
          <h1>Terms & Conditions</h1>
          <div className="doc-updated">
            <ShieldAlert size={16} className="doc-primary-icon" />
            Last Updated: November 15, 2025
          </div>
        </header>

        <main className="doc-content">

          <div className="doc-important-box">
            <p>Please read these terms carefully before booking your Duolingo English Test through DuoNepal. By using our service, you agree to form a binding contract.</p>
          </div>

          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to DuoNepal. We provide a localized booking service for the Duolingo English Test in Nepal. These terms govern your use of our website, payment processing, and test voucher delivery services.</p>
          </section>

          <section>
            <h2>2. Booking Process & Accuracy</h2>
            <p>When booking a test, you are required to provide accurate information matching your official ID (Passport, Citizenship, etc.).</p>
            <ul>
              <li>DuoNepal is not responsible for tests invalidated due to name mismatch.</li>
              <li>A valid email address must be provided. Vouchers and confirmations will be sent electronically.</li>
            </ul>
          </section>

          <section>
            <h2>3. Payment & Pricing</h2>
            <p>Our stated price (e.g., NPR 8,500) covers the official test fee and our processing charges. We accept local payment methods including eSewa, Fonepay, and bank transfers.</p>
            <p>Prices are subject to change without prior notice based on currency conversion rates and official Duolingo pricing updates.</p>
          </section>

          <section>
            <h2>4. Refunds & Cancellations</h2>
            <p>Due to the digital nature of the test vouchers, <strong>all sales are final once a voucher has been issued or successfully applied to your account.</strong></p>
            <ul>
              <li>Refunds are only processed if DuoNepal fails to deliver the booking within 48 hours of successful payment verification.</li>
              <li>Refund processing may take 3-5 business days.</li>
            </ul>
          </section>

          <section>
            <h2>5. Liability Limitation</h2>
            <p>DuoNepal acts strictly as a booking facilitator. We are not responsible for your test results, potential technical issues encountered during the test, or the evaluation process conducted by Duolingo.</p>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Terms;
