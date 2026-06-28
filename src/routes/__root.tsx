import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import "../styles/fonts.css";
import "../styles/animations.css";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Barcelona" },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "actividades extraescolares barcelona, extraescolares santa coloma gramenet, extraescolares badalona, actividades niños barcelona, futbol extraescolar barcelona, karate niños barcelona, hip hop niños extraescolar, casales verano barcelona, AFA actividades colegios barcelona" },
      { name: "description", content: "Diversplas es una entidad independiente con más de 20 años de experiencia. Actividades extraescolares en Santa Coloma de Gramenet, el Fondo y Barcelona." },
      { name: "author", content: "Diversplas" },
      { property: "og:title", content: "Diversplas — Un mundo lleno de actividades" },
      { property: "og:description", content: "Diversplas: Experiencias extraescolares premium e independientes para colegios, AFAs y familias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Diversplas" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1D2F8C" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:site_name", content: "Diversplas" },
      { property: "og:title", content: "Diversplas — Actividades extraescolares en Barcelona" },
      { property: "og:description", content: "Más de 20 años creando experiencias extraescolares en Barcelona. Para colegios, AFAs y familias." },
      { property: "og:url", content: "https://diversplas.es/" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diversplas — Actividades extraescolares en Barcelona" },
      { name: "twitter:description", content: "Más de 20 años creando experiencias extraescolares en Barcelona." },
      { name: "twitter:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://diversplas.es/" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "https://diversplas.es/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "https://diversplas.es/favicon-192.png" },
      { rel: "apple-touch-icon", href: "https://diversplas.es/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        {/* Preload hero images */}
        <link rel="preload" as="image" href="/image_53ee82.webp" fetchPriority="high"/>
        <link rel="preload" as="image" href="/image_53d820.webp" fetchPriority="high"/>
        {/* Preload critical local fonts */}
        <link rel="preload" as="font" type="font/woff2" href="/fonts/barlow-condensed-900.woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/barlow-condensed-900-italic.woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
