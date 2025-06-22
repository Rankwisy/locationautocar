import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="nos-services" element={<ServicesPage />} />
            <Route path="nos-services/:category" element={<ServicesPage />} />
            <Route path="notre-flotte" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Notre Flotte - Page en construction</h1></div>} />
            <Route path="notre-flotte/:type" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Flotte - Page en construction</h1></div>} />
            <Route path="destinations" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Destinations - Page en construction</h1></div>} />
            <Route path="destinations/:location" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Destination - Page en construction</h1></div>} />
            <Route path="blog" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Blog - Page en construction</h1></div>} />
            <Route path="contactez-nous" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;