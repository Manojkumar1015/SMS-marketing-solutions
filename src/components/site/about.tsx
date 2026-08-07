import { BrainCircuit, HeartHandshake, MapPin, TrendingUp } from "lucide-react";

import { Eyebrow, Item, Stagger } from "@/components/site/motion-primitives";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Marketing Tools",
    copy: "We use AI to create content, automate campaigns, and optimise ad performance",
  },
  {
    icon: HeartHandshake,
    title: "Full-Service Digital Agency",
    copy: "One partner for social media, paid ads, SEO, WhatsApp marketing, and lead generation",
  },
  {
    icon: TrendingUp,
    title: "Performance-Focused Results",
    copy: "We track leads, conversions, and ROI with transparent monthly reports",
  },
  {
    icon: MapPin,
    title: "Serving Tamil Nadu and India",
    copy: "Based in Mannargudi, serving Trichy, Thanjavur, Kumbakonam, Chennai, and clients across India",
  },
];

const stats = [
  { value: "6+", label: "Countries Served" },
  { value: "15+", label: "Industries Served" },
  { value: "40K+", label: "Campaigns Executed" },
  { value: "600K+", label: "Creatives Delivered" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-shell">
        <Stagger className="rule-top grid gap-8 pt-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-12">
          <div className="flex min-w-0 flex-col gap-5">
            <Item className="flex min-w-0 items-center gap-4">
              <span className="index-num shrink-0">01</span>
              <Eyebrow>Established 2015</Eyebrow>
            </Item>
            <Item>
              <h2 className="text-balance text-[2rem] uppercase leading-[1.02] sm:text-4xl md:text-5xl">
                About <span className="text-gradient">Smart Marketing System</span>
              </h2>
            </Item>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <Item>
              <p className="text-pretty leading-relaxed text-foreground/90 md:text-lg">
                <span className="font-semibold text-primary">
                  Smart Marketing System (SMSin360)
                </span>{" "}
                is a <span className="font-semibold">digital marketing agency</span> based in Tamil
                Nadu, India. We help small businesses, startups, educational institutes, and local
                brands grow through AI-powered marketing solutions.
              </p>
            </Item>
            <Item>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                We specialise in lead generation, social media management, performance advertising
                (Meta Ads, Google Ads), WhatsApp and SMS automation, and conversion-focused content
                creation. Over 300 businesses across 6 countries trust us to handle their digital
                marketing.
              </p>
            </Item>
          </div>
        </Stagger>

        <Stagger className="mt-12 grid border-y border-border/70 md:grid-cols-2" gap={0.1}>
          {features.map((f, i) => (
            <Item
              key={f.title}
              className={[
                "group min-w-0 border-b border-border/70 px-0 py-7 last:border-b-0 md:px-8 md:py-9",
                i % 2 === 0 ? "md:border-r md:border-border/70 md:pl-0" : "md:pr-0",
                i >= features.length - 2 ? "md:border-b-0" : "",
              ].join(" ")}
            >
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                  <f.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base uppercase tracking-tight sm:text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>

        <Stagger className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {stats.map((s) => (
            <Item key={s.label} className="min-w-0">
              <p className="font-display text-3xl leading-none md:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </p>
              <p className="kicker mt-2 block">{s.label}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
