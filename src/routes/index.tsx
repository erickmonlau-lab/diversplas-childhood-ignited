import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "../components/LandingPage";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Diversplas — Gestión de Extraescolares y Casales para Colegios y AFAs" },
      { name: "description", content: "Empresa de gestión integral de actividades extraescolares y casales para colegios y AFAs en Santa Coloma de Gramenet y El Fondo. Monitores titulados, seguros y coordinación." },
      { property: "og:title", content: "Diversplas — Gestión de Extraescolares y Casales para Colegios y AFAs" },
      { property: "og:description", content: "Soluciones integrales de extraescolares y casales para centros educativos y AFAs en Santa Coloma de Gramenet y El Fondo con más de 20 años de experiencia." },
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
          "description": "Empresa especializada en la gestión integral de actividades extraescolares y casales vacacionales para colegios, AFAs y centros escolares. Más de 20 años de experiencia.",
          "url": "https://www.diversplas.es",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "image": "https://www.diversplas.es/og-diversplas-v3.jpg",
          "logo": "https://www.diversplas.es/diversplas-logo.jpeg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Diversos centros educativos y colegios",
            "postalCode": "08921",
            "addressLocality": "Santa Coloma de Gramenet",
            "addressRegion": "Barcelona",
            "addressCountry": "ES"
          },
          "areaServed": [
            { "@type": "City", "name": "Santa Coloma de Gramenet" },
            { "@type": "Neighborhood", "name": "El Fondo, Santa Coloma de Gramenet" },
            { "@type": "City", "name": "Badalona" },
            { "@type": "City", "name": "Barcelona" },
            { "@type": "City", "name": "Mollet del Vallès" },
            { "@type": "City", "name": "Martorelles" },
            { "@type": "City", "name": "Sant Fost de Campsentelles" }
          ],
          "sameAs": [
            "https://www.diversplas.es",
            "https://www.instagram.com/diversplas_extraescolares",
            "https://www.google.com/maps?cid=17471814521949579952"
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
          "@type": "EducationalOrganization",
          "name": "Diversplas Actividades Extraescolares",
          "url": "https://diversplas.es/",
          "telephone": "+34657117426",
          "email": "diversplascontacto@gmail.com",
          "description": "Proveedor integral de programas extraescolares y casales escolares para colegios públicos, concertados y AFAs. Especialistas en Santa Coloma de Gramenet y El Fondo con área de expansión.",
          "foundingDate": "2005",
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Santa Coloma de Gramenet", "sameAs": "https://www.wikidata.org/wiki/Q15474" },
            { "@type": "Neighborhood", "name": "El Fondo, Santa Coloma de Gramenet", "sameAs": "https://www.wikidata.org/wiki/Q15474" },
            { "@type": "AdministrativeArea", "name": "Badalona", "sameAs": "https://www.wikidata.org/wiki/Q15470" },
            { "@type": "AdministrativeArea", "name": "Barcelona", "sameAs": "https://www.wikidata.org/wiki/Q1492" },
            { "@type": "AdministrativeArea", "name": "Mollet del Vallès", "sameAs": "https://www.wikidata.org/wiki/Q15494" },
            { "@type": "AdministrativeArea", "name": "Sant Fost de Campsentelles", "sameAs": "https://www.wikidata.org/wiki/Q15454" },
            { "@type": "AdministrativeArea", "name": "Martorelles", "sameAs": "https://www.wikidata.org/wiki/Q15442" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Catálogo de Extraescolares y Casales para Colegios",
            "itemListElement": [
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Gestión de Fútbol extraescolar en colegios"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Patinaje sobre ruedas escolar"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Karate y artes marciales para centros educativos"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Hip Hop y Danza infantil en colegios"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Zumba Kids escolar"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Inglés extraescolar comunicativo"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Multideporte y Psicomotricidad"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Talleres de Manualidades y Expresión Artística"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Refuerzo escolar y técnicas de estudio"}},
              {"@type":"Offer","itemOffered":{"@type":"Course","name":"Casales escolares vacacionales (Verano, Navidad, Semana Santa)"}}
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
              "name": "¿Qué responsabilidades y trámites asume Diversplas en nuestro colegio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Asumimos la gestión integral y llave en mano: selección, contratación y nóminas de monitores titulados, cobertura con póliza de Responsabilidad Civil patronal y de actividades, material técnico homologado, programación pedagógica adaptada al centro y resolución ágil de cualquier incidencia."
              }
            },
            {
              "@type": "Question",
              "name": "¿En qué zonas operáis actualmente?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nuestra sede principal y núcleo operativo se encuentra en Santa Coloma de Gramenet y el barrio del Fondo. Además, contamos con capacidad de desplazamiento e implantación de proyectos en colegios de Badalona, Barcelona, Mollet del Vallès, Sant Fost y Martorelles."
              }
            },
            {
              "@type": "Question",
              "name": "¿Los monitores cuentan con la titulación y certificados legales requeridos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, el 100% de nuestro equipo de monitores y coordinadores dispone de la titulación oficial exigida por la normativa catalana (Monitor/a de Lleure, técnicos deportivos o grados en educación) y el Certificado Negativo del Registro Central de Delincuentes Sexuales debidamente actualizado."
              }
            },
            {
              "@type": "Question",
              "name": "¿Podemos personalizar las actividades y adaptarlas al Ideario de nuestro centro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Por supuesto. No imponemos programas cerrados; nos reunimos previamente con la dirección del centro escolar y la junta del AFA para alinear los horarios, valores, metodologías y oferta de actividades con el Proyecto Educativo de Centro (PEC)."
              }
            },
            {
              "@type": "Question",
              "name": "¿Organizáis casales en las instalaciones del colegio durante los periodos de vacaciones?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Diseñamos y ejecutamos casales escolares y campus vacacionales de Verano, Navidad y Semana Santa dentro de vuestro propio recinto educativo, facilitando la conciliación laboral y familiar del centro con proyectos lúdico-educativos temáticos."
              }
            },
            {
              "@type": "Question",
              "name": "¿Hacéis gestión de mediodía o comedores escolares?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. En Diversplas nos enfocamos de forma 100% especializada en actividades extraescolares de tarde y casales vacacionales. No gestionamos comedores escolares ni tiempos de mediodía, lo que nos permite volcar toda nuestra energía y excelencia pedagógica en las tardes."
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
