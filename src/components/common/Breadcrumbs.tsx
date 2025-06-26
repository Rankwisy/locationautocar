import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const location = useLocation();
  
  // Generate breadcrumbs from URL if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Accueil', path: '/' }];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Map URL segments to readable labels
      const labelMap: { [key: string]: string } = {
        'nos-services': 'Nos Services',
        'notre-flotte': 'Notre Flotte',
        'destinations': 'Destinations',
        'blog': 'Blog',
        'contactez-nous': 'Contact',
        'transferts-aeroports': 'Transferts Aéroports',
        'excursions-tourisme': 'Excursions Touristiques',
        'voyages-affaires': 'Voyages d\'Affaires',
        'mise-a-disposition': 'Mise à Disposition',
        'minibus': 'Minibus',
        'bus': 'Bus',
        'autocars': 'Autocars',
        'bruxelles': 'Bruxelles',
        'belgique': 'Belgique',
        'europe': 'Europe'
      };
      
      const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, path: currentPath });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items || generateBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }
  
  return (
    <nav 
      className={`bg-gray-50 py-3 ${className}`}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === 0 && (
                <Home className="w-4 h-4 text-gray-500 mr-2" />
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;