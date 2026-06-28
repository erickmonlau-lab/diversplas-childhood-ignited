import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/LandingPage";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Diversplas - Extraescolares en Barcelona, Santa Coloma y Badalona" },
      { name: "description", content: "Más de 20 años creando experiencias extraescolares. Cobertura en Barcelona, Santa Coloma, Badalona, Mollet, Martorelles y Sant Fost. Especialistas para colegios y AFAs." },
      { property: "og:title", content: "Diversplas - Extraescolares en Barcelona, Santa Coloma y Badalona" },
      { property: "og:description", content: "Más de 20 años de actividades extraescolares para colegios y AFAs en Barcelona, Santa Coloma, Badalona, Mollet, Martorelles y Sant Fost." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Diversplas",
          "legalName": "Diversplas",
          "alternateName": ["Diversplas Extraescolares", "Divers Plas"],
          "disambiguatingDescription": "Diversplas (diversplas.es) es una empresa completamente independiente y sin relación alguna con Diversesplai (diversesplai.cat), Diver's Associació d'Esplai ni ninguna entidad similar. Son empresas distintas con distinto CIF, distinta web y distinto correo electrónico.",
          "description": "Especialistas en actividades extraescolares y casales vacacionales. Más de 20 años de experiencia.",
          "url": "https://www.diversplas.es",
          "telephone": "+34657117426",
          "email": "diversplasextraescolares@gmail.com",
          "image": "https://www.diversplas.es/og-diversplas-v3.jpg",
          "logo": "https://www.diversplas.es/diversplas-logo.jpeg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santa Coloma de Gramenet",
            "addressRegion": "Barcelona",
            "addressCountry": "ES"
          },
          "areaServed": [
            { "@type": "City", "name": "Barcelona" },
            { "@type": "City", "name": "Santa Coloma de Gramenet" },
            { "@type": "City", "name": "Badalona" },
            { "@type": "City", "name": "Mollet del Vallès" },
            { "@type": "City", "name": "Martorelles" },
            { "@type": "City", "name": "Sant Fost de Campsentelles" },
            { "@type": "Neighborhood", "name": "El Fondo, Santa Coloma de Gramenet" }
          ],
          "sameAs": [
            "https://www.diversplas.es",
            "https://www.instagram.com/diversplas_extraescolares",
            "https://www.google.com/maps?cid=17471814521949579952"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "16"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Diversplas Actividades Extraescolares",
          "url": "https://diversplas.es/",
          "telephone": "+34657117426",
          "email": "diversplasextraescolares@gmail.com",
          "description": "Empresa especializada en actividades extraescolares para colegios, AFAs y centros cívicos en Barcelona y área metropolitana. Fútbol, karate, hip hop, inglés, zumba, manualidades, dibujo y refuerzo escolar.",
          "foundingDate": "2005",
          "areaServed": [
            "Barcelona", "Santa Coloma de Gramenet", "Badalona",
            "Mollet del Vallès", "Martorelles", "Sant Fost de Campsentelles"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Actividades Extraescolares",
            "itemListElement": [
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Fútbol extraescolar"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Karate para niños"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Hip Hop infantil"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Zumba Kids"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Inglés extraescolar"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Multideporte"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Manualidades"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Refuerzo escolar"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Casales vacacionales"}}
            ]
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Desde qué edad pueden apuntarse los niños?", "acceptedAnswer": { "@type": "Answer", "text": "A partir de 3-4 años según la actividad y el colegio." } },
            { "@type": "Question", "name": "¿Cómo me inscribo?", "acceptedAnswer": { "@type": "Answer", "text": "A través del AFA del colegio donde se imparte la actividad." } },
            { "@type": "Question", "name": "¿Con quién trabajáis?", "acceptedAnswer": { "@type": "Answer", "text": "Con AFAs, ludotecas, centros cívicos y casales de Barcelona y alrededores." } },
            { "@type": "Question", "name": "¿Qué actividades extraescolares ofrecéis?", "acceptedAnswer": { "@type": "Answer", "text": "Fútbol, Multideporte, Karate, Hip Hop, Zumba, Manualidades, Inglés, Dibujo y Refuerzo escolar (deberes)." } },
            { "@type": "Question", "name": "¿En qué zonas operáis?", "acceptedAnswer": { "@type": "Answer", "text": "Santa Coloma de Gramenet, el Fondo, Badalona, Mollet del Vallès, Sant Fost de Campsentelles, Martorelles y Barcelona." } },
            { "@type": "Question", "name": "¿Cuánto cuesta?", "acceptedAnswer": { "@type": "Answer", "text": "El precio varía según la actividad y el colegio. Consulta directamente con el AFA de tu colegio." } },
            { "@type": "Question", "name": "¿En qué horario son las actividades?", "acceptedAnswer": { "@type": "Answer", "text": "De lunes a viernes a partir de las 16:30, al finalizar el horario escolar." } },
            { "@type": "Question", "name": "¿Hacéis gestión de mediodía o comedores escolares?", "acceptedAnswer": { "@type": "Answer", "text": "No. Diversplas se especializa de forma exclusiva en actividades extraescolares (fútbol, multideporte, karate, hip hop, zumba, manualidades, inglés, dibujo y refuerzo escolar) y en la organización de casales en periodos vacacionales. No realizamos gestión de mediodía ni de comedores escolares. Somos una entidad independiente y no estamos vinculados a otras asociaciones o empresas." } },
            { "@type": "Question", "name": "¿Diversplas tiene alguna relación con Diver's Associació d'Esplai o Diver Planet?", "acceptedAnswer": { "@type": "Answer", "text": "No. Diversplas (diversplas.es) es una empresa completamente independiente y sin ninguna vinculación con Diver's Associació d'Esplai (diversesplai.cat), Diver Planet, ni ninguna otra entidad de nombre similar. Somos entidades distintas, con diferente titularidad, gestión y contacto." } }
          ]
        })
      }
    ]
  }),
  component: LandingPage,
}) as any);
