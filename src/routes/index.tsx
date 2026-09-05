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
          "email": "diversplascontacto@gmail.com",
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
          "email": "diversplascontacto@gmail.com",
          "description": "Empresa especializada en actividades extraescolares para colegios, AFAs y centros cívicos en Barcelona y área metropolitana. Fútbol, karate, hip hop, inglés, zumba, manualidades, dibujo y refuerzo escolar.",
          "foundingDate": "2005",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Santa Coloma de Gramenet", "sameAs": "https://www.wikidata.org/wiki/Q15474" },
            { "@type": "AdministrativeArea", "name": "Barcelona", "sameAs": "https://www.wikidata.org/wiki/Q1492" },
            { "@type": "AdministrativeArea", "name": "Badalona", "sameAs": "https://www.wikidata.org/wiki/Q15470" },
            { "@type": "AdministrativeArea", "name": "Mollet del Vallès", "sameAs": "https://www.wikidata.org/wiki/Q15494" },
            { "@type": "AdministrativeArea", "name": "Sant Fost de Campsentelles", "sameAs": "https://www.wikidata.org/wiki/Q15454" },
            { "@type": "AdministrativeArea", "name": "Martorelles", "sameAs": "https://www.wikidata.org/wiki/Q15442" }
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
            {
              "@type": "Question",
              "name": "¿Sois una empresa de actividades extraescolares para colegios y AFAs en Barcelona?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Diversplas es una empresa especializada con más de 20 años de experiencia en la gestión integral de actividades extraescolares y casales para colegios, AFAs y centros educativos de Barcelona, Santa Coloma de Gramenet, Badalona, Mollet del Vallès, Sant Fost y Martorelles."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué extraescolares tenéis para niños de infantil (3 a 5 años) y primaria (6 a 12 años)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Adaptamos las programaciones por etapas: psicomotricidad, iniciación al deporte, expresión artística y juegos en inglés para educación infantil (3 a 5 años); y fútbol, patinaje, baloncesto, zumba, hip hop, karate, refuerzo escolar e inglés comunicativo para primaria (6 a 12 años)."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué extraescolares deportivas ofrecéis en los centros escolares?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ofrecemos entrenamientos de fútbol escolar, patinaje sobre ruedas, karate, multideporte y baloncesto, siempre enfocados en el compañerismo, la psicomotricidad y los hábitos saludables."
              }
            },
            {
              "@type": "Question",
              "name": "¿Contáis con extraescolares de inglés y refuerzo escolar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Impartimos clases extraescolares de inglés dinámicas y comunicativas, además de talleres de refuerzo escolar y técnicas de estudio para ayudar a los alumnos con los deberes diarios."
              }
            },
            {
              "@type": "Question",
              "name": "¿Oferteu activitats extraescolars per a escoles públiques i concertades de Catalunya?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, col·laborem estretament amb AFAs i equips directius d'escoles públiques, concertades i privades, adaptant el projecte educatiu i els monitors a les necessitats de cada centre."
              }
            },
            {
              "@type": "Question",
              "name": "¿En qué horarios se imparten las clases extraescolares?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "De lunes a viernes en horario de tardes, a partir de las 16:30 h, al finalizar la jornada escolar lectiva."
              }
            },
            {
              "@type": "Question",
              "name": "¿Hacéis gestión de mediodía o comedores escolares?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. En Diversplas nos enfocamos al 100% de forma especializada en actividades extraescolares de tarde y casales vacacionales (verano, Navidad y Semana Santa). No gestionamos comedores escolares ni tiempos de mediodía."
              }
            }
          ]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Monitor/a de Patinaje (Extraescolares)",
          "description": "Impartición de clases de patinaje sobre ruedas para alumnos de educación infantil y primaria en colegios de Santa Coloma de Gramenet. Horario de tardes a partir de las 16:30 h de lunes a viernes.",
          "identifier": { "@type": "PropertyValue", "name": "Diversplas", "value": "PATINAJE-SCG-2026" },
          "datePosted": "2026-09-02",
          "validThrough": "2026-12-31",
          "employmentType": "PART_TIME",
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "EUR",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 10,
              "maxValue": 12,
              "unitText": "HOUR"
            }
          },
          "hiringOrganization": { "@type": "Organization", "name": "Diversplas Extraescolares", "sameAs": "https://diversplas.es" },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Diversos centros educativos y colegios",
              "addressLocality": "Santa Coloma de Gramenet",
              "postalCode": "08921",
              "addressRegion": "Barcelona",
              "addressCountry": "ES"
            }
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Monitor/a de Zumba / Danza (Extraescolares)",
          "description": "Dinamización de clases de Zumba Kids, baile moderno y expresión corporal para grupos infantiles en colegios de Santa Coloma de Gramenet. Horario de tardes a partir de las 16:30 h de lunes a viernes.",
          "identifier": { "@type": "PropertyValue", "name": "Diversplas", "value": "ZUMBA-SCG-2026" },
          "datePosted": "2026-09-02",
          "validThrough": "2026-12-31",
          "employmentType": "PART_TIME",
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "EUR",
            "value": {
              "@type": "QuantitativeValue",
              "minValue": 10,
              "maxValue": 12,
              "unitText": "HOUR"
            }
          },
          "hiringOrganization": { "@type": "Organization", "name": "Diversplas Extraescolares", "sameAs": "https://diversplas.es" },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Diversos centros educativos y colegios",
              "addressLocality": "Santa Coloma de Gramenet",
              "postalCode": "08921",
              "addressRegion": "Barcelona",
              "addressCountry": "ES"
            }
          }
        })
      }
    ]
  }),
  component: LandingPage,
}) as any);
