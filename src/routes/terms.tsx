import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Voaru" },
      { name: "description", content: "The terms that apply when you use Voaru's AI voice and call-handling platform." },
      { property: "og:title", content: "Terms of Service — Voaru" },
      { property: "og:description", content: "Rules for using Voaru's AI receptionist and voice agent services." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

const sections: [string, string[]][] = [
  ["Who these terms are for", ["Voaru is built for businesses and professionals, not personal consumer use. By signing up you confirm you're acting for a business purpose, are at least 18, and can legally agree to these terms. If you sign up for an organisation, you confirm you're authorised to accept on its behalf."]],
  ["What we provide", ["Voaru offers AI-driven voice tools such as AI receptionists and voice agents, inbound and outbound calling, call routing and transfers, appointment booking, lead qualification, missed-call follow-up, FAQ handling, message taking, phone numbers, recordings, transcripts and summaries, knowledge bases, integrations and reporting.", "What's available can depend on your plan, location, integrations and telephone carriers. We may add, change or retire features over time."]],
  ["How AI behaves", ["Our agents rely on automated AI systems that can sometimes give answers that are wrong, incomplete or unexpected. We don't promise every AI response will be accurate or suitable.", "You're responsible for setting up, testing and keeping an eye on your agents. Voaru must never be your only way of handling emergencies, medical situations, law-enforcement matters or anything where a failure could cause serious harm."]],
  ["Your setup and content", ["You control things like prompts, business details, FAQs, routing, numbers, availability, transfer contacts, scripts and contact lists. You confirm you have the right to share this information with us and that it's accurate and lawful."]],
  ["Calling laws and consent", ["You must follow all laws that apply to your calls and messages — including telemarketing, do-not-call, consent, caller ID, AI disclosure and privacy rules — wherever you or your callers are. You're responsible for getting any consent required before contacting people or using automated or AI voices."]],
  ["Inbound and outbound calls", ["For outbound campaigns you must only contact people you're lawfully allowed to reach, respect opt-outs promptly and call at reasonable hours. We may limit or pause outbound activity that looks abusive or unlawful."]],
  ["Recording and transcripts", ["If you turn on recording or transcription, you're responsible for giving any notices and obtaining any consent the law requires in the relevant regions."]],
  ["Phone numbers and carriers", ["Phone numbers are provided through third-party carriers and remain subject to their rules and regulations. Numbers aren't owned by you, and porting, availability and emergency calling may be limited. Voaru isn't a replacement for a standard phone line for emergency services."]],
  ["Third-party services", ["Some features rely on outside providers such as calendars, CRMs, AI models and telephony networks. We aren't responsible for their availability or conduct, and your use of them may be governed by their own terms."]],
  ["Accounts and security", ["Keep your login details safe and tell us straight away about any unauthorised access. You're responsible for activity carried out under your account."]],
  ["Plans and renewal", ["Subscriptions are billed in advance for each billing period and renew automatically unless cancelled before the renewal date. Plan features and minute allowances are described at the time of purchase."]],
  ["Cancelling", ["You can cancel at any time from your account or by contacting us. Cancellation stops future renewals; service continues until the end of the period you've already paid for."]],
  ["Minutes and extra usage", ["Each plan includes a set number of AI conversation minutes. Usage above that is charged at the stated per-minute rate. Numbers, transfers, IVR and similar services may draw down minutes faster. Unused minutes don't roll over unless we say otherwise."]],
  ["Trials, demos and credits", ["Free trials, demo calls and promotional credits are offered at our discretion, may have limits, and can be changed or withdrawn. If you don't cancel before a trial ends, the paid plan may begin."]],
  ["Payments and refunds", ["You authorise us to charge your chosen payment method for fees and applicable taxes. Unless required by law or stated in writing, fees already paid are non-refundable. Overdue amounts may lead to suspension."]],
  ["Price changes", ["We may update pricing. We'll give reasonable advance notice, and changes apply from your next billing period."]],
  ["Acceptable use", ["You may not use Voaru for unlawful, fraudulent, deceptive, harassing or abusive purposes; to send spam or illegal robocalls; to impersonate others; to infringe anyone's rights; to spread malware; or to interfere with, reverse-engineer or overload the service."]],
  ["Your data", ["You keep ownership of the data you put into Voaru. You let us use it only to run, secure, support and improve the service. Our handling of personal information is described in our Privacy Policy."]],
  ["Confidentiality", ["Each party agrees to protect the other's non-public information and use it only as needed to perform under these terms."]],
  ["Intellectual property", ["Voaru, its software, branding and materials belong to us and our licensors. We grant you a limited, non-transferable right to use the service during your subscription."]],
  ["Feedback", ["If you share ideas or suggestions, we may use them freely without any obligation to you."]],
  ["Availability", ["We aim for high reliability but don't guarantee uninterrupted or error-free service. Maintenance, carrier issues or events beyond our control may cause downtime."]],
  ["Suspension and termination", ["We may suspend or close accounts that breach these terms, create legal or security risk, or go unpaid. On termination your access ends, and we may delete your data after a reasonable period."]],
  ["No warranties", ["The service is provided “as is” and “as available”. To the extent the law allows, we disclaim all implied warranties, including fitness for a particular purpose and non-infringement."]],
  ["Limits on liability", ["To the extent the law allows, we aren't liable for indirect, incidental or consequential losses such as lost profits, revenue or data. Our total liability is capped at the fees you paid us in the 12 months before the claim."]],
  ["Indemnity", ["You agree to defend and compensate Voaru for claims arising from your content, your calls and messages, your breach of these terms or your violation of any law."]],
  ["Updates to these terms", ["We may revise these terms. When we make significant changes we'll let you know, and continuing to use Voaru afterwards means you accept the updated version."]],
  ["Governing law", ["These terms are governed by the laws of India, and disputes will be handled by the competent courts there, unless local law requires otherwise."]],
  ["Contact", ["Questions about these terms? Reach our team through the contact form on our website."]],
];

function Terms() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <div className="text-sm font-semibold uppercase tracking-widest text-primary">Legal</div>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          These terms explain the rules for using Voaru, our AI voice and communications platform. By creating an account or using any part of the service, you agree to them.
        </p>
        <div className="mt-12 space-y-10">
          {sections.map(([h, ps], i) => (
            <section key={h}>
              <h2 className="text-xl font-semibold"><span className="text-primary">{i + 1}.</span> {h}</h2>
              {ps.map((p) => <p key={p.slice(0, 20)} className="mt-3 leading-relaxed text-muted-foreground">{p}</p>)}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
