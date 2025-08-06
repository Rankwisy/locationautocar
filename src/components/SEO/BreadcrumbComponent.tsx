import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbComponentProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({ 
  items, 
  className = "mb-8" 
}) => {
  return (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-500">
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-blue-600 transition-colors duration-200"
            title="Retour à l'accueil"
          >
            <Home className="w-4 h-4 mr-1" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
            <li>
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="hover:text-blue-600 transition-colors duration-200"
                  title={`Aller à ${item.name}`}
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">
                  {item.name}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbComponent;