import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Leaf, MapPin, ArrowRight } from 'lucide-react';

const EnvironmentalCompliance: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Leaf className="w-4 h-4" />
              Flotte 100% Conforme LEZ
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tous nos autocars sont conformes aux normes Euro 6 ou supérieures
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Garantissant un accès illimité à la Zone de Basses Émissions (LEZ) de Bruxelles.
              Voyagez en toute sérénité sans risque d'amende ni de restriction de circulation au cœur de la capitale.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Accès libre au centre-ville de Bruxelles, y compris Grand-Place et quartier européen</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Aucun risque d'amende de 350€ pour vos groupes et événements</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Conformité totale avec les normes 2026 et au-delà</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Flotte moderne, entretien régulier, émissions réduites</span>
              </div>
            </div>

            <Link
              to="/lez-bruxelles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              En savoir plus sur la LEZ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Flotte conforme Euro 6+</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">0€</div>
              <div className="text-sm text-gray-600">Amende LEZ à craindre</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2026+</div>
              <div className="text-sm text-gray-600">Normes respectées</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Accès centre-ville</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalCompliance;
