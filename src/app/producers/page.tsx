import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function ProducersPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 3 · Operations"
        title="Producer Economics"
        description="Producers are the most powerful people in any brokerage — often more powerful than management. Understanding their power dynamics, comp structures, and departure risk is table stakes for any acquisition."
      />

      <Section title="Producer power dynamics">
        <Card accent="amber" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            Salespeople (producers) are often <strong className="text-white/90">more powerful than management</strong> — the inverse of most company structures. Key producers control client relationships. In a typical $150–200M agency, roughly <strong className="text-white/90">5 equity-partner producers drive the entire business</strong>. They are relationship owners; account executives and service teams run the workflow.
          </p>
        </Card>
        <div className="space-y-2">
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
            <div className="text-sm font-semibold text-white/85 mb-1.5">ABD example</div>
            <p className="text-sm text-white/50 leading-relaxed">Single top producer at a $120M brokerage controlled $8M direct revenue + $25–30M through his team via &ldquo;golf buddy networks.&rdquo; Concentration risk in a single relationship.</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
            <div className="text-sm font-semibold text-white/85 mb-1.5">Win the AE, win the producer</div>
            <p className="text-sm text-white/50 leading-relaxed">Producers are relationship owners, not day-to-day salespeople — the day-to-day transactional business with the customer happens with the AE. The right AI rollout sequence: land with account executives first. Producers follow because their books get serviced better.</p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
            <div className="text-sm font-semibold text-white/85 mb-1.5">Producer bluster vs. reality</div>
            <p className="text-sm text-white/50 leading-relaxed">Producers threaten to walk because of the brand they work under, but the contractual structure is the real constraint. Don&apos;t price producer flight risk on tone of voice; <strong className="text-white/70">price it on contract terms.</strong></p>
          </div>
        </div>
      </Section>

      <Section title="Operator benchmarking">
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Selected operator profiles (as of May 2026)</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Operator</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Book Mix</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">New Biz %</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Renewal %</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">EBITDA Margin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Leavitt Group", "50% comm P&C / 25% personal / 25% EB", "40–50%", "20–25%", "~33% (22% + 11pts profit share)"],
                ["Sterling Seacrest (SSP)", "70% commercial / 23% EB / 7% private client", "35% (37.5% effective w/ bonus)", "35%", "~22–25% implied"],
                ["CAC / Cobbs Allen", "Mining, RE, oil & gas, power, healthcare, structured credit", "N/A", "N/A", "30–35%; thesis 55% with AI"],
                ["Newfront (pre-WTW)", "Diversified retail; ABD core book", "N/A", "N/A", "N/A"],
                ["KRP (BHMS)", "Mid-market retail", "N/A", "N/A", "~$45M EBITDA"],
                ["Inszone (BHMS)", "Diversified", "N/A", "N/A", "~$140M EBITDA"],
              ].map(([op, mix, nb, ren, ebitda]) => (
                <tr key={op as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white/80 font-medium text-sm">{op}</td>
                  <td className="py-3 pr-4 text-white/45 text-xs">{mix}</td>
                  <td className="py-3 pr-4 text-white/60 text-xs">{nb}</td>
                  <td className="py-3 pr-4 text-white/60 text-xs">{ren}</td>
                  <td className="py-3 text-emerald-400/70 text-xs font-semibold">{ebitda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Compensation structures">
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { value: "40–50%", label: "New business commission", sub: "Producer cut on new placements" },
            { value: "20–25%", label: "Renewal commission", sub: "Producer cut on renewals" },
            { value: "~30–35%", label: "Blended avg producer comp", sub: "Incl. benefits loaded in" },
            { value: "~60%+", label: "Total comp load", sub: "Producer + service-side salaries" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
              <div className="text-xs text-white/30 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Card accent="indigo">
            <div className="text-sm font-semibold text-white/90 mb-2">Leavitt Group (Top-25 Broker) P&amp;L reference</div>
            <div className="space-y-1.5 text-sm text-white/55">
              <div>All-in EBITDA margin ~33% (~22% before profit sharing; profit sharing ~11% of regular commission revenue)</div>
              <div>Direct commission: 14–15% avg + 2–3 pts profit share from carrier</div>
              <div>Producer comp: 40–50% new biz, 20–25% renewal. Weighted avg ≈ 32–34% with benefits</div>
              <div>Service-side salaries another ~30% → total comp load ~60%+ of revenue</div>
              <div>Occupancy ~6 points; salary loads add ~6–7 points</div>
              <div className="pt-1 text-white/40 text-xs italic">Sales-culture agencies (~80% commissionable revenue, 22–30% EBITDA) vs. down-office agencies (~0% commissionable, 45% EBITDA but 3–4% growth)</div>
            </div>
          </Card>

          <Card accent="indigo">
            <div className="text-sm font-semibold text-white/90 mb-2">Sterling Seacrest Pritchard (45th-largest US broker) reference</div>
            <div className="space-y-1.5 text-sm text-white/55">
              <div>$130M revenue; 70% commercial / 23% EB / 7% private client; fully independent, no debt</div>
              <div>Producer comp: 35% straight + growth bonus → ~37.5% all-in; shareholders also receive distributions</div>
              <div>AE productivity today: ~$1.3–1.4M revenue/AE; expectation post-AI: ~$2M per AE</div>
              <div>Revenue per employee (not headcount) is the explicit metric being optimized</div>
              <div>Equity moat: partners buy in over time, bought out 1/5/yr starting at age 63 — a 5-pt comp bump won&apos;t move anyone, only generational wealth via equity</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Departure risk & book portability">
        <Card accent="red" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The single most important pre-acquisition diligence item</div>
          <p className="text-sm text-white/60 leading-relaxed mb-3">
            <strong className="text-white/85">House-vs-producer book ownership</strong> — &ldquo;Does the house own the book or does the producer own the book? If the producer owns the book, you got a problem.&rdquo; Producer-owned books are portable and sue-prone; house-owned books survive transitions.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Post-FTC non-compete changes mean a producer&apos;s book is materially more portable. Our platform toolkit can support more accretion at lower recovery ratios and drive higher recoveries vs. other platforms.
          </p>
        </Card>
        <div className="space-y-2">
          {[
            { label: "Book transfer rate", text: "Only ~half of a producer's book transfers when they switch firms, over a 12–20 month period. Best-in-class recruiting with tooling can improve this." },
            { label: "Non-compete enforceability", text: "Varies by state — some states allow producers to take clients with them. Varies dramatically by jurisdiction. Diligence carefully." },
            { label: "Departure litigation tax", text: "'Every time somebody leaves one broker and goes to another, everybody sues everybody. It's pretty bizarre how much money they're wasting on that.' Budget for litigation friction on every acquisition." },
            { label: "Lift-out playbook", text: "Ask producers to honor 2-year covenants; expect ~1/3 of book at year zero, another ~1/3 over time — total recovery near half the original book in 3 years. Our tools can improve these numbers." },
          ].map(({ label, text }) => (
            <div key={label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-xs font-semibold text-red-400/70 mb-1">{label}</div>
              <p className="text-sm text-white/50 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Book retention & the pip count lever">
        <Card accent="green" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">Pip count is the single biggest organic growth lever</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Average pip count (policies per insured) across a broker&apos;s book is typically ~1.7; best-in-class is 2.5+. Getting pip count from 1.7 to 2.5 could yield <strong className="text-white/80">~20% revenue lift on the existing book</strong> — without acquiring a single new client. Every incremental cross-sold policy drives both revenue and retention, compounding customer LTV.
          </p>
        </Card>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-8 text-xs text-white/35 font-medium">Pip count</th>
                <th className="text-left py-2 pr-8 text-xs text-white/35 font-medium">Retention rate</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Implication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["1 policy", "Low-80s%", "High churn — client has no stickiness"],
                ["2 policies", "Low-90s%", "Meaningful improvement"],
                ["3+ policies", "96–98%", "Effectively locked in"],
                ["Industry avg (1.7)", "~85%", "Current baseline"],
                ["Best-in-class (2.5+)", "~93–95%", "Target state with AI cross-sell"],
              ].map(([pip, ret, impl]) => (
                <tr key={pip as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-2.5 pr-8 text-white/80 font-medium">{pip}</td>
                  <td className="py-2.5 pr-8 text-white/60">{ret}</td>
                  <td className="py-2.5 text-white/40">{impl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card accent="blue">
          <div className="text-sm font-semibold text-white/90 mb-2">How to close the PIF gap</div>
          <p className="text-sm text-white/60 leading-relaxed">
            The gap persists not from lack of intent — cross-sell requires specialist coverage at the moment of conversation. Most producers can&apos;t carry the full product shelf in their heads. <strong className="text-white/80">AI agents can surface cross-sell opportunities at the point of contact</strong> and provide the expertise to guide a client through the risk management thesis of putting new coverage in place.
          </p>
        </Card>
      </Section>

      <Section title="Talent recruitment & organic growth">
        <div className="space-y-3">
          <Card accent="blue">
            <div className="text-sm font-semibold text-white/90 mb-2">Build the better mousetrap: train from outside the industry</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Individual broker recruitment is limited and expensive. Budget $750K for a recruited producer, get $550K when they promised $1M. Better strategy: build a more efficient training program, bring people in from outside the industry with AI-powered tools. In SMB business, bring in new hires, give them tools, let them run.
            </p>
            <div className="mt-3 pt-3 border-t border-white/8">
              <div className="text-xs text-white/35">Compensation arms race is a race to the bottom — adverse selection risk when overpaying for recruited producers. Only necessary if you don&apos;t have a better mousetrap.</div>
            </div>
          </Card>

          <Card accent="blue">
            <div className="text-sm font-semibold text-white/90 mb-2">Front-loaded SMB comp model</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Pay a producer 100% commission in year 1 (paid out over 2 years), then nothing on renewal. Turns SMB into a producer training ground rather than an annuity, and removes the &ldquo;25–30% perpetual trail&rdquo; that locks book economics. Pairs with AI-powered tooling targeting the $2K–$50K annual revenue segment with consumer-app-grade service.
            </p>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-white/90 mb-2">Organic growth ceiling</div>
            <div className="space-y-1 text-sm text-white/50">
              <div>Insurance is a GDP product — organic growth pricing/market neutral is ~4%</div>
              <div>Best-in-class brokers like IMA do ~15% organic (includes rate benefit)</div>
              <div>Organic alone is insufficient for scale — M&A is the scaling engine</div>
              <div>Established producers &ldquo;living off rate and retention for years&rdquo; are extremely resistant to tool change; new tech adoption comes almost entirely from new producers</div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
