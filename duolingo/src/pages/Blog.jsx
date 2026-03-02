import React from 'react';
import Footer from '../components/Footer';
import '../styles/Blog.css';

const blogPosts = [
  {
    slug: 'duolingo-test-booking-nepal-guide',
    title: 'How to Book Duolingo English Test in Nepal: Complete 2026 Guide',
    description:
      'Step-by-step guide for Nepali students to book the Duolingo English Test using local payment methods, with practical preparation and verification tips.',
    date: 'March 2026',
    content: [
      'Booking the Duolingo English Test in Nepal should be simple and transparent. Start by confirming your name, email, and phone number exactly as they appear on your legal ID. This reduces correction delays later.',
      'Choose a reliable booking platform that supports local wallets like eSewa, Khalti, or Fonepay. After payment, keep a clear receipt screenshot or PDF and upload it for verification.',
      'Once verified, you receive confirmation and instructions for your test account. Always test your camera, microphone, internet stability, and room setup before your exam day.',
    ],
  },
  {
    slug: 'duolingo-english-test-price-nepal',
    title: 'Duolingo English Test Price in Nepal: What You Should Actually Pay',
    description:
      'Understand DET pricing in Nepal, service handling, and how to avoid hidden charges when booking your Duolingo English Test.',
    date: 'March 2026',
    content: [
      'Many students search for the exact Duolingo English Test price in Nepal. The key is full transparency: know your final payable amount before checkout and confirm there are no hidden processing fees.',
      'When comparing services, look at support quality, booking speed, and payment verification timelines. A slightly higher but transparent offer is often safer than unclear low-price offers.',
      'Before submitting payment, verify the support contact details and official communication channel. This protects you from delays and fraudulent listings.',
    ],
  },
  {
    slug: 'duolingo-test-preparation-tips-nepal',
    title: 'Duolingo Test Preparation Tips for Nepali Students',
    description:
      'Practical DET preparation strategy for students in Nepal, including speaking, writing, and test-day checklist guidance.',
    date: 'March 2026',
    content: [
      'Good DET performance comes from consistency. Practice short speaking prompts daily, review writing tasks with time limits, and build vocabulary through reading and listening exposure.',
      'Use a simple test-day checklist: stable internet, quiet room, charged device, valid ID, and clean desk setup. This prevents avoidable technical flags during the exam.',
      'Take at least one full mock under real conditions. Timing pressure and confidence both improve when your practice simulates the actual environment.',
    ],
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-container">
          <p className="blog-eyebrow">DuoNepal Blog</p>
          <h1>Duolingo English Test Resources for Students in Nepal</h1>
          <p>
            SEO-focused guides on booking, pricing, and preparation to help Nepali students plan better
            and avoid common mistakes.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="blog-container">
          {blogPosts.map((post) => (
            <article key={post.slug} id={post.slug} className="blog-card">
              <p className="blog-date">{post.date}</p>
              <h2>{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <div className="blog-content">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
