import EsPageTemplate from '@/components/Layout/EsPageTemplate';
import { esMetadata } from '@/data/esSeo';

const PATH = '/es/excursiones-desde-bruselas';

export const metadata = esMetadata({
  path: PATH,
  frPath: '/destinations/bruges',
  title: 'Excursión a Brujas y Gante desde Bruselas en autocar | Grupos',
  description:
    'Excursiones en autocar con conductor desde Bruselas a Brujas, Gante y Ámsterdam. Itinerarios, precios orientativos y consejos para grupos. Presupuesto gratuito.',
});

const faqs = [
  {
    q: '¿Cuánto se tarda de Bruselas a Brujas en autocar?',
    a: 'Brujas está a unos 90 km de Bruselas, aproximadamente 1 hora y 15 minutos en autocar según el tráfico.',
  },
  {
    q: '¿Se puede visitar Brujas en un día desde Bruselas?',
    a: 'Sí. Saliendo hacia las 8:30 y regresando hacia las 18:00 hay tiempo para la plaza del Markt, el campanario, un paseo en barco por los canales y algo de tiempo libre.',
  },
  {
    q: '¿Cuánto cuesta una excursión a Brujas en autocar desde Bruselas?',
    a: 'Como referencia, ida y vuelta en el día: desde 400 € en minibús (8–16 plazas), 550 € en autobús (20–35 plazas) y 700 € en autocar (40–55 plazas), con conductor y combustible incluidos. El precio final depende del itinerario.',
  },
  {
    q: '¿Dónde aparca el autocar en Brujas?',
    a: 'El centro histórico es en gran parte peatonal. El conductor deja al grupo lo más cerca posible y el autocar espera en un aparcamiento para autocares fuera del centro.',
  },
];

export default function Page() {
  return (
    <EsPageTemplate
      path={PATH}
      crumb="Excursiones desde Bruselas"
      h1="Excursiones en autocar desde Bruselas: Brujas, Gante y más"
      intro="Bruselas es el punto de partida ideal para descubrir Flandes. Con nuestro autocar con conductor, su grupo visita las ciudades medievales más bonitas de Bélgica en un solo día, sin preocuparse por el tráfico ni por el aparcamiento."
      sections={[
        {
          title: 'Destinos más populares',
          cards: [
            {
              title: 'Brujas (≈ 90 km)',
              text: 'Ciudad medieval declarada Patrimonio de la Humanidad: canales, el Markt, el campanario y chocolaterías.',
            },
            {
              title: 'Gante',
              text: 'Castillo de los Condes, catedral de San Bavón y un casco histórico muy animado, más tranquilo que Brujas.',
            },
            {
              title: 'Ámsterdam',
              text: 'Una jornada larga o una excursión de dos días hacia los Países Bajos. Consúltenos el itinerario.',
            },
          ],
        },
        {
          title: 'Itinerario recomendado: un día en Brujas',
          bullets: [
            '08:30 – Salida desde Bruselas (punto de encuentro a convenir).',
            '09:45 – Llegada a Brujas, visita del Markt y del campanario.',
            '12:00 – Comida en grupo en el centro.',
            '13:30 – Paseo en barco por los canales.',
            '15:00 – Museo, taller de chocolate o tiempo libre.',
            '17:30 – Regreso al autocar y vuelta a Bruselas.',
          ],
        },
        {
          title: 'Precios orientativos (ida y vuelta en el día)',
          bullets: [
            'Minibús, 8–16 plazas: desde 400 €.',
            'Autobús, 20–35 plazas: desde 550 €.',
            'Autocar, 40–55 plazas: desde 700 €.',
            'Conductor y combustible incluidos. Presupuesto personalizado bajo petición.',
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
