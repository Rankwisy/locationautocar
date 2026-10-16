import EsPageTemplate from '@/components/Layout/EsPageTemplate';
import { esMetadata } from '@/data/esSeo';

export const metadata = esMetadata({
  path: '/es',
  frPath: '/',
  title: 'Alquiler de autocar con conductor en Bruselas | Grupos desde 2007',
  description:
    'Alquiler de autocar, autobús y minibús con conductor en Bruselas para grupos: excursiones a Brujas y Gante, traslados al aeropuerto y viajes de empresa. Presupuesto gratis en 24 h.',
});

export default function EsHome() {
  return (
    <EsPageTemplate
      path="/es"
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/location-bus-bruxelles2-1-scaled.jpeg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar con conductor para grupos en Bruselas' }}
      h1="Alquiler de autocar con conductor en Bruselas"
      intro="¿Viaja a Bruselas con un grupo, por vacaciones o por trabajo? Desde 2007 ofrecemos autocares, autobuses y minibuses con conductor profesional para excursiones, traslados al aeropuerto y viajes de empresa en Bélgica y Europa."
      sections={[
        {
          title: 'Nuestros servicios para grupos',
          cards: [
            {
              title: 'Alquiler de autocar en Bruselas',
              text: 'Minibús, autobús y autocar con conductor, por horas o por día.',
              href: '/es/alquiler-autocar-bruselas',
            },
            {
              title: 'Excursiones desde Bruselas',
              text: 'Brujas, Gante, Ámsterdam y otras ciudades en un solo día.',
              href: '/es/excursiones-desde-bruselas',
            },
            {
              title: 'Traslado aeropuerto de Bruselas',
              text: 'Recogida en Zaventem o Charleroi con seguimiento del vuelo.',
              href: '/es/transfer-aeropuerto-bruselas',
            },
          ],
        },
        {
          title: 'Por qué elegirnos',
          bullets: [
            'Más de 15 años de experiencia transportando grupos en Bélgica y Europa.',
            'Vehículos de 8 a 60 plazas, adaptados al tamaño de su grupo.',
            'Conductores profesionales que conocen Bruselas y sus zonas de bajas emisiones (LEZ).',
            'Presupuesto gratuito y sin compromiso en 24 horas.',
          ],
        },
      ]}
    />
  );
}
