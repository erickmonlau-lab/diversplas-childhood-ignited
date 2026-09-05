import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/santa-coloma')({
  component: SantaColomaPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares en Santa Coloma de Gramenet" },
      { name: "description", content: "Empresa de actividades extraescolares y casales para colegios, AFAs y familias en Santa Coloma de Gramenet. Fútbol, patinaje, danza, inglés y refuerzo con más de 20 años de experiencia." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en Santa Coloma de Gramenet" },
      { property: "og:description", content: "Más de 20 años dinamizando colegios y AFAs en Santa Coloma de Gramenet." },
      { property: "og:url", content: "https://diversplas.es/santa-coloma" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/santa-coloma" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en Santa Coloma de Gramenet",
          "url": "https://diversplas.es/santa-coloma",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "description": "Empresa especializada en actividades extraescolares y casales para colegios y AFAs de Santa Coloma de Gramenet. Fútbol escolar, patinaje, danza, inglés y refuerzo escolar.",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Santa Coloma de Gramenet",
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
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Actividades Extraescolares Santa Coloma",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Fútbol extraescolar escolar" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Patinaje sobre ruedas" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Zumba Kids y Danza moderna" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Inglés comunicativo para niños" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Refuerzo escolar y técnicas de estudio" } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Casales de verano, Navidad y Semana Santa" } }
            ]
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
            { "@type": "ListItem", "position": 2, "name": "Santa Coloma de Gramenet", "item": "https://diversplas.es/santa-coloma" }
          ]
        })
      }
    ]
  })
});

function SantaColomaPage() {
  return <LandingPage city="Santa Coloma de Gramenet" cityShort="Santa Coloma" locationContext="Santa Coloma de Gramenet y alrededores" />;
}
