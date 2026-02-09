import React from 'react';
import { CheckCircle, Leaf } from 'lucide-react';

interface LEZBadgeProps {
  standard?: string;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const LEZBadge: React.FC<LEZBadgeProps> = ({
  standard = 'Euro 6',
  variant = 'default',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold ${className}`}>
        <CheckCircle className="w-3 h-3" />
        <span>{standard}</span>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
            <Leaf className="w-5 h-5 text-green-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-gray-900">Norme environnementale : {standard}</h4>
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">
              Accès LEZ Bruxelles : <span className="font-semibold text-green-700">100% Autorisé (2026+)</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold ${className}`}>
      <CheckCircle className="w-4 h-4" />
      <span>LEZ Bruxelles : {standard}</span>
    </div>
  );
};

export default LEZBadge;
