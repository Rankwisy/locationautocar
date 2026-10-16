import EsPageTemplate from '@/components/Layout/EsPageTemplate';
import { esMetadata } from '@/data/esSeo';

const PATH = '/es/alquiler-autocar-bruselas';

export const metadata = esMetadata({
  path: PATH,
  frPath: '/location-autocar-bruxelles',
  title: 'Alquiler de autocar y minibús con conductor en Bruselas | Presupuesto',
  description:
    'Alquile un autocar, autobús o minibús con conductor en Bruselas para su grupo: 8 a 60 plazas, por horas o por día. Presupuesto gratuito en 24 horas.',
});

const faqs = [
  {
    q: '¿Cuánto cuesta alquilar un autocar con conductor en Bruselas?',
    a: 'El precio depende del vehículo, la duración y el recorrido. Como referencia, una excursión de un día con ida y vuelta desde Bruselas parte de unos 400 € en minibús (8–16 plazas), 550 € en autobús (20–35 plazas) y 700 € en autocar (40–60 plazas), con conductor y combustible incluidos. Le enviamos un presupuesto exacto sin compromiso.',
  },
  {
    q: '¿El alquiler incluye al conductor?',
    a: 'Sí. Todos nuestros vehículos se alquilan con conductor profesional, por lo que no necesita ningún permiso especial.',
  },
  {
    q: '¿Pueden circular sus vehículos por la zona de bajas emisiones (LEZ) de Bruselas?',
    a: 'Sí. Nuestro conductor conoce las normas de la LEZ de Bruselas y se encarga de que el trayecto cumpla la normativa.',
  },
  {
    q: '¿Con cuánta antelación debo reservar?',
    a: 'Cuanto antes mejor, sobre todo en temporada alta (mayo a septiembre) y en fechas de ferias o eventos. Escríbanos o llámenos y le respondemos en 24 horas.',
  },
];

export default function Page() {
  return (
    <EsPageTemplate
      path={PATH}
      crumb="Alquiler de autocar en Bruselas"
      h1="Alquiler de autocar con conductor en Bruselas"
      intro="Transporte de grupos en Bruselas y toda Bélgica: excursiones, congresos, bodas, viajes escolares y de empresa. Elija el vehículo que mejor se adapte a su grupo y viaje con total comodidad."
      sections={[
        {
          title: 'Elija el vehículo para su grupo',
          cards: [
            { title: 'Minibús', text: '8 a 16 plazas. Ideal para familias numerosas y grupos pequeños.' },
            { title: 'Autobús', text: '20 a 35 plazas. Perfecto para excursiones y eventos de empresa.' },
            { title: 'Autocar', text: '40 a 60 plazas. Para grupos grandes, viajes largos y circuitos.' },
          ],
        },
        {
          title: 'Para qué se usa nuestro servicio',
          bullets: [
            'Excursiones de un día a Brujas, Gante, Ámsterdam y otras ciudades.',
            'Traslados desde y hacia el aeropuerto de Bruselas-Zaventem o Charleroi.',
            'Viajes de empresa, congresos y reuniones en Bruselas.',
            'Bodas, eventos y celebraciones con transporte para los invitados.',
            'Viajes de estudios y de asociaciones.',
          ],
        },
        {
          title: 'Cómo reservar',
          paragraphs: [
            'Indíquenos la fecha, el número de personas y el recorrido por teléfono o por correo electrónico. Le enviamos un presupuesto gratuito en un plazo de 24 horas y, una vez confirmado, nos ocupamos de toda la organización.',
          ],
        },
      ]}
      faqs={faqs}
      image={{ src: 'https://ik.imagekit.io/by733ltn6/locationautocar/white-tourist-bus-road-poland-travel-concept.jpg?tr=w-1200,h-630,c-maintain_ratio,f-webp,q-85', alt: 'Autocar de turismo para grupos' }}
    />
  );
}
