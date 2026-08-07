import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { ContactCards } from "@/components/site/contact-info";
import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about your project"),
  consent: z.boolean().refine((v) => v, { message: "Please accept to be contacted" }),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", consent: false },
  });

  const onSubmit = (values: FormValues) => {
    toast.success("Thanks — your message is on its way", {
      description: `We'll get back to you at ${values.email} within one business day.`,
    });
    form.reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Get in"
          highlight="Touch"
          description="Have questions about our services? Send us a message or call us directly."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <Stagger className="flex flex-col gap-6">
            <Item>
              <div className="glass-panel noise lift p-6 md:p-8">
                <h3 className="text-xl uppercase sm:text-2xl">
                  Send us a <span className="text-gradient">Message</span>
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="h-12 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="h-12 rounded-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="h-12 rounded-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell us about your project or inquiry..."
                              className="rounded-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start gap-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-0.5"
                            />
                          </FormControl>
                          <div>
                            <FormLabel className="text-sm font-normal leading-relaxed text-muted-foreground">
                              I agree to be contacted by Smart Marketing System through RCS, SMS,
                              and WhatsApp.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      <Send className="size-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </Item>
          </Stagger>

          <div className="flex flex-col gap-4">
            <ContactCards />
            <div className="glass-panel min-h-64 flex-1 overflow-hidden p-1.5">
              <iframe
                title="Smart Marketing System corporate office in Mannargudi, Tamil Nadu"
                src="https://www.google.com/maps?q=Balakrishnan%20Nagar%2C%20Mannargudi%2C%20Tiruvarur%2C%20Tamil%20Nadu%20614001&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-64 w-full rounded-[22px] border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
