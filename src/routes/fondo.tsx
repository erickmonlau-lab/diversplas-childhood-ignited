import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/fondo')({
  component: FondoPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Fondo (Santa Coloma de Gramenet)" },
      { name: "description", content: "Empresa especializada en actividades extraescolares y casales en el barrio del Fondo (Santa Coloma de Gramenet). Activitats extraescolars al Fondo para colegios y AFAs." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en el Fondo" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs del barrio del Fondo." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/fondo" }
    ]
  })
});

function FondoPage() {
  return <LandingPage city="el barrio del Fondo" cityShort="Fondo" locationContext="el barrio del Fondo y Singuerlín" />;
}
