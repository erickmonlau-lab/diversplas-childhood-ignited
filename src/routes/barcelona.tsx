import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/barcelona')({
  component: BarcelonaPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Barcelona" },
      { name: "description", content: "Empresa especializada en actividades extraescolares y casales en Barcelona para colegios y AFAs. NO hacemos gestión de mediodía." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Barcelona" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Barcelona." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/barcelona" }
    ]
  })
});

function BarcelonaPage() {
  return <LandingPage city="Barcelona" cityShort="Barcelona" />;
}
