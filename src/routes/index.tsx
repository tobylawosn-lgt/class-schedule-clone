import { createFileRoute } from "@tanstack/react-router";
import { Schedule } from "@/components/site/Schedule";
import { Header, Hero, Trust, Proof, Logistics, FinalCta, Footer, MobileBar } from "@/components/site/Sections";

const title = "Alex Moreno — Strength & Conditioning Coach, Barcelona";
const description = "Book structured strength and conditioning sessions in Barcelona. Studio and outdoor training for busy professionals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Trust />
        <Proof />
        <Logistics />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
