import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface RelatedItem {
  title: string;
  description: string;
  link: string;
  type: 'internal' | 'external';
  image?: string;
}

interface RelatedContentProps {
  title: string;
  items: RelatedItem[];
  className?: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({ 
  title, 
  items, 
  className = '' 
}) => {
  if (items.length === 0) return null;

  return (
    <div className={`bg-gray-50 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        {title}
      </h3>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              {item.image && (
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  {item.type === 'internal' ? (
                    <Link
                      to={item.link}
                      className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {item.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  )}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;