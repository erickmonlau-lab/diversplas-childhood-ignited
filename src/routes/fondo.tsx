import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/fondo')({
  component: FondoPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares en El Fondo (Santa Coloma)" },
      { name: "description", content: "Empresa de actividades extraescolares y casales en el barrio del Fondo (Santa Coloma de Gramenet). Fútbol, patinaje, danza, inglés y refuerzo escolar para colegios y AFAs." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en El Fondo" },
      { property: "og:description", content: "Actividades extraescolares para colegios y AFAs del barrio del Fondo en Santa Coloma de Gramenet." },
      { property: "og:url", content: "https://diversplas.es/fondo" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/fondo" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en El Fondo",
          "url": "https://diversplas.es/fondo",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "areaServed": {
            "@type": "Neighborhood",
            "name": "El Fondo, Santa Coloma de Gramenet",
            "sameAs": "https://www.wikidata.org/wiki/Q15474"
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
            { "@type": "ListItem", "position": 2, "name": "El Fondo", "item": "https://diversplas.es/fondo" }
          ]
        })
      }
    ]
  })
});

function FondoPage() {
  return <LandingPage city="El Fondo" cityShort="Fondo" locationContext="El Fondo, Santa Coloma de Gramenet" />;
}
