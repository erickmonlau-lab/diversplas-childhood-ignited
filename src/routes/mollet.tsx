import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/mollet')({
  component: MolletPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares en Mollet del Vallès" },
      { name: "description", content: "Empresa de actividades extraescolares y casales para colegios y AFAs en Mollet del Vallès. Fútbol, patinaje, danza, inglés y refuerzo escolar." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en Mollet del Vallès" },
      { property: "og:description", content: "Más de 20 años de experiencia en actividades extraescolares en Mollet del Vallès y comarca." },
      { property: "og:url", content: "https://diversplas.es/mollet" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/mollet" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en Mollet del Vallès",
          "url": "https://diversplas.es/mollet",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Mollet del Vallès",
            "sameAs": "https://www.wikidata.org/wiki/Q15494"
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
            { "@type": "ListItem", "position": 2, "name": "Mollet del Vallès", "item": "https://diversplas.es/mollet" }
          ]
        })
      }
    ]
  })
});

function MolletPage() {
  return <LandingPage city="Mollet del Vallès" cityShort="Mollet" locationContext="Mollet del Vallès y comarca" />;
}
