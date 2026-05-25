import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ValueCreationPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 5 · Finance"
        title="Value Creation"
        description="How Sequence Refounds an insurance brokerage — the P&L bridge, the AI operating model, producer productivity plan, and the path to a $1B EBITDA business."
      />

      <Section title="The P&L structure">
        <Card accent="blue" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-3">Every dollar of revenue</div>
          <div className="space-y-2">
            {[
              { label: "Producers (untouchable)", pct: "~33¢", color: "bg-red-500/20 border-red-500/30", note: "Non-negotiable — this is the relationship layer" },
              { label: "Middle/back office (target)", pct: "~33¢", color: "bg-amber-500/20 border-amber-500/30", note: "Admin layer — the AI automation target" },
              { label: "EBITDA margin", pct: "~33¢", color: "bg-emerald-500/20 border-emerald-500/30", note: "Current state; could expand 10–15 pts with AI" },
            ].map(({ label, pct, color, note }) => (
              <div key={label} className={`rounded-xl p-4 border ${color}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white/85">{label}</span>
                  <span className="text-xl font-bold text-white">{pct}</span>
                </div>
                <div className="text-xs text-white/40">{note}</div>
              </div>
            ))}
          </div>
        </Card>
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Employee cost structure</div>
          <div className="space-y-1.5 text-sm text-white/55">
            <div>Broker employee costs typically 45–55% of total expenses</div>
            <div>With AI-driven efficiency: 55% → 50% in year 1, 45% by year 3–4, potentially 30–35% by year 10</div>
            <div>Comparable to BankSouth: 40% of non-interest expenses are people costs, target 20% with AI</div>
          </div>
        </div>
      </Section>

      <Section title="The margin bridge">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { value: "~30%", label: "Current EBITDA margin", sub: "Private independents (22–23% in soft cycle)" },
            { value: "10–15pts", label: "Available from automation", sub: "Middle/back-office AI replacement" },
            { value: "~40–45%", label: "Target EBITDA margin", sub: "Post-Refounding steady state" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6 text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
              <div className="text-xs text-white/30 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-2">Where the 10–15 points come from</div>
          {[
            ["COI automation", "Certificates of insurance — highest volume, fully automatable. ~20–25% of all back-office transactions."],
            ["Endorsement processing", "Policy changes (endorsements) — currently email-driven, multi-step AE workflows. Full agentic replacement."],
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

      <Section title="Producer productivity plan">
        <Card accent="purple" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">Redeploy savings into producer comp and enablement</div>
          <p className="text-sm text-white/60 leading-relaxed">
            The thesis is not just to capture the margin — it&apos;s to <strong className="text-white/80">redeploy savings into producer comp 20–40% above competitors and into producer enablement tools</strong>. Creates a talent magnet for high-volume producers and organic growth flywheel. Also redeploy into automated bidding, client presentations, lead gen to increase production per agent.
          </p>
        </Card>

        <div className="space-y-2">
          {[
            {
              title: "Sterling AE benchmark → target",
              body: "Account executive productivity today: ~$1.3–1.4M revenue/AE. Expectation post-AI: ~$2M per AE. Explicit metric: revenue per employee, not headcount.",
              accent: "purple" as const,
            },
            {
              title: "Cross-sell / pip count program",
              body: "Getting pip count from 1.7 to 2.5 could yield ~20% revenue lift on the existing book. AI-driven continuous coverage-gap diagnostics at renewal enables this at scale.",
              accent: "purple" as const,
            },
            {
              title: "SMB as producer training ground",
              body: "Front-load comp (100% in year 1, paid over 2 years, nothing on renewal). Hire technology-fluent talent from outside industry. Target $2K–$50K revenue segment with consumer-app-grade service. Graduate to mid-market.",
              accent: "purple" as const,
            },
          ].map(({ title, body, accent }) => (
            <Card key={title} accent={accent}>
              <div className="text-sm font-semibold text-white/90 mb-1.5">{title}</div>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="The organic growth flywheel">
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/6">
          <div className="flex flex-col gap-3">
            {[
              { step: "1", text: "Automate admin layer (COIs, endorsements, document review, renewal workflows)", color: "bg-blue-500/20 border-blue-500/30" },
              { step: "2", text: "Save 10–15 margin points from middle/back-office headcount reduction", color: "bg-blue-500/15 border-blue-500/25" },
              { step: "3", text: "Redeploy savings into producer comp (20–40% above market) and AI enablement tools", color: "bg-purple-500/15 border-purple-500/25" },
              { step: "4", text: "Attract highest-volume producers from competitors — talent magnet", color: "bg-purple-500/20 border-purple-500/30" },
              { step: "5", text: "Higher producer output × AI cross-sell tools → pip count grows from 1.7 → 2.5+", color: "bg-emerald-500/15 border-emerald-500/25" },
              { step: "6", text: "Retention improves from ~85% to ~93–95%, creating compounding revenue base", color: "bg-emerald-500/20 border-emerald-500/30" },
              { step: "7", text: "Scale creates carrier contingent leverage → more margin to redeploy → back to step 3", color: "bg-amber-500/15 border-amber-500/25" },
            ].map(({ step, text, color }) => (
              <div key={step} className={`flex items-start gap-4 rounded-xl p-4 border ${color}`}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">{step}</span>
                <span className="text-sm text-white/70 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="The Aya Healthcare analogy (risk mitigation)">
        <Card accent="amber">
          <div className="text-sm font-semibold text-white/90 mb-2">Risk: paying producers more could trigger industry race to the bottom</div>
          <p className="text-sm text-white/60 leading-relaxed mb-3">
            Counter: being the cost-advantaged player means you emerge the winner even if industry margins compress.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white/80">Aya Healthcare analogy:</strong> took margins down ~1,000 bps during Covid, stole share, built an $8B revenue platform from nothing. The cost-advantaged player wins the margin war. Sequence&apos;s AI-driven cost structure means we can sustain higher producer comp indefinitely while competitors operating on legacy cost structures cannot.
          </p>
        </Card>
      </Section>

      <Section title="The path to $1B EBITDA">
        <Card accent="indigo" className="mb-4">
          <div className="text-xs font-semibold text-indigo-400/70 uppercase tracking-wider mb-3">Dream the dream</div>
          <p className="text-sm text-white/60 leading-relaxed mb-3">
            PE track record: Amwins grew from $200M to $1.2–1.3B EBITDA (~50x return). The thesis: find distribution platforms, professionalize operations, grow through acquisition + organic. Sequence adds the AI-native operating layer as the differentiator.
          </p>
          <div className="space-y-2 text-sm text-white/55">
            <div><strong className="text-white/75">Entry:</strong> $50–200M revenue independent or continuation vehicle (minority stake → majority)</div>
            <div><strong className="text-white/75">Refound:</strong> Deploy Atlas ontology + agent workflows. 10–15 pts margin expansion year 1–3.</div>
            <div><strong className="text-white/75">Compound:</strong> Tuck-in acquisitions using AI integration tooling as M&A edge. Each add-on integrates faster than competitors.</div>
            <div><strong className="text-white/75">Scale:</strong> Carrier contingent leverage grows with premium volume. Talent magnet grows producer ranks. Pip count program grows existing book.</div>
            <div><strong className="text-white/75">Exit window:</strong> 2030–2034 hard-market rate cycle + Refounded operating model = multiple expansion + operating improvement = asymmetric Sequence return.</div>
          </div>
        </Card>

        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-2">Specific near-term entry opportunities</div>
          {[
            { name: "King Risk Partners (KRP)", detail: "BHMS/Lightyear; ~$45M EBITDA; Lightyear exit window Feb 2028; minority 'build-to-majority' $100M structure available sooner (Kevin Angelis flagged)" },
            { name: "Inszone", detail: "BHMS/Lightyear; ~$140M EBITDA; 'possibly earlier exit' than KRP" },
            { name: "Hilb Group", detail: "Carlyle hold reaching ~7 years; coming to market 'in short order' per Reagan Q1 2026" },
            { name: "Baldwin Group", detail: "Public; $5–6B equity check to take private (down to $3–4B with rolls); stock at $20.18, significantly down YTD = take-private window more open" },
          ].map(({ name, detail }) => (
            <div key={name} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-sm font-semibold text-white/85 mb-1">{name}</div>
              <div className="text-sm text-white/45 leading-relaxed">{detail}</div>
            </div>
          ))}
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
              body: "Baldwin at ~12x EBITDA, 10-year-low multiples + AI-disruption fears + activist pressure. Clean case but larger equity check ($3–6B). Permanent capital structure makes this feasible where PE buyers can't justify the size.",
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
    </div>
  );
}
