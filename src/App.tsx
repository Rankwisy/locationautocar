import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import VehiclesPage from './pages/VehiclesPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="vehicules" element={<VehiclesPage />} />
            <Route path="vehicules/:category" element={<VehiclesPage />} />
            <Route path="tarifs" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Tarifs - Page en construction</h1></div>} />
            <Route path="reservation" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Réservation - Page en construction</h1></div>} />
            <Route path="a-propos" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">À Propos - Page en construction</h1></div>} />
            <Route path="contact" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Contact - Page en construction</h1></div>} />
            <Route path="blog" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Blog - Page en construction</h1></div>} />
            <Route path="mentions-legales" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Mentions Légales - Page en construction</h1></div>} />
            <Route path="politique-confidentialite" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Politique de Confidentialité - Page en construction</h1></div>} />
            <Route path="conditions-generales" element={<div className="py-20 text-center"><h1 className="text-4xl font-bold">Conditions Générales - Page en construction</h1></div>} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;