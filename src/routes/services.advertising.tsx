import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Check,
  ChevronRight,
  ExternalLink,
  Facebook,
  Linkedin,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Store,
  Target,
  Tv,
  Youtube,
} from "lucide-react";

import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { ContactCards } from "@/components/site/contact-info";
import { Footer } from "@/components/site/footer";
import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUOTES_LINK, WHATSAPP_CHAT_LINK } from "@/lib/site-links";

const reasons = [
  "Performance-first, KPI-driven campaigns",
  "Creative + media buying under one roof",
  "Weekly optimisation and transparent reporting",
];

const deliverables = [
  {
    icon: Facebook,
    title: "Facebook & Instagram Ads (Meta)",
    copy: "Lead-gen and sales campaigns on Facebook and Instagram with creatives, targeting and funnels handled end-to-end.",
    points: [
      "Campaign strategy and funnel design",
      "Ad creatives and copywriting",
      "Audience research and retargeting",
      "Weekly optimisation and reporting",
    ],
  },
  {
    icon: Target,
    title: "Google Ads (Search & Display)",
    copy: "High-intent Search, Display, Shopping and Performance Max campaigns that capture customers ready to buy.",
    points: [
      "Keyword research and bidding strategy",
      "Search, Display, PMax and Shopping ads",
      "Landing page recommendations",
      "Conversion tracking and reporting",
    ],
  },
  {
    icon: Youtube,
    title: "YouTube Video Advertising",
    copy: "In-stream, Shorts and discovery ads that put your brand in front of the right audience at the right moment.",
    points: [
      "Video ad creative production",
      "Audience and placement targeting",
      "Brand-lift and view-through tracking",
      "Performance reporting",
    ],
  },
  {
    icon: Phone,
    title: "WhatsApp Business Marketing",
    copy: "Bulk broadcasts, click-to-WhatsApp ads and chatbot funnels via the official WhatsApp Business API.",
    points: [
      "WhatsApp Business API setup",
      "Template creation and approval",
      "Click-to-WhatsApp ad campaigns",
      "Broadcast and chatbot flows",
    ],
  },
  {
    icon: Linkedin,
    title: "LinkedIn & Other Platforms",
    copy: "B2B lead generation on LinkedIn plus campaigns on X, Quora, Reddit and emerging ad networks.",
    points: [
      "Account-based targeting",
      "Lead-gen forms and InMail",
      "Thought-leadership ad creatives",
      "Pipeline-focused reporting",
    ],
  },
  {
    icon: MessageCircle,
    title: "RCS & Voice Broadcasting",
    copy: "Rich-media RCS messaging and IVR voice broadcasts for mass outreach with verified-sender trust.",
    points: [
      "RCS sender verification",
      "Rich card and carousel messaging",
      "Voice broadcast campaigns",
      "Delivery and response analytics",
    ],
  },
  {
    icon: Mail,
    title: "SMS & Email Marketing",
    copy: "DLT-compliant transactional and promotional SMS plus modern email campaigns with deliverability built in.",
    points: [
      "DLT registration and templates",
      "Promotional and transactional SMS",
      "Email design and automation",
      "Open, click and reply tracking",
    ],
  },
  {
    icon: Store,
    title: "Marketplace Ads (Amazon, Flipkart)",
    copy: "Sponsored product, brand and display ads on Amazon and Flipkart to grow rank and revenue.",
    points: [
      "Keyword and ASIN targeting",
      "Sponsored product and brand ads",
      "Listing optimisation",
      "ACoS and revenue reporting",
    ],
  },
  {
    icon: Tv,
    title: "OTT Ads (Hotstar, Amazon, In-App)",
    copy: "Premium video placements across Hotstar, Amazon MX Player and in-app inventory for brand reach.",
    points: [
      "Inventory planning and buying",
      "Audience and geo targeting",
      "Brand-safe placements",
      "Reach and frequency reporting",
    ],
  },
];

const steps = [
  { step: "Step 1", title: "Discover", copy: "We learn your business, audience and goals." },
  { step: "Step 2", title: "Plan", copy: "A tailored strategy with clear KPIs and timelines." },
  {
    step: "Step 3",
    title: "Execute",
    copy: "Our team produces, publishes and manages everything.",
  },
  { step: "Step 4", title: "Report", copy: "Transparent monthly reports and next-month plan." },
];

const faqs = [
  {
    q: "What is the minimum ad spend you recommend?",
    a: "For most local businesses we recommend starting at ₹15,000–₹25,000 per month in ad spend per platform, so campaigns have enough data to optimise. We will suggest the right budget after understanding your goals.",
  },
  {
    q: "Is GST applied on your management fee?",
    a: "Yes. Our management fee is billed with applicable GST. Ad spend is paid directly to the platform or billed at actuals with no hidden markup.",
  },
  {
    q: "How soon will I see leads?",
    a: "Search and Meta lead-gen campaigns usually start delivering enquiries within the first 3–7 days of going live. Sustained cost-per-lead improvements come after 3–4 weeks of optimisation.",
  },
  {
    q: "Do you create the ad creatives too?",
    a: "Yes. Static creatives, reels and video ads are produced in-house by our creative team, so media buying and creative stay aligned.",
  },
];

