import React from 'react';
import Footer from '../components/Footer';

const BookTest = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ paddingTop: '70px', padding: '70px 2rem 4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
          Book Your Test
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
          This page is under construction. Please use the "Book Now" button in the navigation to proceed with your booking.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BookTest;