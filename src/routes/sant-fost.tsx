import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/sant-fost')({
  component: SantFostPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares en Sant Fost de Campsentelles" },
      { name: "description", content: "Empresa de actividades extraescolares y casales para colegios y AFAs en Sant Fost de Campsentelles. Fútbol, patinaje, danza, inglés y refuerzo." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en Sant Fost" },
      { property: "og:description", content: "Más de 20 años de experiencia en actividades extraescolares en Sant Fost de Campsentelles." },
      { property: "og:url", content: "https://diversplas.es/sant-fost" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/sant-fost" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en Sant Fost",
          "url": "https://diversplas.es/sant-fost",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Sant Fost de Campsentelles",
            "sameAs": "https://www.wikidata.org/wiki/Q15454"
          },
          "sameAs": [
            "https://www.google.com/maps?cid=17471814521949579952",
            "https://www.instagram.com/diversplas_extraescolares"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "19"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://diversplas.es/" },
            { "@type": "ListItem", "position": 2, "name": "Sant Fost de Campsentelles", "item": "https://diversplas.es/sant-fost" }
          ]
        })
      }
    ]
  })
});

function SantFostPage() {
  return <LandingPage city="Sant Fost de Campsentelles" cityShort="Sant Fost" locationContext="Sant Fost de Campsentelles y alrededores" />;
}
