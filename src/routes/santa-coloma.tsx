import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/santa-coloma')({
  component: SantaColomaPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Santa Coloma de Gramenet y el Fondo" },
      { name: "description", content: "Empresa especializada en actividades extraescolares (fútbol, multideporte, baile, inglés, etc) y casales en Santa Coloma de Gramenet, barrio del Fondo y Singuerlín para colegios y AFAs." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Santa Coloma de Gramenet" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Santa Coloma y el Fondo." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/santa-coloma" }
    ]
  })
});

function SantaColomaPage() {
  return <LandingPage city="Santa Coloma de Gramenet y el Fondo" cityShort="Santa Coloma" locationContext="Santa Coloma de Gramenet, barrio del Fondo y Singuerlín" />;
}
