import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from './index';

export const Route = createFileRoute('/badalona')({
  component: BadalonaPage,
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Badalona" },
      { name: "description", content: "Empresa especializada en actividades extraescolares (fútbol, multideporte, baile, inglés, etc) y casales en Badalona para colegios y AFAs. NO hacemos gestión de mediodía." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Badalona" },
      { property: "og:description", content: "Llevamos más de 20 años diseñando actividades para colegios y AFAs de Badalona." }
    ]
  })
});

function BadalonaPage() {
  return <LandingPage city="Badalona" cityShort="Badalona" locationContext="Badalona y alrededores" />;
}
