import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ValueCreationPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 4 · Value Creation"
        title="Value Creation Plan"
        description="Five levers — all downstream of executing an AMS rebuild that creates the foundational data substrate to re-found the business."
      />

      <Section title="The five levers">
        <div className="overflow-x-auto mb-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Lever</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Potential Upside</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["AMS Rebuild & Operational Automation", "10–15 points margin expansion"],
                ["Sales Enablement", "+20% revenue lift from cross-sell; 5%+ organic growth acceleration"],
                ["Talent Flywheel", "50%+ producer book recovery; net-new producer hiring pipeline"],
                ["Strategic M&A", "Acquiror-of-choice attracts above-market synergies at competitive multiples"],
                ["Vertical Integration", "+10–15 points of revenue uplift on underwritten premium"],
              ].map(([lever, upside], i) => (
                <tr key={lever as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white/80 font-medium text-sm">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 flex-shrink-0">{i + 1}</span>
                      {lever}
                    </span>
                  </td>
                  <td className="py-3 text-emerald-400/80 font-semibold text-sm">{upside}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card>
          <p className="text-sm text-white/55 leading-relaxed">
            All five levers sit downstream of executing on the AMS rebuild. The rebuild is not the thesis itself — it&apos;s the foundational intervention that <strong className="text-white/80">simultaneously expands margin, retention, and cross-sell capacity.</strong> The defensibility shift matters more than the cost line: when workflow lives in the chassis rather than the producer&apos;s head and Outlook inbox, book stickiness travels with the platform.
          </p>
        </Card>
      </Section>

      <Section title="Lever 1 · AMS rebuild & operational automation">
        <div className="text-xs font-semibold tracking-wider text-emerald-400/50 uppercase mb-3">10–15 points margin expansion</div>
        <Card accent="green" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The margin is the consequence, not the thesis</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Industry runs on a two-vendor duopoly (Applied / Vertafore) built on data models that predate the cloud. Schema rigidity is the structural reason producer and account-manager time skews ~60% to data entry, re-keying, and document handling rather than client-facing work. A modern stack — normalized data layer + agentic orchestration + LLM as the interface — doesn&apos;t compete with incumbents on feature parity; it makes the underlying job smaller.
          </p>
        </Card>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { value: "~30–35%", label: "EBITDA today", sub: "Private mid-market platforms" },
            { value: "+10–15pts", label: "From automation", sub: "Middle/back-office replacement" },
            { value: "~45–50%+", label: "Steady state", sub: "Post-rebuild target" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6 text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
              <div className="text-xs text-white/30 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            ["COI automation", "Certificates of insurance — highest volume, fully automatable. ~20–25% of all back-office transactions."],
            ["Endorsement processing", "Policy changes — currently email-driven, multi-step AE workflows. Full agentic replacement."],
            ["Document comparison", "Policy review / comparison — currently manual. AI can process and flag differences instantly."],
            ["Commission reconciliation", "Carrier statement matching — currently requires dedicated staff. Automatable with carrier API integrations."],
            ["Renewal workflow", "Annual renewal calendar and prep — fully instrumentable with agents on top of the AMS data layer."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <div className="text-sm font-semibold text-white/80 mb-1">{title}</div>
              <div className="text-xs text-white/45 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Lever 2 · Sales enablement">
        <div className="text-xs font-semibold tracking-wider text-emerald-400/50 uppercase mb-3">+20% revenue lift from cross-sell; 5%+ organic growth acceleration</div>
        <Card accent="blue" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The PIF gap is real and quantifiable</div>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">~1.7</div>
              <div className="text-xs text-white/40 mt-1">Mid-market average PIF per client</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">2.5+</div>
              <div className="text-xs text-white/40 mt-1">Best-in-class operators</div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            The gap persists not from lack of intent — it&apos;s that cross-sell requires specialist coverage at the moment of conversation, and most producers can&apos;t carry the full product shelf in their heads. The structural unlock is making specialty expertise available on-demand in the workflow, not training generalist producers to be specialists.
          </p>
        </Card>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Operator voices on the enablement opportunity</div>
        <div className="space-y-3">
          {[
            {
              quote: "I get the renewal policy in. It's already keyed up for my account executive. Here's what's different A to B. Here's a different exclusion that's been applied. Here's a chart of the different pricing and rates from last year. Boom, I've already put it in the proposal for you so that you can go have higher-end conversations with that customer. Pretty clear in my mind what happens. I just don't have the revenue, the time, the energy to do that ourselves. Can't wait for you to do it.",
              attribution: "Brett Godwin, Chief Revenue Officer · Sterling Seacrest Pritchard",
              label: "Back-Office Efficiency → Front-Office Value Prop",
            },
            {
              quote: "A big tipping point for a lot of construction producers is certificates. The clients are heavily dependent on certificate accuracy and turnaround time. So if I can craft a solution for your certificates where it's staying in house, we still control it, and we can promise our clients turnaround time of like, hey, you put in a certificate request and we can get that back to you in two hours — that's a huge win. And then now we're attracting more producers, we're doing more for our clients.",
              attribution: "Sanjay Mehta, EVP & Chief Market Officer · The Liberty Company",
              label: "COI Speed as Competitive Wedge",
            },
            {
              quote: "I just formed our first kind of internal MGA, and we are engaging with Accelerant. In the next six weeks we'll be able to issue quotes and bind and issue policies on that system. Whereas it used to be — you know, a 30-day turnaround — they send an ACORD by email to the carrier... 15, 20 days, then getting an order and having the policy issued, 15 to 20 more days. Now we're going to have quotes in three to five minutes.",
              attribution: "Eric Leavitt, CEO · The Leavitt Group",
              label: "Speed-to-Quote Drives Win Rates",
            },
          ].map(({ quote, attribution, label }) => (
            <div key={attribution} className="bg-white/[0.03] rounded-xl p-5 border border-white/6">
              <div className="text-xs font-semibold text-blue-400/60 uppercase tracking-wider mb-3">{label}</div>
              <blockquote className="text-sm text-white/60 leading-relaxed italic mb-3">&ldquo;{quote}&rdquo;</blockquote>
              <div className="text-xs text-white/35">— {attribution}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Lever 3 · Talent flywheel">
        <div className="text-xs font-semibold tracking-wider text-emerald-400/50 uppercase mb-3">50%+ producer book recovery; net-new producer hiring pipeline</div>
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/6 mb-4">
          <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">The flywheel: a superior chassis creates a compounding machine</div>
          <div className="flex flex-col gap-3">
            {[
              { step: "1", text: "Superior Operating Platform — less admin overhead, more sales enablement tools", color: "bg-blue-500/15 border-blue-500/25" },
              { step: "↓", text: "Becomes a Recruiting Wedge", color: "border-white/5 bg-white/[0.02]" },
              { step: "2", text: "Lift-outs — destination for groups looking to move books out of large aggregators", color: "bg-purple-500/15 border-purple-500/25" },
              { step: "3", text: "Active Recruiting — differentiated value prop for individuals looking to move platforms", color: "bg-purple-500/15 border-purple-500/25" },
              { step: "4", text: "Net-New Producers — train and ramp to profitability more quickly via AI-assisted onboarding", color: "bg-purple-500/15 border-purple-500/25" },
              { step: "↓", text: "Drives Organic Book Growth", color: "border-white/5 bg-white/[0.02]" },
              { step: "5", text: "Best-in-class producers with best-in-class tools drive organic growth", color: "bg-emerald-500/15 border-emerald-500/25" },
              { step: "↓", text: "Generates Cash to Reinvest", color: "border-white/5 bg-white/[0.02]" },
              { step: "6", text: "Reinvest in platform capabilities → back to step 1 (each turn compounds)", color: "bg-amber-500/15 border-amber-500/25" },
            ].map(({ step, text, color }) => (
              <div key={step + text} className={`flex items-start gap-4 rounded-xl p-3.5 border ${color}`}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/50">{step}</span>
                <span className="text-sm text-white/70 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[
            ["Producer productivity range is wide", "Top-quartile producers materially outproduce the median at every operator we've spoken to. Moving the median up unlocks organic growth."],
            ["Post-FTC non-compete environment", "A producer's book is more portable than ever. Our toolkit can drive 50%+ book recovery in lift-outs vs. the ~half-of-book industry average."],
            ["Platform stickiness is the ultimate defense", "Lifting or recruiting producers out of a chassis that fits is particularly hard to execute, especially when client service can't compete with what they receive at the AI-native broker."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <div className="text-sm font-semibold text-white/80 mb-1">{title}</div>
              <div className="text-xs text-white/45 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Lever 4 · Strategic M&A">
        <div className="text-xs font-semibold tracking-wider text-emerald-400/50 uppercase mb-3">Acquiror-of-choice attracts above-market synergies at competitive multiples</div>
        <Card accent="purple" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The hollow middle</div>
          <p className="text-sm text-white/60 leading-relaxed">
            The $10–30M EBITDA segment is structurally hollowed out. Small tuck-ins below and multi-billion-dollar platforms exist, but the middle is scarce. In a competitive environment, offering a differentiated home is a prerequisite to winning attractive deals.
          </p>
        </Card>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Asset Size</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["$0–2M EBITDA", "Abundant tuck-ins"],
                ["$2–10M EBITDA", "Many small assets"],
                ["$10–30M EBITDA", "↓ Hollow Middle — structural scarcity"],
                ["$30–100M EBITDA", "PE platforms"],
                ["$100M+ EBITDA", "$1B+ platforms"],
              ].map(([size, avail]) => (
                <tr key={size as string} className={`hover:bg-white/[0.02] transition-colors ${(size as string).includes("Hollow") ? "bg-red-500/5" : ""}`}>
                  <td className="py-2.5 pr-4 text-white/80 text-sm font-medium">{size}</td>
                  <td className={`py-2.5 text-sm ${(size as string).includes("Hollow") ? "text-red-400/70 font-semibold" : "text-white/45"}`}>{avail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          {[
            ["Acquiror-of-choice", "M&A market is competitive with bidders converging on price. Technology, fit, integration story, and post-close treatment of teams can win competitive deals. With an AI-native operating system, we'll have a legitimate differentiator to pitch to sellers."],
            ["Permanent capital advantage", "Sequence changes the integration timeline. Without a defined exit clock, we can work more flexibly with a seller's goals. Many M&A transactions are hamstrung by earn-out mechanics blocking systems integration."],
            ["Accretion economics", "A clean operating chassis changes the synergy math: acquired books can be migrated onto a single platform rather than run on separate systems indefinitely. Synergy value from migrating onto a structurally higher margin platform creates ability to pay competitive multiples."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-sm font-semibold text-white/80 mb-1">{title}</div>
              <div className="text-sm text-white/45 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Lever 5 · Vertical integration">
        <div className="text-xs font-semibold tracking-wider text-emerald-400/50 uppercase mb-3">+10–15 points of revenue uplift on underwritten premium</div>

        <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/6 mb-5">
          <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Insurance value chain — capture zone</div>
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {[
              { label: "Insured", pct: null, color: "bg-white/10" },
              { label: "Retail Broker", pct: "~11–12%", color: "bg-blue-500/20 border border-blue-500/30" },
              { label: "Wholesale Broker", pct: "~10–15%", color: "bg-purple-500/15 border border-purple-500/25" },
              { label: "MGA", pct: "~15–25%", color: "bg-emerald-500/15 border border-emerald-500/25" },
              { label: "Carrier", pct: "balance", color: "bg-white/8" },
            ].map(({ label, pct, color }, i) => (
              <div key={label} className="flex items-center gap-1 flex-shrink-0">
                {i > 0 && <span className="text-white/20 text-lg">▶</span>}
                <div className={`rounded-xl px-3 py-2.5 text-center ${color}`}>
                  <div className="text-xs font-semibold text-white/80">{label}</div>
                  {pct && <div className="text-xs text-emerald-400/70 mt-0.5 font-bold">{pct}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2.5 text-xs text-emerald-400/70 text-center font-semibold">
            VALUE-CHAIN CAPTURE ZONE → spread we attack when distribution is captive
          </div>
        </div>

        <Card accent="green" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The math</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Wholesale/MGA structures create ~28–30% commissions (~11–12% of which pass through to the retail broker). When a single platform controls both distribution <em>and</em> underwriting, it captures meaningfully higher revenue on the same premium dollar — a ~10–15pt revenue uplift with no balance-sheet risk through modern fronting structures.
          </p>
        </Card>
        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-2">Three conditions required</div>
          {[
            ["Proprietary distribution", "So the MGA isn't competing for the same business through other channels"],
            ["Proprietary loss data", "So pricing has an edge vs. outside carriers"],
            ["Underwriting discipline", "So the platform doesn't end up holding adverse risk"],
          ].map(([title, body]) => (
            <div key={title as string} className="flex gap-3 bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <span className="flex-shrink-0 text-emerald-400/60 font-bold text-sm">✓</span>
              <div>
                <span className="text-sm font-semibold text-white/80">{title}: </span>
                <span className="text-sm text-white/45">{body}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/[0.02] rounded-xl p-4 border border-white/5">
          <div className="text-xs font-semibold text-white/35 uppercase tracking-wider mb-2">Sequencing matters</div>
          <div className="space-y-1.5 text-sm text-white/50">
            <div>Captive MGA on specialty lines once the data exists</div>
            <div>Specialty program / MGU once underwriting maturity exists</div>
            <div>Balance-sheet participation only when loss experience supports it</div>
          </div>
        </div>
      </Section>

      <Section title="Entry strategy options">
        <div className="space-y-3">
          {[
            {
              title: "Minority stake → majority (preferred)",
              body: "BHMS/KRP prototype. $100M minority structure, build-to-majority. Lets Sequence establish credibility before taking control. Reduces completion risk. Can replicate at Inszone, Patriot, others.",
              accent: "green" as const,
            },
            {
              title: "Family-transition acquisition",
              body: "Founder in 80s, no succession — Cottingham & Butler archetype. No competitive bid. Sequence's AI-native pitch wins on differentiation, not multiple. Cleanest entry when the situation is right.",
              accent: "green" as const,
            },
            {
              title: "Partner with PE platform mid-hold",
              body: "2 years into PE hold period, worried about AI risk — take some chips off the table, co-own, solve their AI problem. Steps Sequence into something bigger than independently-owned targets allow.",
              accent: "green" as const,
            },
            {
              title: "Public-to-private",
              body: "Baldwin at ~10–12x EBITDA, multi-year-low multiples + AI-disruption fears. Clean case but larger equity check ($3–6B). Permanent capital structure makes this feasible where PE buyers can't justify the size.",
              accent: "green" as const,
            },
          ].map(({ title, body, accent }) => (
            <Card key={title} accent={accent}>
              <div className="text-sm font-semibold text-white/90 mb-1.5">{title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Near-term entry opportunities">
        <div className="space-y-2">
          {[
            { name: "King Risk Partners (KRP)", detail: "BHMS/Lightyear; ~$45M EBITDA mid-market retail; Lightyear exit window Feb 2028; minority 'build-to-majority' $100M structure available sooner" },
            { name: "Inszone", detail: "BHMS/Lightyear; ~$140M EBITDA diversified; 'possibly earlier exit' than KRP" },
            { name: "Hilb Group", detail: "Carlyle hold reaching ~7 years; coming to market 'in short order' per Reagan Q1 2026" },
            { name: "Baldwin Group", detail: "Public; stock significantly down YTD; ~10x EBITDA take-private window opening" },
          ].map(({ name, detail }) => (
            <div key={name} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-sm font-semibold text-white/85 mb-1">{name}</div>
              <div className="text-sm text-white/45 leading-relaxed">{detail}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
