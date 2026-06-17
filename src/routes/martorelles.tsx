import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from './index';

export const Route = createFileRoute('/martorelles')({
  component: MartorellesPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Martorelles" },
      { name: "description", content: "Empresa especializada en actividades extraescolares (fútbol, multideporte, baile, inglés, etc) y casales en Martorelles para colegios y AFAs. NO hacemos gestión de mediodía." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Martorelles" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Martorelles." }
    ]
  })
});

function MartorellesPage() {
  return <LandingPage city="Martorelles" cityShort="Martorelles" locationContext="Martorelles y el área del Vallès" />;
}
