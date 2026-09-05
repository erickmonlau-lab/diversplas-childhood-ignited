import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/martorelles')({
  component: MartorellesPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares en Martorelles" },
      { name: "description", content: "Empresa de actividades extraescolares y casales para colegios y AFAs en Martorelles. Fútbol, patinaje, danza, inglés y refuerzo escolar." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en Martorelles" },
      { property: "og:description", content: "Más de 20 años de experiencia en actividades extraescolares en Martorelles." },
      { property: "og:url", content: "https://diversplas.es/martorelles" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/martorelles" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en Martorelles",
          "url": "https://diversplas.es/martorelles",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Martorelles",
            "sameAs": "https://www.wikidata.org/wiki/Q15442"
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
            { "@type": "ListItem", "position": 2, "name": "Martorelles", "item": "https://diversplas.es/martorelles" }
          ]
        })
      }
    ]
  })
});

function MartorellesPage() {
  return <LandingPage city="Martorelles" cityShort="Martorelles" locationContext="Martorelles y alrededores" />;
}
