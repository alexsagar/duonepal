import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  Share2,
  UserPlus,
  Gift,
  Mail,
  Copy,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import '../styles/Refer.css';
import { postJson } from '../utils/api';

const generateRefToken = () => {
  const bytes = new Uint8Array(8);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
};

const Refer = () => {
  const [identifier, setIdentifier] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!identifier.trim()) {
      toast.error('Please enter your email or phone number.');
      return;
    }
    const token = generateRefToken();
    const link = `https://duonepal.com/book-now?ref=${token}`;

    try {
      await postJson('/api/inquiries', {
        type: 'refer',
        payload: { identifier, generatedLink: link },
      });
      setGeneratedLink(link);
      toast.success('Your unique referral link is ready!');
      setCopied(false);
    } catch (error) {
      toast.error(error?.message || 'Failed to generate referral link.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="refer-page-wrapper">

      <div className="refer-hero">
        <div className="refer-badge">
          <Sparkles size={16} />
          <span>Reward Program</span>
        </div>
        <h1>Invite Friends & Earn Rewards</h1>
        <p>
          Love DuoNepal? Share your unique link with friends who need to book their Duolingo English Test. They get a smooth booking experience, and you get rewarded!
        </p>
      </div>

      <div className="refer-steps-container">

        <div className="refer-step-card">
          <div className="step-icon-wrapper">
            <Share2 size={36} />
          </div>
          <h3>1. Share Your Link</h3>
          <p>Generate your unique referral link below and send it to your friends via WhatsApp, Messenger, or Email.</p>
        </div>

        <div className="refer-step-card">
          <div className="step-icon-wrapper">
            <UserPlus size={36} />
          </div>
          <h3>2. Friends Book a Test</h3>
          <p>Your friends use your link to navigate to our Book Now page and complete their secure test purchase.</p>
        </div>

        <div className="refer-step-card">
          <div className="step-icon-wrapper">
            <Gift size={36} />
          </div>
          <h3>3. Earn Cash Rewards</h3>
          <p>For every successful, verified booking through your link, you earn a flat NPR 500 directly to your eSewa or bank!</p>
        </div>

      </div>

      <div className="refer-generator-section">
        <div className="generator-card">
          <h2>Get Your Unique Link</h2>
          <p>Enter the email or phone number you used for your own booking to generate your referral URL.</p>

          <form className="generate-form" onSubmit={handleGenerate}>
            <div className="generate-input-group">
              <Mail size={20} className="generate-icon" />
              <input
                type="text"
                className="generate-input"
                placeholder="Ex. 98XXXXXXXX or ram@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <button type="submit" className="generate-btn">
              Generate Link Now
            </button>
          </form>

          {generatedLink && (
            <div className="link-result-box">
              <label>Your Referral Link</label>
              <div className="copy-wrapper">
                <input type="text" readOnly value={generatedLink} />
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? (
                    <><CheckCircle2 size={18} /> Copied</>
                  ) : (
                    <><Copy size={18} /> Copy Link</>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Refer;
