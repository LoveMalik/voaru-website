import { createFileRoute } from "@tanstack/react-router";
import {
  PhoneIncoming, CalendarCheck, Filter, RotateCcw, MessageSquare, BarChart3,
  GitBranch, FileAudio, Check, Clock, Zap, Gauge, PhoneOff, Users, EyeOff, Moon,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voaru — Your 24/7 AI Front Desk for Inbound Calls" },
      { name: "description", content: "Voaru's AI voice agents answer every call, book appointments, qualify leads and hand urgent callers to your team — day and night." },
      { property: "og:title", content: "Voaru — Your 24/7 AI Front Desk" },
      { property: "og:description", content: "Answer every call, book more jobs and recover missed leads with AI voice agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problems = [
  { icon: PhoneOff, t: "Calls go unanswered", d: "When your team is on a job or off the clock, callers hang up and phone the next company on the list." },
  { icon: Moon, t: "Leads arrive after hours", d: "Evenings and weekends bring urgent enquiries that sit in voicemail until it's too late." },
  { icon: Users, t: "Staff stuck on repeat questions", d: "Your people spend hours answering the same pricing and availability questions." },
  { icon: EyeOff, t: "No visibility", d: "No clear record of who called, what they needed, or which calls became booked work." },
];

const features = [
  { icon: PhoneIncoming, t: "Answers every inbound call", d: "A natural-sounding AI agent picks up instantly, any hour, any day." },
  { icon: CalendarCheck, t: "Books appointments", d: "Checks availability and puts qualified jobs straight onto your calendar." },
  { icon: Filter, t: "Qualifies leads", d: "Asks the right questions so only serious prospects reach your team." },
  { icon: RotateCcw, t: "Missed-call recovery", d: "Calls back missed leads within seconds before they go cold." },
  { icon: GitBranch, t: "Smart transfers", d: "Hands urgent or complex callers to the right person on your team." },
  { icon: MessageSquare, t: "Answers FAQs", d: "Handles hours, pricing, service areas and common questions from your knowledge base." },
  { icon: FileAudio, t: "Recordings & summaries", d: "Every call transcribed and summarised so nothing slips through." },
  { icon: BarChart3, t: "Live analytics", d: "See call volume, bookings and conversion trends in one dashboard." },
];

const steps = [
  { t: "Start your free trial", d: "We spin up your private AI workspace in minutes." },
  { t: "We configure it for you", d: "Our team tailors greetings, questions and booking rules to your business." },
  { t: "Your AI goes live", d: "Calls are answered, leads captured and jobs booked around the clock." },
];

const industries = ["HVAC", "Plumbing", "Electrical", "Roofing", "Cleaning", "Garage Doors", "Pest Control", "Handyman", "Landscaping", "Locksmith", "Dental", "Medical Clinics", "Real Estate", "Property Management", "Law Firms", "Restaurants"];

const plans = [
  { name: "Starter", price: "$210", mins: "Up to 1,200 AI minutes / month", blurb: "For small service businesses starting with AI call handling.", items: ["1 AI voice agent", "Answers every call", "Appointment booking", "Lead qualification", "Missed-call recovery", "Booking dashboard", "Email support"], cta: "Start free trial" },
  { name: "Growth", price: "$420", mins: "Up to 3,000 AI minutes / month", blurb: "For growing teams with heavier inbound volume.", items: ["Everything in Starter", "CRM integration", "Advanced routing", "Webhooks", "Multiple AI workflows", "Priority support"], cta: "Book a demo", popular: true },
  { name: "Scale", price: "$700", mins: "Up to 7,000 AI minutes / month", blurb: "For multi-location businesses and larger teams.", items: ["Everything in Growth", "Multiple AI voice agents", "Advanced call routing", "API & webhook access", "Dedicated onboarding", "Priority optimisation"], cta: "Book a demo" },
  { name: "Enterprise", price: "Custom", mins: "Custom minute allowance", blurb: "For high-volume organisations needing custom deployments.", items: ["Unlimited AI agents", "Volume-based pricing", "Dedicated success manager", "SLA & priority infrastructure", "Custom integrations", "White-glove onboarding"], cta: "Talk to sales" },
];

const testimonials = [
  { q: "We now reply to every new lead instantly. Booked calls rose 38% in a month, with no extra hires.", n: "Olivia Martin", r: "Growth Director, Apex Clinics" },
  { q: "Missed-call recovery wins back customers we used to lose. The difference showed up right away.", n: "James Keller", r: "COO, Northline Home Services" },
  { q: "Qualifying prospects is faster and more consistent across every market we serve.", n: "Sophia Reed", r: "Founder, Meridian Growth" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> AI voice agents for service businesses
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Never miss another <span className="text-gradient">customer call.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Voaru answers calls 24/7, books appointments, qualifies leads and passes urgent callers to your team — so every enquiry becomes an opportunity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">Launch my AI</a>
              <a href="#pricing" className="rounded-full border border-border px-6 py-3 font-semibold transition hover:bg-secondary">See pricing</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {["7-day free trial", "No credit card", "Setup included", "Cancel anytime in trial"].map((x) => (
                <li key={x} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{x}</li>
              ))}
            </ul>
          </div>
          <CallCard />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-5 pb-16">
          {[{ i: Clock, v: "24/7", l: "Always-on response" }, { i: Gauge, v: "<700ms", l: "Natural voice latency" }, { i: Zap, v: "3x", l: "Faster speed to lead" }].map(({ i: I, v, l }) => (
            <div key={l} className="rounded-2xl border border-border bg-card/60 p-5 text-center">
              <I className="mx-auto h-5 w-5 text-primary" />
              <div className="mt-2 font-display text-2xl font-bold md:text-3xl">{v}</div>
              <div className="text-xs text-muted-foreground md:text-sm">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <Section eyebrow="The problem" title="Every unanswered call is revenue walking away">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <I className="h-6 w-6 text-destructive" />
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg">Voaru fixes this with an AI front desk that <span className="text-gradient font-semibold">never takes a break.</span></p>
      </Section>

      {/* Features */}
      <Section id="features" eyebrow="What Voaru does" title="One AI agent handling every call your business receives" surface>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: I, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><I className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How */}
      <Section id="how" eyebrow="Simple onboarding" title="Up and running in minutes">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border border-border bg-card p-7">
              <div className="font-display text-5xl font-extrabold text-gradient">0{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section eyebrow="Who it's for" title="Built for service businesses across North America" surface>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((x) => (
            <span key={x} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{x}</span>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Results" title="Teams that stopped losing leads">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.n} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-foreground/90">“{t.q}”</blockquote>
              <figcaption className="mt-5 text-sm"><div className="font-semibold">{t.n}</div><div className="text-muted-foreground">{t.r}</div></figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" eyebrow="Pricing" title="Plans that grow with every call you capture" surface>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-2xl border bg-card p-6 ${p.popular ? "border-primary shadow-glow" : "border-border"}`}>
              {p.popular && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">Most popular</span>}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-5 font-display text-4xl font-bold">{p.price}{p.price !== "Custom" && <span className="text-base font-medium text-muted-foreground"> /mo</span>}</div>
              <div className="mt-1 text-xs text-accent">{p.mins}</div>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>)}
              </ul>
              <a href="#demo" className={`mt-6 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-secondary"}`}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Every plan includes setup, no long-term contract and cancel-anytime flexibility. Minutes beyond your allowance are billed at a fixed per-minute rate; usage of numbers, transfers and IVR may affect available minutes.
        </p>
      </Section>

      <DemoForm />
      <SiteFooter />
    </div>
  );
}

function Section({ id, eyebrow, title, surface, children }: { id?: string; eyebrow: string; title: string; surface?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={surface ? "bg-surface" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function CallCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Incoming call · HVAC enquiry</div>
        <span className="flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Live</span>
      </div>
      <div className="my-6 flex h-14 items-center justify-center gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="animate-wave h-full w-1 rounded-full bg-gradient-to-b from-primary to-accent" style={{ animationDelay: `${(i % 7) * 0.12}s` }} />
        ))}
      </div>
      <div className="space-y-3 text-sm">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5">Hi, my AC stopped working — can someone come today?</div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-primary-foreground">I can help! I have a technician free at 3:30pm. Shall I book that for you?</div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted p-3"><div className="text-xs text-muted-foreground">Booked calls</div><div className="font-display text-xl font-bold text-primary">+38%</div></div>
        <div className="rounded-xl bg-muted p-3"><div className="text-xs text-muted-foreground">Coverage</div><div className="font-display text-xl font-bold text-accent">24/7</div></div>
      </div>
    </div>
  );
}

function DemoForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="demo" className="bg-hero">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Let's build your AI receptionist</h2>
        <p className="mt-3 text-muted-foreground">Takes under two minutes. No spam, no pressure, no credit card.</p>
        {sent ? (
          <div className="mt-10 rounded-2xl border border-primary bg-card p-8"><Check className="mx-auto h-8 w-8 text-primary" /><p className="mt-3 font-semibold">Thanks! We'll be in touch shortly to set up your demo.</p></div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 text-left sm:grid-cols-2">
            {[["Your name", "text"], ["Business name", "text"], ["Work email", "email"], ["Phone", "tel"]].map(([l, t]) => (
              <label key={l} className="text-sm">{l}<input required type={t} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:border-primary" /></label>
            ))}
            <label className="text-sm sm:col-span-2">Industry
              <select className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 outline-none focus:border-primary">
                {industries.map((i) => <option key={i}>{i}</option>)}<option>Other</option>
              </select>
            </label>
            <button className="rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90 sm:col-span-2">Request my free demo</button>
          </form>
        )}
      </div>
    </section>
  );
}