const title = "Paid Advertising — Meta, Google, YouTube & OTT Ads | Smart Marketing System";
const description =
  "Paid Advertising from Smart Marketing System: Meta and Google Ads, YouTube, WhatsApp, LinkedIn, RCS, SMS, email, marketplace and OTT campaigns that generate leads and drive sales.";

export const Route = createFileRoute("/services/advertising")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services/advertising" }],
  }),
  component: PaidAdvertising,
});

function PaidAdvertising() {
  return (
    <>
      <AuroraBackdrop />
      <Navbar />
      <main className="pt-28 md:pt-32">
        <section className="section-shell">
          <nav aria-label="Breadcrumb">
            <ol className="flex min-w-0 flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3 shrink-0" aria-hidden />
              <li>
                <a href="/#services" className="transition-colors hover:text-foreground">
                  Services
                </a>
              </li>
              <ChevronRight className="size-3 shrink-0" aria-hidden />
              <li aria-current="page" className="text-primary">
                Paid Advertising
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary">
              <Megaphone className="size-6" />
            </span>
            <div className="min-w-0">
              <h1 className="text-balance text-[2.1rem] uppercase leading-[1.02] sm:text-5xl lg:text-[3.6rem]">
                <span className="text-gradient">Paid Advertising</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Targeted ad campaigns that generate leads and drive sales.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href={WHATSAPP_CHAT_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Get a Quote on WhatsApp
                  </a>
                </Button>
                <Button variant="glass" size="xl" asChild className="w-full sm:w-auto">
                  <a href={QUOTES_LINK} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Get Instant Quote Online
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-shell">
            <div className="rule-top grid gap-8 pt-8 lg:grid-cols-2 lg:gap-14">
              <div className="min-w-0">
                <h2 className="text-balance text-2xl uppercase leading-tight sm:text-3xl md:text-4xl">
                  Why teams <span className="text-gradient">choose us</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Performance-led campaign management across Meta, Google, YouTube, WhatsApp,
                  LinkedIn and OTT — built around clear KPIs like cost-per-lead, ROAS and revenue.
                </p>
              </div>
              <Stagger className="flex min-w-0 flex-col gap-3">
                {reasons.map((r) => (
                  <Item key={r}>
                    <div className="lift flex min-w-0 items-start gap-3 glass-panel p-4">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-brand" />
                      <span className="min-w-0 text-sm font-semibold text-foreground/90">{r}</span>
                    </div>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <SectionHeading
              index="01"
              eyebrow="Paid Advertising"
              title="What we"
              highlight="deliver"
              description="Every service is delivered by specialists, with clear scope and WhatsApp-based onboarding."
            />

            <Stagger className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {deliverables.map((d, i) => (
                <Item key={d.title} className="min-w-0">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="gradient-ring lift sheen group relative flex h-full min-w-0 flex-col glass-panel p-6"
                  >
                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <span className="index-num">{`0${i + 1}`}</span>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                        <d.icon className="size-5" />
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg uppercase leading-tight sm:text-xl">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.copy}</p>

                    <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border/60 pt-5">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="flex min-w-0 items-start gap-2.5 text-sm text-foreground/85"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="min-w-0">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="glass" size="xl" asChild className="mt-7 w-full">
                      <a href={WHATSAPP_CHAT_LINK} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-4" />
                        Get a Quote on WhatsApp
                      </a>
                    </Button>
                  </motion.article>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <SectionHeading
              index="02"
              eyebrow="Process"
              title="How we"
              highlight="work"
              description="A simple, repeatable process that keeps quality high and timelines predictable."
            />

            <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
              {steps.map((s) => (
                <Item key={s.title} className="min-w-0">
                  <div className="lift flex h-full min-w-0 flex-col glass-panel p-6">
                    <span className="kicker text-[0.58rem]">{s.step}</span>
                    <h3 className="mt-3 text-lg uppercase leading-tight sm:text-xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <SectionHeading
              index="03"
              eyebrow="FAQ"
              title="Frequently asked"
              highlight="questions"
              description="Quick answers about budgets, billing and results for paid campaigns."
            />
            <Accordion type="single" collapsible className="mt-12 flex flex-col gap-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="glass-panel border-none px-5"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <div className="flex flex-col items-center gap-5 rounded-sm border border-border/70 bg-card/60 p-8 text-center backdrop-blur md:p-12">
              <h2 className="text-balance text-2xl uppercase leading-tight sm:text-3xl md:text-4xl">
                Ready to grow with <span className="text-gradient">Paid Advertising?</span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Talk to a specialist for a tailored plan, or request a free quote — no commitment.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href={WHATSAPP_CHAT_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Talk to a Specialist
                  </a>
                </Button>
                <Button variant="glass" size="xl" asChild className="w-full sm:w-auto">
                  <a href={QUOTES_LINK} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Get a Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <SectionHeading
              index="04"
              eyebrow="Contact"
              title="Get in"
              highlight="Touch"
              description="Call, email or visit us — our team responds within one business day."
            />
            <ContactCards className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
