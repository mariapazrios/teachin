import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ThesisPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 1 · Thesis"
        title="The Thesis"
        description="Why insurance brokerage is the right sector, why the timing is now, and why Sequence is the right acquirer. The canonical story in five arguments."
      />

      <Section title="What is an insurance broker?">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            An insurance broker sits between <strong className="text-white/90">the insured</strong> (individuals and businesses managing risk) and <strong className="text-white/90">insurance carriers</strong> (who quote products and bear risk). The broker is a vendor-neutral trusted advisor who does not take underwriting risk — revenue is a commission of 14–15% on direct premium placed, or 11–12% on wholesale-routed placements, paid by the carrier.
          </p>
        </Card>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "ASSESS", body: "Consult the client, understand their risk and what could go wrong" },
            { label: "SHOP", body: "Survey the market — request quotes from multiple carriers" },
            { label: "NEGOTIATE", body: "Push on price, coverage, and exclusions/terms" },
            { label: "ADVOCATE", body: "Fight for you when it's time to file a claim" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-blue-500/20 text-center">
              <div className="text-xs font-bold text-blue-400/80 tracking-widest mb-2">{item.label}</div>
              <div className="text-xs text-white/50 leading-relaxed">{item.body}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Direct commission", value: "14–15%" },
            { label: "Wholesale commission (no profit share)", value: "11–12%" },
            { label: "Producer avg blended rate", value: "30–35%" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6 text-center">
              <div className="text-base font-bold text-white">{item.value}</div>
              <div className="text-xs text-white/40 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The policy lifecycle">
        <div className="space-y-2">
          {[
            { step: "1", label: "Need Identified", body: "Producer prospects an account, surfaces coverage gaps, books the meeting." },
            { step: "2", label: "Submission Prep", body: "Loss runs, ACORD forms, exposure data, risk narrative. Manual today and often offshored." },
            { step: "3", label: "Carrier Placement", body: "Match to appetite, market the risk, negotiate price and terms across multiple carriers." },
            { step: "4", label: "Bind & Service", body: "Issue policy, COIs, endorsements, billing. Ongoing servicing through the year." },
            { step: "5", label: "Renewal", body: "12-month cycle: renewal marketing, cross-sell opportunities, claims advocacy." },
          ].map(({ step, label, body }) => (
            <div key={step} className="flex gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">{step}</span>
              <div>
                <div className="text-sm font-semibold text-white/80 mb-0.5">{label}</div>
                <div className="text-xs text-white/45 leading-relaxed">{body}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/[0.02] rounded-xl p-4 border border-white/5">
          <div className="text-xs font-semibold text-white/35 uppercase tracking-wider mb-2">Revenue Model</div>
          <div className="space-y-1 text-sm text-white/55">
            <div>Direct placement: 14–15% commission + 2–3 pts contingent / profit share from carrier</div>
            <div>Wholesale-routed: 11–12% commission to retailer, no profit share (specialty / E&amp;S risks)</div>
            <div>Producer commissions: ~40%+ on new business, 25–30% on renewals → blended 30–35%</div>
          </div>
        </div>
      </Section>

      <Section title="The simple thesis (5 points)">
        <div className="space-y-3">
          {[
            {
              num: "1",
              title: "Complex intermediary necessity",
              body: "Insurance is an enormous industry with a complex vendor ecosystem that necessitates an intermediary in both an advisory and procurement capacity to help businesses navigate and purchase comprehensive coverage.",
              accent: "blue" as const,
            },
            {
              num: "2",
              title: "Structural tailwinds drive growth",
              body: "(1) Inflation in frequency/severity of claims drives premium growth. (2) Increasing business complexity creates new lines (cyber, AI, geopolitical, supply chain risk). (3) Advisory services navigate accelerating regulations and risks.",
              accent: "blue" as const,
            },
            {
              num: "3",
              title: "The broker controls the customer relationship",
              body: "Based on longitudinal trust — difficult to disintermediate with technology alone. Underpins high-retention and recurring revenue characteristics.",
              accent: "blue" as const,
            },
            {
              num: "4",
              title: "Meaningful AI opportunity in the back office",
              body: "While the front-line relationship is definitionally manual, AI can improve: (1) back-office workflows (submission-to-bind done via email today), (2) producer productivity (automate contract reviews, proposal creation), and (3) customer service (proactive vs. reactive engagement).",
              accent: "blue" as const,
            },
            {
              num: "5",
              title: "Highly actionable",
              body: "Massive market, significant fragmentation, limited technology penetration. Dozens of scaled PE-backed and independent platforms. AI creates a clear transformation thesis coupled with a scalable M&A engine.",
              accent: "blue" as const,
            },
          ].map((item) => (
            <Card key={item.num} accent={item.accent}>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-300">{item.num}</span>
                <div>
                  <div className="text-sm font-semibold text-white/90 mb-1.5">{item.title}</div>
                  <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Investment evaluation framework">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Dimension</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium w-16">Score</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Commentary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Market Attractiveness", "4 / 5", "Mid-90s gross retention at best-in-class. Revenue % of premium indexed to inflation. High cash conversion, variable cost structure. Positively exposed to new business formation and emerging risks."],
                ["Market Defensibility", "4 / 5", "Carriers run high-90s combined ratios — structurally unable to disintermediate distribution without risking float-income profitability. Complex ecosystem requires trusted intermediary."],
                ["AI Transformation: Cost Efficiency", "4 / 5", "80%+ of broker work is 4 task types, creating discrete automation points. Large middle/back-office with homogenous, repetitive workflows."],
                ["AI Transformation: Commercial Engine", "4 / 5", "Producers spend up to 60% of time on admin. Automations free time to produce. Downstream: cross-sell tooling, customer intelligence, vertical integration into underwriting."],
                ["Actionability", "4 / 5", "Massive TAM, significant fragmentation. Significant leads in <1 month. AI overhang makes Sequence a 'white knight' to operators who can't invest in technology."],
                ["Atlas Applicability", "3 / 5", "LOS rebuild at BankSouth is relevant analogy; RM work applies to producers. However, AMS also functions as accounting system — significant new build required. Difficulty creates moat."],
                ["Sequence Flywheel", "4 / 5", "AMS architecture borrows from LOS rebuild. Attractive insurance dataset applicable in other insurance assets. Opens lanes into adjacent businesses (reinsurance)."],
              ].map(([dim, score, comment]) => (
                <tr key={dim as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white/80 font-medium text-sm align-top">{dim}</td>
                  <td className="py-3 pr-4 text-blue-400/80 font-bold text-sm align-top whitespace-nowrap">{score}</td>
                  <td className="py-3 text-white/45 text-xs leading-relaxed">{comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <span className="text-sm font-bold text-blue-300">Recommendation: Pursue</span>
          <span className="text-sm text-white/50 ml-2">Key questions to resolve: AMS rebuild vs. hollow strategy, entry vehicle archetype, vertical integration thesis</span>
        </div>
      </Section>

      <Section title="Platform buy box">
        <Card accent="indigo">
          <div className="text-xs font-semibold tracking-wider text-indigo-400/70 uppercase mb-4">What Sequence is looking for</div>
          <div className="space-y-3">
            {[
              ["Revenue / EBITDA", "$75–500M+ revenue; $25–100M+ EBITDA. Below $25M EBITDA, engineering investment doesn't amortize cleanly."],
              ["Operational scale", "200–2,000 employees; 50–500 producers; <5 AMS instances; at least regional footprint."],
              ["Leadership", "Clear POV on AI enablement; experience scaling larger orgs; CEO/President leaned into AI with a definitive transformation vision."],
              ["Customer segmentation", "SMB / small-commercial / mid-market. Industry vertical depth is a defensible moat. Avoid heavy personal lines."],
              ["AMS preference", "Strong preference for AMS 360 (Vertafore) over Applied Epic. AMS 360 has an API and more open architecture; Applied Epic has no API and is highly litigious."],
              ["Carrier access", "200+ carrier appointments; robust long-term relationships. Cultural aversion to heavy wholesaler usage is a positive signal."],
              ["Book ownership", "House-owned books (not producer-owned) — single most important pre-acquisition contract term to diligence."],
              ["Technology posture", "Open to new technology without producer revolt. Existing data warehouse capability is a positive starting point."],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-4 text-sm">
                <span className="flex-shrink-0 w-32 text-white/35 text-xs pt-0.5">{key}</span>
                <span className="text-white/65 leading-relaxed">{val}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section title="Key risks">
        <div className="space-y-2">
          {[
            { risk: "DTC disintermediation accelerates", mitigation: "Strong moat at mid-market+ where products are complex and bespoke. Defensibility weakens only at SME / personal lines where simpler products allow DTC traction — avoid heavy personal lines in buy box." },
            { risk: "AMS rebuild proves harder than expected", mitigation: "Prior rebuild required $100M / 6 years / 100 engineers pre-AI. Today's tooling compresses to ~$10M / 6–12 months / 10–15 FDEs. Ontology-first strategy avoids needing full replacement before realizing value." },
            { risk: "Integration friction eats first-mover advantage", mitigation: "AI-native chassis creates a single integration playbook. Acquisitions migrate onto one platform instead of running separate systems — fundamentally different synergy profile vs. aggregators." },
            { risk: "Large-cap brokers execute AI playbook faster", mitigation: "Scale works against incumbents — closed AMS systems, brittle data, opinionated workflows designed for human input can't be quickly rearchitected. First-mover advantage is real." },
            { risk: "Actionability: competing with PE for assets", mitigation: "Permanent capital removes 3-year earnout-vs-disruption trap. AI-native operating system differentiates pitch to sellers. Pre-deal engagement (4–8 weeks on sales enablement) builds credibility before bid." },
          ].map(({ risk, mitigation }) => (
            <div key={risk} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="flex gap-2 items-start">
                <span className="flex-shrink-0 text-red-400/60 text-xs mt-0.5 font-bold">RISK</span>
                <div>
                  <div className="text-sm font-semibold text-white/85 mb-1">{risk}</div>
                  <div className="text-sm text-white/45 leading-relaxed">{mitigation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
