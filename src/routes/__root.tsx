import { Outlet, createRootRoute, HeadContent } from "@tanstack/react-router";

import logoUrl from "../assets/logo.png";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingReveal } from "@/components/LoadingReveal";
import { Toaster } from "@/components/ui/sonner";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Chanmi Peiris - AI & ML Engineer" },
      {
        name: "description",
        content: "AI & ML Engineer crafting scalable digital experiences.",
      },
      { name: "author", content: "Chanmi Peiris - AI & ML Engineer" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "Chanmi Peiris - AI & ML Engineer" },
      {
        property: "og:description",
        content: "AI & ML Engineer crafting scalable digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "icon", href: logoUrl }],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <LoadingReveal />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
