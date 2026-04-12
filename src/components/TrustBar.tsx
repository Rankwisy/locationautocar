import { CheckCircle } from 'lucide-react';

const TRUST_ITEMS = [
  'Depuis 2007',
  '100% Euro 6',
  'Devis gratuit sous 24h',
  'Chauffeurs certifiés',
  'Sans engagement',
];

export default function TrustBar() {
  return (
    <div className="bg-blue-50 border-y border-blue-100 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-sm text-blue-800 font-medium">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
