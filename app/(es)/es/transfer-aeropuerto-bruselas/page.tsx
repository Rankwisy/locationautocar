import EsPageTemplate from '@/components/Layout/EsPageTemplate';
import { esMetadata } from '@/data/esSeo';

const PATH = '/es/transfer-aeropuerto-bruselas';

export const metadata = esMetadata({
  path: PATH,
  frPath: '/nos-services/transferts-aeroports',
  title: 'Traslado aeropuerto de Bruselas para grupos | Zaventem y Charleroi',
  description:
    'Traslado en autocar o minibús con conductor desde el aeropuerto de Bruselas-Zaventem o Charleroi hasta su hotel. Seguimiento del vuelo y presupuesto gratuito.',
});

const faqs = [
  {
    q: '¿Cuánto cuesta un traslado en autocar desde el aeropuerto de Bruselas?',
    a: 'Como referencia, un traslado del aeropuerto de Bruselas-Zaventem al centro de la ciudad parte de unos 250 € para un autocar de 30 plazas. El precio final depende del número de personas y del destino.',
  },
  {
    q: '¿Qué pasa si mi vuelo se retrasa?',
    a: 'Hacemos seguimiento del vuelo para ajustar la recogida a la hora real de llegada.',
  },
  {
    q: '¿Cubren también el aeropuerto de Charleroi?',
    a: 'Sí. Realizamos traslados desde Bruselas-Zaventem y desde Charleroi hacia Bruselas y cualquier destino en Bélgica.',
  },
  {
    q: '¿Pueden recogernos en la estación de Bruselas-Midi?',
    a: 'Sí, además de los aeropuertos recogemos a grupos en estaciones y hoteles. Indíquenos el punto de recogida al pedir el presupuesto.',
  },
];

export default function Page() {
  return (
    <EsPageTemplate
      path={PATH}
      crumb="Traslado aeropuerto de Bruselas"
      h1="Traslado en autocar desde el aeropuerto de Bruselas"
      intro="Llegue a Bruselas sin complicaciones. Recogemos a su grupo en el aeropuerto de Bruselas-Zaventem o en Charleroi y lo llevamos directamente al hotel, al lugar de trabajo o al punto de partida de su viaje."
      sections={[
        {
          title: 'Un servicio pensado para grupos',
          bullets: [
            'Conductor profesional que recoge a su grupo en el punto acordado.',
            'Seguimiento del vuelo para ajustar la recogida a la hora real de llegada.',
            'Vehículos de 8 a 55 plazas con espacio para el equipaje.',
            'Traslados de ida, de vuelta o ida y vuelta.',
          ],
        },
        {
          title: 'Aeropuertos y estaciones',
          paragraphs: [
            'Cubrimos el aeropuerto de Bruselas-Zaventem, el aeropuerto de Charleroi y la estación de Bruselas-Midi, con destino a Bruselas, Brujas, Gante y cualquier ciudad de Bélgica.',
          ],
        },
        {
          title: 'Precio orientativo',
          paragraphs: [
            'Zaventem – centro de Bruselas, autocar de 30 plazas: desde 250 €. Solicite un presupuesto exacto indicando vuelo, hora y número de pasajeros.',
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
