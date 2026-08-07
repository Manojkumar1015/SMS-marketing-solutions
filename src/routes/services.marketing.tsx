import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { Footer } from "@/components/site/footer";
import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Navbar } from "@/components/site/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { ContactCards } from "@/components/site/contact-info";
import { QUOTES_LINK, WHATSAPP_CHAT_LINK } from "@/lib/site-links";

const reasons = [
  "Dedicated account manager and content team",
  "Transparent monthly performance reports",
  "AI-assisted workflows for faster execution",
];

const deliverables = [
  {
    icon: Share2,
    title: "Social Media Account Management",
    copy: "Daily posting, community management and growth strategy across Instagram, Facebook, LinkedIn and YouTube.",
    points: [
      "Monthly content calendar",
      "Post scheduling and publishing",
      "Comments, DMs and community replies",
      "Monthly growth and engagement report",
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    copy: "On-page, off-page and technical SEO that ranks your business for the searches your customers actually make.",
    points: [
      "Keyword research and content plan",
      "On-page optimisation and schema",
      "Quality backlink building",
      "Monthly ranking and traffic reports",
    ],
  },
  {
    icon: Target,
    title: "AEO, GEO & SXO",
    copy: "Optimise for AI answer engines, geographic intent and search-experience signals — the next frontier beyond classic SEO.",
    points: [
      "Answer Engine Optimisation (AEO)",
      "Generative Engine Optimisation (GEO)",
      "Search Experience Optimisation (SXO)",
      "Structured data and entity SEO",
    ],
  },
  {
    icon: Sparkles,
    title: "Large Language Model Optimisation (LLMO)",
    copy: "Make your brand discoverable inside ChatGPT, Gemini, Perplexity and Google AI Overviews.",
    points: [
      "LLM citation audit",
      "Content restructuring for AI retrieval",
      "Knowledge graph and entity building",
      "Monthly AI-visibility tracking",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store Management",
    copy: "Catalogue, listings, promotions and operations for Shopify, WooCommerce, Amazon and Flipkart stores.",
    points: [
      "Product listing optimisation",
      "Inventory and order management",
      "Promotions and coupon setup",
      "Conversion-rate optimisation",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing Coordination",
    copy: "Find the right creators, negotiate deliverables and run campaigns that produce measurable results.",
    points: [
      "Creator shortlisting and outreach",
      "Brief, contract and rate negotiation",
      "Content approval and posting",
      "Performance reporting per creator",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Online Reputation Management",
    copy: "Protect and grow your brand reputation across Google, social media and review platforms.",
    points: [
      "Review monitoring and response",
      "Negative content suppression",
      "Positive review generation campaigns",
      "Reputation dashboard",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Workflow Automation",
    copy: "WhatsApp, website and Instagram chatbots plus marketing automation that converts leads while you sleep.",
    points: [
      "WhatsApp Business API chatbots",
      "Website live-chat with AI",
      "CRM and email automation flows",
      "Lead routing and follow-up",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics & Reporting",
    copy: "Clear dashboards and monthly reviews that show exactly what your marketing spend is producing.",
    points: [
      "GA4, Search Console and pixel setup",
      "Custom KPI dashboards",
      "Monthly performance review call",
      "Actionable next-month plan",
    ],
  },
];

const faqs = [
  {
    q: "How soon will I see SEO results?",
    a: "Technical fixes reflect within a few weeks, while rankings and organic traffic compound over 3–6 months. You get monthly reports so progress is always visible.",
  },
  {
    q: "What are AEO, GEO and LLMO?",
    a: "They are newer search disciplines that help your business appear inside AI answers, map packs and large language model results — not just in traditional Google listings.",
  },
  {
    q: "Do you handle content and posting too?",
    a: "Yes. Content planning, writing, creatives, scheduling and community replies are all managed by your dedicated account team.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No lock-in. Management plans run monthly, quarterly or yearly, and you can upgrade or pause with 30 days' notice.",
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

const title = "Marketing Management — SEO, Social, LLMO & Automation | Smart Marketing System";
const description =
  "Marketing Management from Smart Marketing System: social media management, SEO, AEO/GEO/SXO, LLMO, e-commerce, influencer marketing, reputation, AI chatbots and analytics.";

export const Route = createFileRoute("/services/marketing")({
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
    links: [{ rel: "canonical", href: "/services/marketing" }],
  }),
  component: MarketingManagement,
});

function MarketingManagement() {
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
                Marketing Management
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary">
              <Settings className="size-6" />
            </span>
            <div className="min-w-0">
              <h1 className="text-balance text-[2.1rem] uppercase leading-[1.02] sm:text-5xl lg:text-[3.6rem]">
                <span className="text-gradient">Marketing Management</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                We run your digital marketing so you can run your business.
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
                  End-to-end ownership of your online presence — social channels, SEO, reputation,
                  automation and analytics — delivered by a dedicated account manager with clear
                  monthly reporting.
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
              eyebrow="Marketing Management"
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

            <div className="mt-12 flex flex-col items-start gap-4 rounded-sm border border-border/70 bg-card/60 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <p className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                Tell us what you need managed — we&apos;ll reply on WhatsApp with scope and pricing.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href={WHATSAPP_CHAT_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Get a Quote on WhatsApp
                  </a>
                </Button>
                <Button variant="glass" size="xl" asChild className="w-full sm:w-auto">
                  <a href={QUOTES_LINK} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Instant Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="section-shell">
            <SectionHeading
              index="03"
              eyebrow="FAQ"
              title="Frequently asked"
              highlight="questions"
              description="Quick answers about timelines, scope and reporting."
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
                Ready to grow with <span className="text-gradient">Marketing Management?</span>
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
