import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import BookNow from './pages/BookNow';

import PreparationGuide from './pages/PreparationGuide';
import SpeakingTestTips from './pages/SpeakingTestTips';
import ScoringExplained from './pages/ScoringExplained';
import PracticeQuestions from './pages/PracticeQuestions';
import TestDayChecklist from './pages/TestDayChecklist';
import TrackBooking from './pages/TrackBooking';
import Contact from './pages/Contact';
import Refer from './pages/Refer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Partner from './pages/Partner';
import BulkBooking from './pages/BulkBooking';
import Modal from './components/Modal';
import { Toaster } from 'react-hot-toast';

function App() {
  const [modal, setModal] = useState(null);

  const handleOpenModal = (modalType) => setModal(modalType);
  const handleCloseModal = () => setModal(null);

  return (
    <Router>
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home openModal={handleOpenModal} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/track-booking" element={<TrackBooking />} />
<Route path="/contact" element={<Contact />} />
<Route path="/refer" element={<Refer />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/partner" element={<Partner />} />
<Route path="/bulk-booking" element={<BulkBooking />} />
        </Routes>

        {/* Modals for each feature */}
        <Modal open={modal === 'preparation'} onClose={handleCloseModal}>
          <PreparationGuide />
        </Modal>
        <Modal open={modal === 'speaking'} onClose={handleCloseModal}>
          <SpeakingTestTips />
        </Modal>
        <Modal open={modal === 'scoring'} onClose={handleCloseModal}>
          <ScoringExplained />
        </Modal>
        <Modal open={modal === 'practice'} onClose={handleCloseModal}>
          <PracticeQuestions />
        </Modal>
        <Modal open={modal === 'checklist'} onClose={handleCloseModal}>
          <TestDayChecklist />
        </Modal>
      </div>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
