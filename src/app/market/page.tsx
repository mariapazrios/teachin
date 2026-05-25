import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function MarketPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 2 · Market"
        title="Market Dynamics"
        description="The current state of the insurance industry — a defensive ~$2T US market, the P&C value chain, soft market conditions, public broker multiple compression, and the structural buy window."
      />

      <Section title="Insurance is a defensive ~$2T US market">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            P&C crossed <strong className="text-white/90">$1 trillion in direct premium</strong> for the first time in 2024. Total US direct premiums (P&C + L&H) have grown at a 5.6% CAGR from 2012–2024, accelerating to 7.7% CAGR 2019–2024. Insurance is a defensive, non-cyclical market — both P&C and L&H showed consistent positive growth through COVID-19.
          </p>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total CAGR 2012–2024", value: "5.6%" },
            { label: "Total CAGR 2019–2024", value: "7.7%" },
            { label: "P&C CAGR 2019–2024", value: "8.1%" },
            { label: "P&C crossed $1T in", value: "2024" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="P&C insurance value chain">
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">US profit pools and margins by sector</div>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Sector</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Est. US Profit Pool</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">EBITDA Margin</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Investment Thesis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Retail Broker", "~$22B", "~27–35%", "Trust moat is durable; commission economics stable for two decades; not likely displaced by AI"],
                ["Wholesale Broker", "~$3B", "~25–33%", "E&S is fastest-growing P&C sub-sector; individual broker-carrier relationships"],
                ["MGA", "~$5B", "~20–35%", "High-growth; carriers increasing reliance on MGAs; no balance-sheet risk"],
                ["Carrier", "~$80B", "~10–15%", "Regulatory licenses, permanent capital base, float income, data moat"],
                ["Reinsurer", "~$15B", "~10–14%", "Growing demand as primary capacity demand increases"],
              ].map(([sector, pool, margin, thesis]) => (
                <tr key={sector as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white/80 font-medium">{sector}</td>
                  <td className="py-3 pr-4 text-emerald-400/80 font-bold">{pool}</td>
                  <td className="py-3 pr-4 text-white/55">{margin}</td>
                  <td className="py-3 text-white/40 text-xs leading-relaxed">{thesis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card accent="green">
          <p className="text-sm text-white/65 leading-relaxed">
            <strong className="text-white/85">Retail broker is the target layer.</strong> The trust moat in owning last-mile distribution is empirically durable — broker relationships have proven sticky and are not likely displaced by AI. Commission economics have been stable for two decades. Personal lines face long-term disintermediation risk; commercial lines are more insulated as they are more bespoke.
          </p>
        </Card>
      </Section>

      <Section title="Broker commission: stable for two decades">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            Direct commissions as a % of net premium earned have remained remarkably stable. <strong className="text-white/90">Pricing stability demonstrates the power of owning last-mile distribution</strong> and reflects carriers&apos; core focus on maximizing volume (for float income) vs. optimizing renewal terms. Carriers will not compromise the broker channel to chase DTC volume — carrier direct-to-consumer runs 800–1,400 bps higher loss ratios than agent-bound business.
          </p>
        </Card>
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
          <div className="text-xs font-semibold text-white/35 uppercase tracking-wider mb-2">Defensibility vs. DTC</div>
          <div className="space-y-1.5 text-sm text-white/55">
            <div>Every major insuretech disintermediation attempt has failed because carrier profitability derives from premium float economics</div>
            <div>Disintermediating the broker risks a carrier&apos;s own volumes — not something any carrier will do willingly</div>
            <div>Defensibility holds firmly at mid-market+; weakens only at SME / personal lines where simpler products allow real DTC traction</div>
          </div>
        </div>
      </Section>

      <Section title="Soft market conditions (2024–2026)">
        <Card accent="amber" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            After a sustained hard market, conditions are softening. Both the Marsh and CIAB P/C rate indices are at or below zero. Over half of total commercial lines surveyed recorded decreases in Q4&apos;25 and Q1&apos;26. Slowing organic revenue growth is putting pressure on broker expense structures.
          </p>
        </Card>
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Average commercial premium increases by account size</div>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Quarter</th>
                <th className="text-right py-2 pr-4 text-xs text-white/35 font-medium">Small</th>
                <th className="text-right py-2 pr-4 text-xs text-white/35 font-medium">Medium</th>
                <th className="text-right py-2 pr-4 text-xs text-white/35 font-medium">Large</th>
                <th className="text-right py-2 text-xs text-white/35 font-medium">Avg.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Q4 2024", "+3.6%", "+6.4%", "+6.3%", "+5.4%"],
                ["Q1 2025", "+3.6%", "+3.7%", "+5.3%", "+4.2%"],
                ["Q2 2025", "+4.2%", "+4.0%", "+2.9%", "+3.7%"],
                ["Q3 2025", "+1.2%", "+1.9%", "+1.6%", "+1.6%"],
                ["Q4 2025", "+2.8%", "0.0%", "–2.1%", "+0.2%"],
              ].map(([qtr, small, med, large, avg]) => (
                <tr key={qtr as string} className={`hover:bg-white/[0.02] transition-colors ${qtr === "Q4 2025" ? "bg-amber-500/5" : ""}`}>
                  <td className="py-2.5 pr-4 text-white/70 text-xs">{qtr}</td>
                  <td className="py-2.5 pr-4 text-white/55 text-right">{small}</td>
                  <td className="py-2.5 pr-4 text-white/55 text-right">{med}</td>
                  <td className={`py-2.5 pr-4 text-right ${qtr === "Q4 2025" ? "text-red-400/80 font-semibold" : "text-white/55"}`}>{large}</td>
                  <td className={`py-2.5 text-right ${qtr === "Q4 2025" ? "text-amber-400/80 font-bold" : "text-white/60"}`}>{avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          {[
            ["Soft market headwind", "For the first time since Q3'17, average premium across all account sizes decreased — a clear sign of a softening market."],
            ["Contingent income masking", "A ~13% increase in Q1'26 contingent income supported a ~150bps contraction in core profitability. The mask is fading."],
            ["Personal lines repositioning", "Personal lines commissions compressed as direct writers scaled; standard agencies repositioning toward higher-margin commercial books and advisory services."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <span className="text-xs font-semibold text-amber-400/70">{title}: </span>
              <span className="text-xs text-white/50 leading-relaxed">{body}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Public broker multiple compression">
        <Card accent="red" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            Notwithstanding macro uncertainty, over the last twelve months the brokerage core set is <strong className="text-white/90">down ~43% on average</strong>. Public trading comps at ~10–13x NTM EBITDA, while precedent transactions have cleared ~15x median — creating a meaningful gap.
          </p>
        </Card>
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Public broker FV / NTM Adj. EBITDA multiples (data as of 5/11/2026)</div>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-3 text-xs text-white/35 font-medium">Broker</th>
                <th className="text-right py-2 pr-3 text-xs text-white/35 font-medium">2022 Avg</th>
                <th className="text-right py-2 pr-3 text-xs text-white/35 font-medium">2024 Avg</th>
                <th className="text-right py-2 pr-3 text-xs text-white/35 font-medium">1yr Ago</th>
                <th className="text-right py-2 pr-3 text-xs text-white/35 font-medium">Current</th>
                <th className="text-right py-2 text-xs text-white/35 font-medium">Δ 1yr</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Marsh & McLennan", "14.4x", "14.6x", "15.3x", "11.7x", "–3.6x"],
                ["Arthur J. Gallagher", "15.2x", "17.3x", "19.3x", "11.1x", "–8.2x"],
                ["Aon", "17.2x", "15.8x", "15.8x", "12.8x", "–3.0x"],
                ["Brown & Brown", "16.0x", "17.8x", "18.8x", "10.1x", "–8.7x"],
                ["WTW", "11.1x", "11.9x", "12.9x", "9.5x", "–3.4x"],
                ["The Baldwin Group", "18.4x", "16.0x", "16.6x", "10.9x", "–5.7x"],
                ["Ryan Specialty", "20.8x", "20.3x", "20.8x", "12.4x", "–8.4x"],
                ["Median", "16.0x", "16.0x", "16.6x", "11.1x", "–5.5x"],
              ].map(([broker, avg22, avg24, yr1, curr, delta]) => (
                <tr key={broker as string} className={`hover:bg-white/[0.02] transition-colors ${broker === "Median" ? "border-t border-white/10 bg-white/[0.02]" : ""}`}>
                  <td className="py-2.5 pr-3 text-white/80 font-medium text-sm">{broker}</td>
                  <td className="py-2.5 pr-3 text-white/35 text-right text-xs">{avg22}</td>
                  <td className="py-2.5 pr-3 text-white/45 text-right text-xs">{avg24}</td>
                  <td className="py-2.5 pr-3 text-white/55 text-right text-xs">{yr1}</td>
                  <td className="py-2.5 pr-3 text-emerald-400/80 font-bold text-right text-xs">{curr}</td>
                  <td className="py-2.5 text-red-400/70 text-right text-xs font-semibold">{delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Precedent M&A transactions">
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Selected transactions · public trading at ~10–13x vs. transactions clearing ~15x median</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-3 text-xs text-white/35 font-medium">Date</th>
                <th className="text-left py-2 pr-3 text-xs text-white/35 font-medium">Acquiror</th>
                <th className="text-left py-2 pr-3 text-xs text-white/35 font-medium">Target</th>
                <th className="text-right py-2 pr-3 text-xs text-white/35 font-medium">EV ($M)</th>
                <th className="text-right py-2 text-xs text-white/35 font-medium">x EBITDA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Jun-25", "Brown & Brown", "RSC / Accession", "$9,825M", "15.6x"],
                ["Mar-25", "Arthur J. Gallagher", "Woodruff-Sawyer", "$1,200M", "13.6x"],
                ["Dec-24", "Arthur J. Gallagher", "AssuredPartners", "$13,450M", "12.5x"],
                ["Feb-24", "Investor Group", "Truist Insurance Hldgs", "$12,600M", "18.0x"],
                ["Dec-23", "Aon", "NFP", "$12,868M", "15.0x"],
                ["Apr-23", "Leonard Green", "Hub International", "$23,000M", "15.6x"],
                ["Feb-23", "Stone Point Capital", "Truist Insurance Hldgs", "$14,750M", "17.2x"],
                ["Dec-22", "Warburg Pincus", "K2 Insurance Services", "$1,250M", "17.6x"],
                ["Oct-19", "Carlyle", "Hilb Group", "$1,000M", "13.3x"],
                ["Feb-19", "GTCR", "AssuredPartners", "$5,120M", "13.7x"],
                ["Jan-19", "PSP Investments", "Alliant Insurance Svcs", "N/A", "13.0x"],
                ["Dec-18", "Blackstone / Partners", "Acrisure", "N/A", "13.0x"],
              ].map(([date, acq, target, ev, mult]) => (
                <tr key={target as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-2.5 pr-3 text-white/40 text-xs">{date}</td>
                  <td className="py-2.5 pr-3 text-white/60 text-xs">{acq}</td>
                  <td className="py-2.5 pr-3 text-white/80 font-medium text-sm">{target}</td>
                  <td className="py-2.5 pr-3 text-white/55 text-right text-xs">{ev}</td>
                  <td className="py-2.5 text-white/70 text-right font-bold text-sm">{mult}</td>
                </tr>
              ))}
              <tr className="bg-white/[0.03] border-t border-white/10">
                <td colSpan={4} className="py-2.5 pr-3 text-white/40 text-xs font-semibold uppercase tracking-wider">Median</td>
                <td className="py-2.5 text-amber-400/80 text-right font-bold">15.0x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Market fragmentation">
        <Card accent="purple" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            Despite <strong className="text-white/90">30+ years of compounding consolidation</strong>, the retail broker market remains highly fragmented. The long tail of sub-scale agencies (~$1–10M revenue) lacks capital to invest in AI infrastructure, extending the M&A runway. Insurance distribution continues to be an attractive space for private capital.
          </p>
        </Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Revenue Band</th>
                <th className="text-right py-2 pr-4 text-xs text-white/35 font-medium"># Firms</th>
                <th className="text-right py-2 pr-4 text-xs text-white/35 font-medium">% of Firms</th>
                <th className="text-right py-2 text-xs text-white/35 font-medium">Est. % Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["$100M+", "76", "0.3%", "~55–65%"],
                ["$10–100M", "861", "3.1%", "~20–25%"],
                ["$5–10M", "1,947", "7.1%", "~5–8%"],
                ["$2.5–5M", "2,470", "9.0%", "~3–5%"],
                ["$1.25–2.5M", "2,610", "9.5%", "~2–3%"],
                ["$0.5–1.25M", "3,832", "13.9%", "~1–2%"],
                ["Under $0.5M", "15,675", "57.1%", "~2–3%"],
                ["Total", "27,471", "100%", "100%"],
              ].map(([band, firms, pctFirms, pctRev]) => (
                <tr key={band as string} className={`hover:bg-white/[0.02] transition-colors ${band === "Total" ? "bg-white/[0.02] font-semibold" : ""}`}>
                  <td className="py-2.5 pr-4 text-white/80 text-sm">{band}</td>
                  <td className="py-2.5 pr-4 text-white/60 text-right">{firms}</td>
                  <td className="py-2.5 pr-4 text-white/45 text-right text-xs">{pctFirms}</td>
                  <td className="py-2.5 text-emerald-400/70 text-right text-xs">{pctRev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs text-white/35 text-center">Source: MarshBerry, Reagan Quarterly Market Update (Winter 2025)</div>
      </Section>

      <Section title="The PE forced-sale window (2026–2028)">
        <Card accent="red" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed mb-3">
            The 2018–2021 PE vintage created the biggest platform cohort in brokerage history. Those platforms are now hitting 5–7 year hold-period exits <em>exactly when</em> multiples are compressing, organic growth is decelerating, and contingent income is masking P&L deterioration.
          </p>
          <div className="text-sm font-semibold text-white/80">~12–15 major platforms forced to market 2026–2028.</div>
        </Card>
        <div className="space-y-2">
          {[
            ["Multiple compression", "Public broker multiples at ~10–13x EBITDA — lowest in years. PE platforms must mark to public comps."],
            ["Growth assumption broken", "2018–2022 deal models assumed 8–12% organic growth. 2026 reality: Q4 2025 avg. premium growth +0.2%, with large accounts negative."],
            ["Contingent income mask fading", "Roll-up models depend on contingent income to mask operating margin compression. ~13% Q1'26 contingent increase masked ~150bps core profitability contraction."],
            ["AMS sprawl", "Risk Strategies ($9.8B sale, best-in-class) ran 60 AMS instances. Integration tax eats the margin expansion sponsors underwrote."],
            ["Acquiror-of-choice opportunity", "AI has created an overhang — Sequence can be a 'white knight' to operators structurally incapable of investing behind new technology."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <span className="text-xs font-semibold text-red-400/70">{title}: </span>
              <span className="text-xs text-white/50 leading-relaxed">{body}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
