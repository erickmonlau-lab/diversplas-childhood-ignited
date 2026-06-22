import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/sant-fost')({
  component: SantFostPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Sant Fost de Campsentelles" },
      { name: "description", content: "Empresa especializada en actividades extraescolares (fútbol, multideporte, baile, inglés, etc) y casales en Sant Fost de Campsentelles para colegios y AFAs. NO hacemos gestión de mediodía." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Sant Fost de Campsentelles" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Sant Fost de Campsentelles." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/sant-fost" }
    ]
  })
});

function SantFostPage() {
  return <LandingPage city="Sant Fost de Campsentelles" cityShort="Sant Fost" locationContext="Sant Fost de Campsentelles y área del Vallès" />;
}
