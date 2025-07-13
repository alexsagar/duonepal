import React from 'react';
import { BookOpen, Mic, BarChart3, PenTool, CheckSquare } from 'lucide-react';
import '../styles/FeaturesSection.css';

const features = [
  {
    icon: BookOpen,
    title: 'Free Preparation Guide',
    description: 'Learn the test format and key sections with our comprehensive downloadable guide.',
    actionText: 'Download PDF',
    actionIcon: '→',
    modal: 'preparation'
  },
  {
    icon: Mic,
    title: 'Speaking Test Tips',
    description: 'Get confident with real tips, do\'s & don\'ts, and sample answers.',
    actionText: 'View Tips',
    actionIcon: '→',
    modal: 'speaking'
  },
  {
    icon: BarChart3,
    title: 'Scoring Explained',
    description: 'Understand Duolingo scoring and what your target score means.',
    actionText: 'Learn More',
    actionIcon: '→',
    modal: 'scoring'
  },
  {
    icon: PenTool,
    title: 'Practice Questions',
    description: 'Try real style questions across reading, writing, and speaking.',
    actionText: 'Practice Now',
    actionIcon: '→',
    modal: 'practice'
  },
  {
    icon: CheckSquare,
    title: 'Test Day Checklist',
    description: 'Everything to prepare on test day - ID, internet, camera setup and more.',
    actionText: 'See Checklist',
    actionIcon: '→',
    modal: 'checklist'
  }
];

const FeaturesSection = ({ openModal }) => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-section-title">Everything You Need to Succeed</h2>
          <p className="features-section-subtitle">
            Comprehensive resources and tools to help you ace your Duolingo English Test
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="features-card">
                <div className="features-icon">
                  <IconComponent size={32} />
                </div>
                <div className="features-content">
                  <h3 className="features-card-title">{feature.title}</h3>
                  <p className="features-card-description">{feature.description}</p>
                  <button
                    className="features-action-btn"
                    onClick={() => openModal(feature.modal)}
                  >
                    {feature.actionText}
                    <span className="features-action-arrow">{feature.actionIcon}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
