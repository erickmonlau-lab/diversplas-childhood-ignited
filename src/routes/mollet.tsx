import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/mollet')({
  component: MolletPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Mollet del Vallès" },
      { name: "description", content: "Empresa especializada en actividades extraescolares (fútbol, multideporte, baile, inglés, etc) y casales en Mollet del Vallès para colegios y AFAs. NO hacemos gestión de mediodía." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Mollet del Vallès" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Mollet del Vallès." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/mollet" }
    ]
  })
});

function MolletPage() {
  return <LandingPage city="Mollet del Vallès" cityShort="Mollet" locationContext="Mollet del Vallès y alrededores" />;
}
