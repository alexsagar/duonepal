import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { Toaster } from 'react-hot-toast';
import SeoManager from './components/SeoManager';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const BookNow = lazy(() => import('./pages/BookNow'));
const TrackBooking = lazy(() => import('./pages/TrackBooking'));
const Contact = lazy(() => import('./pages/Contact'));
const Refer = lazy(() => import('./pages/Refer'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Partner = lazy(() => import('./pages/Partner'));
const BulkBooking = lazy(() => import('./pages/BulkBooking'));
const Blog = lazy(() => import('./pages/Blog'));

const PreparationGuide = lazy(() => import('./pages/PreparationGuide'));
const SpeakingTestTips = lazy(() => import('./pages/SpeakingTestTips'));
const ScoringExplained = lazy(() => import('./pages/ScoringExplained'));
const PracticeQuestions = lazy(() => import('./pages/PracticeQuestions'));
const TestDayChecklist = lazy(() => import('./pages/TestDayChecklist'));
import WhatsAppButton from './components/WhatsAppButton';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Don't scroll to top if navigating to a hash/anchor
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [modal, setModal] = useState(null);

  const handleOpenModal = (modalType) => setModal(modalType);
  const handleCloseModal = () => setModal(null);

  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navbar />
        <Suspense fallback={null}>
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
            <Route path="/blog" element={<Blog />} />
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
        </Suspense>
      </div>
      <WhatsAppButton />
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
