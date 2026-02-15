import React from 'react';
import { Link } from 'react-router-dom';
import { getInternalLinkAnchor } from '../../data/seoData';

interface InternalLinkProps {
  to: string;
  anchor?: string;
  anchorVariant?: number;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}

/**
 * Lien interne avec ancre SEO optimisée.
 * Utilise les ancres définies dans seoData pour éviter la sur-optimisation.
 */
const InternalLink: React.FC<InternalLinkProps> = ({
  to,
  anchor,
  anchorVariant = 0,
  className = 'text-blue-600 hover:text-blue-700 font-semibold',
  title,
  children,
}) => {
  const displayText = children ?? anchor ?? getInternalLinkAnchor(to, anchorVariant);
  const linkTitle = title ?? displayText;

  return (
    <Link to={to} className={className} title={typeof linkTitle === 'string' ? linkTitle : undefined}>
      {displayText}
    </Link>
  );
};

export default InternalLink;
