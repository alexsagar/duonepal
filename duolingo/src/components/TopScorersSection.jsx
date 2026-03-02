import React, { useState, useEffect, useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Star, Trophy, Award } from 'lucide-react';
import '../styles/TopScorersSection.css';

const TopScorersSection = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const scrollContainerRef = useRef(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Sample top scorers data with fewer scorers for horizontal layout
  const generateTopScorers = (monthIndex) => {
    const names = [
      'Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim',
      'Jessica Brown', 'Alex Thompson', 'Maria Garcia', 'James Wilson',
      'Lisa Anderson', 'Robert Taylor', 'Anna Martinez', 'Chris Lee'
    ];

    const roles = [
      'Student', 'Professional', 'Graduate', 'Teacher', 'Engineer',
      'Designer', 'Developer', 'Manager', 'Researcher', 'Consultant'
    ];

    const getRandomScore = () => Math.floor(Math.random() * 40) + 110; // 110-150 range
    const getRandomName = () => names[Math.floor(Math.random() * names.length)];
    const getRandomRole = () => roles[Math.floor(Math.random() * roles.length)];
    const getRandomImage = (index) => `https://images.pexels.com/photos/${1000000 + monthIndex * 100 + index}/pexels-photo-${1000000 + monthIndex * 100 + index}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`;

    // Only 5 scorers for horizontal layout
    return Array.from({ length: 8 }, (_, index) => ({
      id: `${monthIndex}-${index}`,
      name: getRandomName(),
      role: getRandomRole(),
      score: getRandomScore(),
      image: getRandomImage(index),
      rank: index + 1,
      isTopThree: index < 3
    }));
  };

  const allScorers = months.map((_, index) => generateTopScorers(index));

  // Scroll to active month
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const activeTab = scrollContainer.children[activeMonth];
      
      if (activeTab) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        // Calculate the scroll position to center the active tab
        const containerCenter = containerRect.width / 2;
        const tabCenter = tabRect.left - containerRect.left + tabRect.width / 2;
        const scrollOffset = tabCenter - containerCenter;
        
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + scrollOffset,
          behavior: 'smooth'
        });
      }
    }
  }, [activeMonth]);

  const handlePrevMonth = () => {
    setActiveMonth((prev) => (prev - 1 + months.length) % months.length);
  };

  const handleNextMonth = () => {
    setActiveMonth((prev) => (prev + 1) % months.length);
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="rank-icon gold" size={20} />;
      case 2:
        return <Award className="rank-icon silver" size={20} />;
      case 3:
        return <Award className="rank-icon bronze" size={20} />;
      default:
        return <span className="rank-number">#{rank}</span>;
    }
  };

  return (
    <section className="top-scorers-section">
      <div className="top-scorers-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title2">Our Top Scorers!</h2>
          <p className="section-subtitle">
            Find the best performers for your inspiration and boost your confidence!
          </p>
        </div>

        {/* Month Navigation */}
        <div className="month-navigation">
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={handlePrevMonth}
            aria-label="Previous month"
          >
            <IoChevronBack className="arrow-icon" />
          </button>
          
          <div className="months-container">
            <div className="months-scroll" ref={scrollContainerRef}>
              {months.map((month, index) => (
                <button
                  key={month}
                  className={`month-tab ${index === activeMonth ? 'active' : ''}`}
                  onClick={() => setActiveMonth(index)}
                >
                  <span className="month-name">{month}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <IoChevronForward className="arrow-icon" />
          </button>
        </div>

        {/* Top Scorers Horizontal Row */}
        <div className="scorers-row">
          {allScorers[activeMonth]?.map((scorer) => (
            <div 
              key={scorer.id} 
              className={`scorer-card ${scorer.isTopThree ? 'top-three' : ''}`}
            >
              <div className="scorer-rank">
                {getRankIcon(scorer.rank)}
              </div>
              
              <div className="scorer-image-container">
                <img 
                  src={scorer.image} 
                  alt={scorer.name}
                  className="scorer-image"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`;
                  }}
                />
                <div className="score-badge">
                  <Star className="star-icon" size={12} />
                  <span className="score-text">{scorer.score}</span>
                </div>
              </div>
              
              <div className="scorer-info">
                <h3 className="scorer-name">{scorer.name}</h3>
                <p className="scorer-role">{scorer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopScorersSection;
