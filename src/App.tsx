import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import FleetBusPage from './pages/FleetBusPage';
import FleetMinibusPage from './pages/FleetMinibusPage';
import FleetAutocarsPage from './pages/FleetAutocarsPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationBruxellesPage from './pages/DestinationBruxellesPage';
import DestinationBelgiquePage from './pages/DestinationBelgiquePage';
import DestinationEuropePage from './pages/DestinationEuropePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="nos-services" element={<ServicesPage />} />
            <Route path="nos-services/:category" element={<ServicesPage />} />
            <Route path="notre-flotte" element={<FleetPage />} />
            <Route path="notre-flotte/bus" element={<FleetBusPage />} />
            <Route path="notre-flotte/minibus" element={<FleetMinibusPage />} />
            <Route path="notre-flotte/autocars" element={<FleetAutocarsPage />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="destinations/bruxelles" element={<DestinationBruxellesPage />} />
            <Route path="destinations/belgique" element={<DestinationBelgiquePage />} />
            <Route path="destinations/europe" element={<DestinationEuropePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="contactez-nous" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;