import { createFileRoute } from '@tanstack/react-router';
import { LandingPage } from '../components/LandingPage';

export const Route = createFileRoute('/badalona')({
  component: BadalonaPage,
  head: () => ({
    meta: [
      { title: "Diversplas — Actividades Extraescolares y Casales en Badalona" },
      { name: "description", content: "Empresa de actividades extraescolares y casales para colegios, AFAs y centros educativos en Badalona. Fútbol, patinaje, zumba, inglés y refuerzo escolar con más de 20 años de experiencia." },
      { property: "og:title", content: "Diversplas — Actividades Extraescolares en Badalona" },
      { property: "og:description", content: "Programas extraescolares y casales para colegios y AFAs de Badalona. Más de dos décadas creando experiencias educativas." },
      { property: "og:url", content: "https://diversplas.es/badalona" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/badalona" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas — Actividades Extraescolares en Badalona",
          "url": "https://diversplas.es/badalona",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "foundingDate": "2005",
          "description": "Empresa especializada en actividades extraescolares y casales para colegios y AFAs de Badalona. Fútbol escolar, danza, karate, inglés y talleres creativos.",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Badalona",
            "sameAs": "https://www.wikidata.org/wiki/Q15470"
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
            "name": "Actividades Extraescolares Badalona",
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
            { "@type": "ListItem", "position": 2, "name": "Badalona", "item": "https://diversplas.es/badalona" }
          ]
        })
      }
    ]
  })
});

function BadalonaPage() {
  return <LandingPage city="Badalona" cityShort="Badalona" locationContext="Badalona y comarca del Barcelonès Nord" />;
}
