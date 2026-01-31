import { useState, useEffect } from 'react'
import { LandingPage } from './components/LandingPage'
import { PrivacyPolicy } from './components/PrivacyPolicy'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path on load
    const path = window.location.pathname;
    if (path === '/privacy') {
      setCurrentPage('privacy');
    }
  }, []);

  useEffect(() => {
    // Update URL when page changes
    if (currentPage === 'privacy') {
      window.history.pushState({}, '', '/privacy');
    } else {
      window.history.pushState({}, '', '/');
    }
  }, [currentPage]);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  return <LandingPage />
}
