import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Rocket, Search } from "lucide-react";

import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import { QUOTES_LINK, WHATSAPP_CHAT_LINK } from "@/lib/site-links";
import { cn } from "@/lib/utils";

const offers = [
  {
    icon: MessageCircle,
    title: "Free Consultation",
    price: "Free",
    gst: false,
    copy: "A 15-minute call to understand your business and identify marketing opportunities.",
    features: [
      "Understand Your Business Goals",
      "Identify Marketing Gaps",
      "Recommend Digital Tools & Channels",
      "Get Actionable Next Steps",
    ],
    cta: "Book Free Call",
    recommended: false,
  },
  {
    icon: Search,
    title: "Market Research Report",
    price: "₹8,000",
    gst: true,
    copy: "A detailed analysis of your market, competitors, and target audience to inform your marketing decisions.",
    features: [
      "Industry & Competitor Analysis",
      "Target Customer Profiling",
      "Value Proposition Development",
      "Marketing Channel Recommendations",
    ],
    cta: "Order Research",
    recommended: false,
  },
  {
    icon: Rocket,
    title: "Marketing Strategy Plan",
    price: "₹20,000",
    gst: true,
    copy: "A complete marketing blueprint with execution roadmap, budget allocation, and campaign plans.",
    features: [
      "Complete Market Research Included",
      "12-Month Marketing Strategy",
      "Campaign Execution Roadmap",
      "AI & Automation Implementation Plan",
    ],
    cta: "Get Strategy Plan",
    recommended: true,
  },
];

export function Consultation() {
  return (
    <section id="consultation" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="05"
          eyebrow="Consultation"
          title="Marketing"
          highlight="Consultation Services"
          description="Not sure where to start? We offer free consultations, market research, and complete strategy plans."
        />

        <Stagger className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {offers.map((o, i) => (
            <Item key={o.title} className="min-w-0">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className={cn(
                  "gradient-ring lift sheen group relative flex h-full min-w-0 flex-col glass-panel p-6",
                  o.recommended && "card-glow",
                )}
              >
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <span className="index-num">{`0${i + 1}`}</span>
                  {o.recommended ? (
                    <span className="kicker shrink-0 bg-gradient-brand px-2.5 py-1 text-[0.58rem] text-brand-foreground">
                      Most Recommended
                    </span>
                  ) : null}
                </div>

                <span className="mt-5 flex size-12 items-center justify-center rounded-sm border border-border/70 bg-card text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                  <o.icon className="size-5" />
                </span>

                <h3 className="mt-5 text-lg uppercase leading-tight sm:text-xl">{o.title}</h3>
                <p className="mt-3 font-display text-3xl leading-none">
                  <span className="text-gradient">{o.price}</span>
                </p>
                {o.gst ? (
                  <p className="mt-1.5 text-xs text-muted-foreground">+18% GST applicable</p>
                ) : null}

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.copy}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border/60 pt-5">
                  {o.features.map((f) => (
                    <li
                      key={f}
                      className="flex min-w-0 items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={o.recommended ? "hero" : "glass"}
                  size="xl"
                  asChild
                  className="mt-7 w-full"
                >
                  <a
                    href={o.title === "Free Consultation" ? WHATSAPP_CHAT_LINK : QUOTES_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      o.title === "Free Consultation"
                        ? "Chat on WhatsApp to book a free call"
                        : "Open Instant Quote Portal"
                    }
                  >
                    {o.cta}
                  </a>
                </Button>
              </motion.article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
