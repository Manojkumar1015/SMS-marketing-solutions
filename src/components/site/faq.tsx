import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";

const faqs = [
  {
    q: "How is your pricing structured?",
    a: "We work on transparent monthly, quarterly or yearly plans. Starter, Growth and Premium cover most businesses, and ad spend is always billed separately and directly to the platforms so you keep full visibility.",
  },
  {
    q: "How soon will I see marketing results?",
    a: "Paid advertising usually shows measurable traction within 2–3 weeks. Organic channels such as SEO, AEO and content compound over 3–6 months. You get weekly updates either way, so progress is never a black box.",
  },
  {
    q: "What does your SEO work actually include?",
    a: "Technical audits, on-page optimisation, content strategy, local and Google Business optimisation, link acquisition, plus newer disciplines like AEO, GEO, SXO and LLMO so you appear inside AI answers too.",
  },
  {
    q: "Which advertising platforms do you manage?",
    a: "Google, Meta, YouTube, LinkedIn, OTT and marketplace ads, along with WhatsApp, SMS and voice broadcasting campaigns. We recommend the mix based on where your buyers actually convert.",
  },
  {
    q: "Do you build websites and landing pages?",
    a: "Yes. We design and build conversion-focused websites, landing pages and mobile UI, including copywriting, analytics setup and speed optimisation before launch.",
  },
  {
    q: "What can AI automation handle for my business?",
    a: "Lead capture and follow-up, chatbots, CRM syncing, review requests, ad budget tuning, reporting dashboards and content repurposing — all monitored by our team so quality stays high.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="07"
          eyebrow="FAQ"
          title="Questions, answered"
          highlight="clearly"
          description="Everything clients usually ask before starting with us."
        />

        <Stagger className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]">
          <Item className="hidden lg:block">
            <p className="kicker">Smart Marketing System</p>
            <p className="mt-3 font-display text-2xl leading-tight">
              Clear answers,
              <br />
              <span className="text-gradient">no jargon.</span>
            </p>
          </Item>
          <Item className="min-w-0">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col border-t border-border/70"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border/70">
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Item>
        </Stagger>
      </div>
    </section>
  );
}
