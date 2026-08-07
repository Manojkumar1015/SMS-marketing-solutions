import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { Consultation } from "@/components/site/consultation";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Pricing } from "@/components/site/pricing";
import { Services } from "@/components/site/services";
import { WhyChoose } from "@/components/site/why-choose";

const title = "Smart Marketing System — AI-Powered Digital Marketing Agency";
const description =
  "Smart Marketing System (SMSin360) helps small and medium businesses grow with AI-powered digital marketing, lead generation, website & app designing and automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Smart Marketing System",
          alternateName: "SMSin360",
          slogan: "Your Success Our Motto",
          description,
          foundingDate: "2015",
          telephone: ["+91 96779 67950", "+91 90033 21907"],
          email: "smsin360@gmail.com",
          areaServed: "IN",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 25/1, Balakrishnan Nagar",
            addressLocality: "Mannargudi, Tiruvarur",
            addressRegion: "Tamil Nadu",
            postalCode: "614001",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <AuroraBackdrop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Pricing />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
