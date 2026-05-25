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
            <div className="text-sm font-semibold text-white/85 mb-1.5">Win the AE, win the producer (Chris Gagnon, 5/20)</div>
            <p className="text-sm text-white/50 leading-relaxed">Producers are relationship owners, not day-to-day salespeople — &ldquo;the day to day transactional business with that customer is happening with the AE.&rdquo; The right AI rollout sequence: land with account executives first. Producers follow because their books get serviced better. <em>&ldquo;You used to do 40 steps for 40 customers before lunch. Now you&apos;re going to do one step for 40 customers before your second cup of coffee.&rdquo;</em></p>
          </div>
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
            <div className="text-sm font-semibold text-white/85 mb-1.5">Producer bluster vs. reality</div>
            <p className="text-sm text-white/50 leading-relaxed">Producers threaten to walk because of the brand they work under, but the contractual structure is the real constraint. Don&apos;t price producer flight risk on tone of voice; <strong className="text-white/70">price it on contract terms.</strong></p>
          </div>
        </div>
      </Section>

      <Section title="Departure risk & book portability">
        <Card accent="red" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The single most important pre-acquisition diligence item</div>
          <p className="text-sm text-white/60 leading-relaxed mb-3">
            <strong className="text-white/85">House-vs-producer book ownership</strong> — &ldquo;Does the house own the book or does the producer own the book? If the producer owns the book, you got a problem.&rdquo; Producer-owned books are portable and sue-prone; house-owned books survive transitions.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Diligence implication: track contingent + profit-share concentration alongside book concentration. When a producer leaves, you don&apos;t only lose direct commission revenue — you also degrade the contingent and profit-share pools.
          </p>
        </Card>
        <div className="space-y-2">
          {[
            { label: "ABD-Newfront merger", text: "Producers left before the deal closed by taking deal sheets to competitors (Aon, Marsh) who matched terms. Earnouts and favorable deal terms don't fully prevent departures." },
            { label: "Book transfer rate", text: "Only ~60% of a producer's book transfers when they switch firms, over a 12–20 month period." },
            { label: "Non-compete enforceability", text: "Varies by state — some states allow producers to take clients with them. This varies dramatically by jurisdiction." },
            { label: "Departure litigation tax", text: "'Every time somebody leaves one broker and goes to another, everybody sues everybody. It's pretty bizarre how much money they're wasting on that.' — Chris Gagnon. Budget for litigation friction on every acquisition." },
            { label: "Lift-out playbook (Sterling)", text: "Ask producers to honor 2-year covenants; expect ~1/3 of book at year zero, another ~1/3 over time as the producer hunts back — total recovery near half the original book in 3 years." },
          ].map(({ label, text }) => (
            <div key={label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-xs font-semibold text-red-400/70 mb-1">{label}</div>
              <p className="text-sm text-white/50 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Compensation structures">
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { value: "40–50%", label: "New business commission", sub: "Producer cut on new placements" },
            { value: "20–25%", label: "Renewal commission", sub: "Producer cut on renewals" },
            { value: "~32–34%", label: "Weighted avg producer comp", sub: "Including benefits loaded in" },
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
            <div className="text-sm font-semibold text-white/90 mb-2">Leavitt Group (Top-25 Broker) P&L reference</div>
            <div className="space-y-1.5 text-sm text-white/55">
              <div>All-in EBITDA margin ~30%, ~22% before profit sharing (profit sharing ~11% of regular commission revenue)</div>
              <div>Producer commissions: 40–50% on new business, 20–25% on renewal. Weighted average ≈ 32–34% with benefits</div>
              <div>Service-side salaries another ~30% on top of producer comp → total comp load ~60%+ of revenue</div>
              <div>Occupancy ~6 points; salary loads add ~6–7 points</div>
              <div className="pt-1 text-white/40 text-xs italic">Important nuance: sales-culture agencies (~80% commissionable revenue, 22–30% EBITDA) vs. down-office agencies (~0% commissionable, 45% EBITDA but 3–4% growth)</div>
            </div>
          </Card>

          <Card accent="indigo">
            <div className="text-sm font-semibold text-white/90 mb-2">Sterling Seacrest Pritchard (45th-largest US broker) reference</div>
            <div className="space-y-1.5 text-sm text-white/55">
              <div>$130M revenue, 62 partners, 400 employees, fully independent, no debt; 70% commercial / 23% EB / 7% private client</div>
              <div>Producer comp: 35% straight commission + growth bonus → ~37.5% all-in; shareholders also receive distributions on top</div>
              <div>AE productivity today: ~$1.3–1.4M revenue/AE; expectation post-AI: ~$2M per AE</div>
              <div>Revenue per employee (not headcount) is the explicit metric they&apos;re optimizing</div>
              <div>Equity moat: partners buy in over time, bought out 1/5 per year starting at age 63, internal valuation grows ~20%/yr — a 5-point commission bump won&apos;t move anyone, only generational wealth via equity will</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Book retention & the pip count lever">
        <Card accent="green" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">Pip count is the single biggest organic growth lever</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Average pip count (policies per insured) across a broker&apos;s book is typically ~1.7; best-in-class is 2.5+. Getting pip count from 1.7 to 2.5 could yield <strong className="text-white/80">~20% revenue lift on the existing book</strong> — without acquiring a single new client.
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
                ["1 policy", "Mid-to-low 80s%", "High churn — client has no stickiness"],
                ["2 policies", "Approaching 90%", "Meaningful improvement"],
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
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Commercial pip count reference</div>
          <p className="text-sm text-white/50 leading-relaxed">On the commercial side, at least 6 active policies should be in play for any reasonably sized business. If a commercial client has fewer than 6, there are cross-sell opportunities at renewal.</p>
        </div>
      </Section>

      <Section title="Recruitment & organic growth constraints">
        <div className="space-y-3">
          <Card accent="blue">
            <div className="text-sm font-semibold text-white/90 mb-2">The better mousetrap: train from outside the industry</div>
            <p className="text-sm text-white/55 leading-relaxed">
              Individual broker recruitment is limited and expensive. Budget $750K for a recruited producer, get $550K when they promised $1M. Better strategy: build a more efficient training program, bring people in from outside the industry with AI-powered tools. In SMB business, bring in new hires, give them tools, let them run.
            </p>
            <div className="mt-3 pt-3 border-t border-white/8">
              <div className="text-xs text-white/35">Compensation arms race is a race to the bottom — adverse selection risk when overpaying for recruited producers. Alliant (IMA) hires en masse, but creates multi-year litigation. Only necessary if you don&apos;t have a better mousetrap.</div>
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
              <div>Organic alone is insufficient for scale — Newfront grew to $20M ARR organically but needed ABD merger to reach $120–140M</div>
              <div>Cold-call success rate: ~1 in 40 a few years ago → ~1 in 100+ today as decision-makers stop answering phones</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Middle-market organic growth slowdown (2025–2026)">
        <Card accent="amber">
          <div className="space-y-2 text-sm text-white/60 leading-relaxed">
            <div>Established producers <em>&ldquo;living off rate and retention for years&rdquo;</em> are extremely resistant to tool change; new tech adoption comes almost entirely from new producers (Heffernan operator data, 5/12/26)</div>
            <div>Heffernan&apos;s Future Top Producer Program runs annual classes of 12–15 producers — this cohort is where new AI workflows get adoption first</div>
            <div>Family-office/HNW is a particularly referral-heavy producer book — wealthy clients introduce other wealthy clients to the same producer</div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
