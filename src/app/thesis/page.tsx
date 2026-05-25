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
            An insurance broker is a <strong className="text-white/90">vendor-neutral trusted advisor</strong> that sits between clients and carriers — helping businesses navigate a complex vendor landscape, securing coverage, servicing policies, and advocating during claims. Revenue is a commission of 10–15% on premium placed, paid by the carrier. The broker does not take underwriting risk.
          </p>
        </Card>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Revenue model", value: "10–15% commission on premium" },
            { label: "Client retention", value: "85–97% annually" },
            { label: "EBITDA margin", value: "~30% (private independents)" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6 text-center">
              <div className="text-base font-bold text-white">{item.value}</div>
              <div className="text-xs text-white/40 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why insurance brokerage?">
        <div className="space-y-3">
          {[
            {
              title: "Stable, recurring revenue",
              body: "Policies renew annually. Retention rates are 85–97% depending on the number of policies per client (\"pip count\"). Revenue is not correlated with equity markets.",
              accent: "blue" as const,
            },
            {
              title: "High margins, variable cost structure",
              body: "EBITDA margins of ~30% (22–23% in the current soft cycle). The largest cost is producer comp — which is variable. Admin/back-office is the fixed cost layer and the AI target.",
              accent: "blue" as const,
            },
            {
              title: "100K+ fragmented targets",
              body: "Over 100,000 insurance brokers in the US. M&A velocity is extremely high. Family-owned independents of scale remain abundant targets — particularly in the $50M–$500M revenue tier.",
              accent: "blue" as const,
            },
            {
              title: "Ripe for AI transformation",
              body: "Brokers currently spend 60% of their time on data entry and documentation vs. building client relationships. The admin layer — ~33¢ of every revenue dollar — is the AI automation target.",
              accent: "blue" as const,
            },
          ].map((item) => (
            <Card key={item.title} accent={item.accent}>
              <div className="text-sm font-semibold text-white/90 mb-1.5">{item.title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Why now?">
        <div className="space-y-3">
          <Card accent="amber">
            <div className="text-sm font-semibold text-white/90 mb-1.5">PE forced-sale window 2026–2028</div>
            <p className="text-sm text-white/55 leading-relaxed">
              ~12–15 major PE-backed brokerage platforms hit their exit windows between 2026 and 2028. Multiple compression (12–13x EBITDA, the lowest in 10 years), organic growth deceleration, and AMS sprawl create forced sellers at compressed prices. Sequence&apos;s permanent capital structure removes timing pressure other PE buyers face.
            </p>
          </Card>
          <Card accent="amber">
            <div className="text-sm font-semibold text-white/90 mb-1.5">AI is now fast enough</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Newfront spent ~6 years and ~$100M on engineering to rebuild the AMS pre-AI. Sequence believes the same rebuild now takes a couple of months. The Refounding playbook — proven at BankSouth — can be applied at a brokerage with Atlas.
            </p>
          </Card>
          <Card accent="amber">
            <div className="text-sm font-semibold text-white/90 mb-1.5">The roll-up arbitrage is in its ninth inning</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Pure-PE roll-up math on brokers without transformation is exhausted. Relying on scaled players trading at 17–20x EBITDA forever is risky. Sequence must lean into the transformation thesis to differentiate — and that differentiation is the moat.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Why Sequence?">
        <div className="space-y-3">
          {[
            {
              title: "Permanent capital removes timing pressure",
              body: "Sequence doesn't face LP pressure to exit in 5–7 years. This lets us buy when others can't (trough of soft cycle) and hold through the transformation — capturing both operating improvement and eventual multiple expansion.",
              accent: "purple" as const,
            },
            {
              title: "AI-native operating thesis justifies paying through the trough",
              body: "The lift comes from operating improvement — not multiple expansion. Sequence can underwrite a deal at current trough multiples because the Atlas-driven margin recapture changes the P&L from acquisition day.",
              accent: "purple" as const,
            },
            {
              title: "Non-PE pitch wins the independents",
              body: "The biggest independents' phones ring daily with 12–14x PE offers. Sequence's AI-native pitch — equity + tools + permanent capital — is the differentiator. Targeting family-transition situations (founder in 80s, no succession) where competitive bidding is absent.",
              accent: "purple" as const,
            },
            {
              title: "Engagement-then-acquire motion",
              body: "Sequence can assess platforms while others can't — buying when forced sellers don't have time to prep. The minority-then-majority structure (KRP prototype) lets us establish credibility before taking control.",
              accent: "purple" as const,
            },
          ].map((item) => (
            <Card key={item.title} accent={item.accent}>
              <div className="text-sm font-semibold text-white/90 mb-1.5">{item.title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Buy box">
        <Card accent="indigo">
          <div className="text-xs font-semibold tracking-wider text-indigo-400/70 uppercase mb-4">What Sequence is looking for</div>
          <div className="space-y-3">
            {[
              ["Revenue size", "$50M+ revenue (top independents #20–75 by revenue); $50M+ threshold ensures operating scale"],
              ["Ownership", "Family-owned multi-generational brokers with succession pressure — or PE-backed with a forced-sale dynamic"],
              ["Lines", "Commercial primary (mid-market commercial P&C + employee benefits); avoid heavy personal lines / SMB where AI-native disruption is sharpest"],
              ["Culture", "Sales-culture agencies (8–12% organic growth, 22–30% EBITDA) over down-office agencies (3–4% growth, 45% EBITDA but no growth platform)"],
              ["AMS", "Not so embedded with a Big 7 commercially that integration would trigger carrier disputes"],
              ["Book ownership", "House-owned books (not producer-owned) — the single most important pre-acquisition contract term to diligence"],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-4 text-sm">
                <span className="flex-shrink-0 w-28 text-white/35 text-xs pt-0.5">{key}</span>
                <span className="text-white/65 leading-relaxed">{val}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section title="Key risks">
        <div className="space-y-2">
          {[
            { risk: "Finding the right chassis", mitigation: "Most independents of scale are 50+ brokerages slapped together. Quality first-gen independent acquisitions of sufficient scale are rare — requires patient sourcing and minority-stake entry angles." },
            { risk: "Producer departure / book portability", mitigation: "Concentrate diligence on house-vs-producer book ownership. Don't price flight risk on tone of voice; price it on contract terms. Build equity moats, not compensation arms races." },
            { risk: "AMS replacement complexity", mitigation: "Ontology-first strategy avoids needing to replace the AMS before realizing value. Build above the system of record, not against it." },
            { risk: "Race to the bottom on producer comp", mitigation: "Being the cost-advantaged player means you emerge the winner even if industry margins compress. Aya Healthcare analogy: took margins down ~1,000 bps during Covid, stole share, built $8B platform." },
            { risk: "Multiple compression persisting", mitigation: "Permanent capital removes timing pressure. The 2026–2028 soft-market trough is the analog to 2018–2019, which set up the hard-market multiple expansion that followed." },
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
