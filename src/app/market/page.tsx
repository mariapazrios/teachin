import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function MarketPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 2 · Market"
        title="Market Dynamics"
        description="The current state of the industry — the soft cycle, mid-market squeeze, PE forced-sale window, and the structural buy opportunity opening between 2026 and 2028."
      />

      <Section title="Industry structure">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            US insurance brokerage is a <strong className="text-white/90">$300B+ premium market</strong> served by 100,000+ brokers. The market is simultaneously consolidating (Big 7 + PE roll-ups) and fragmenting (AI-native startups). Revenue = 10–15% commission on premium. The broker does not take underwriting risk — revenue is remarkably stable across economic cycles.
          </p>
        </Card>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Industry organic growth (2026 projected)", value: "5.9%" },
            { label: "Industry organic growth (2023 hard market)", value: "11.1%" },
            { label: "PE-backed platforms", value: "~100" },
            { label: "Annual M&A transactions", value: "High velocity" },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The soft market (2024–2026)">
        <div className="space-y-3">
          <Card accent="amber">
            <div className="text-sm font-semibold text-white/90 mb-2">Three converging headwinds compressing growth</div>
            <div className="space-y-3">
              {[
                ["Accounting-change drag", "300–400 bps of growth differential vs. prior years. The new convention waits until policy end for true-ups, removing a recurring monthly tailwind."],
                ["Hard-to-soft cycle churn", "After ~3 years of price increases (2020–2023), clients are switching brokers as the market softens. Industry-wide retention compresses during the transition."],
                ["M&A earnout burn-off", "2021–22 deal earnouts maturing now further compress reported growth at acquisitive platforms."],
              ].map(([title, body]) => (
                <div key={title as string} className="flex gap-3">
                  <span className="flex-shrink-0 w-1 rounded-full bg-amber-500/40 self-stretch" />
                  <div>
                    <div className="text-xs font-semibold text-white/70 mb-0.5">{title}</div>
                    <div className="text-sm text-white/45 leading-relaxed">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Comparable timing: 2014–2019 soft market</div>
            <p className="text-sm text-white/55 leading-relaxed">
              During the last soft market (2014–2019), the biggest broker exits happened at the bottom of the rate cycle — Hub International at 13.0x, AssuredPartners at 13.7x, Alliant at 13.0x. Buyers who deployed capital in the 2018–2019 trough captured the subsequent hard-market multiple expansion. <strong className="text-white/80">2026–2028 is the next analog window.</strong>
            </p>
          </Card>
        </div>
      </Section>

      <Section title="The PE forced-sale window (2026–2028)">
        <Card accent="red" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed mb-3">
            The 2018–2021 PE vintage created the biggest platform cohort in brokerage history. Those platforms are now hitting 5–7 year hold-period exits <em>exactly when</em> multiples are compressing, organic growth is decelerating, and contingent income is masking P&L deterioration.
          </p>
          <div className="text-sm font-semibold text-white/80">~12–15 major platforms forced to market 2026–2028.</div>
        </Card>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Selected PE vintage cohort</div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Vintage</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Platform</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Sponsor</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Exit Window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["2018", "Acrisure", "Blackstone", "2025–2028"],
                ["2018", "AssuredPartners", "GTCR", "2026–2028 → Gallagher $13.5B"],
                ["2019", "Hilb Group", "Carlyle", "2026–2028"],
                ["2019", "Patriot", "GuidePost", "2026–2028"],
                ["2020", "Alliant", "Stone Point", "2027–2029"],
                ["2020", "OneDigital", "Onex", "2027–2029"],
                ["2021", "Patriot (2nd)", "Various", "2028–2030"],
              ].map(([vintage, platform, sponsor, window]) => (
                <tr key={platform as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-2.5 pr-4 text-white/40 text-xs">{vintage}</td>
                  <td className="py-2.5 pr-4 text-white/80 font-medium">{platform}</td>
                  <td className="py-2.5 pr-4 text-white/40">{sponsor}</td>
                  <td className="py-2.5 text-white/55">{window}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-2">Headwinds these platforms face into exit</div>
          {[
            ["Multiple compression", "Public broker multiples at 12–13x EBITDA — lowest in 10 years. PE platforms must mark to public comps."],
            ["Growth assumption broken", "2018–2022 deal models assumed 8–12% organic growth. 2026 reality: 5.9% projected, with rate environment at or below zero."],
            ["Contingent income mask fading", "Roll-up models depend on contingent income to mask operating margin compression. As carrier results normalize, platform-level EBITDA restatements likely."],
            ["AMS sprawl", "Risk Strategies ($9.8B sale, best-in-class) ran 60 AMS instances. KRP, Inszone, AssuredPartners, Hub, Acrisure are all worse. Integration tax eats the margin expansion sponsors underwrote."],
            ["Continuation vehicle exhaustion", "Many sponsors already did minority recapitalizations. The capital-raise muscle is increasingly tapped."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <span className="text-xs font-semibold text-red-400/70">{title}: </span>
              <span className="text-xs text-white/50 leading-relaxed">{body}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The mid-market squeeze">
        <Card accent="purple" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            Mid-market independent brokers ($50M–$500M revenue) are getting squeezed from above by the Big 7 going down-market via M&A, and from below by AI-native players eating SMB share. <strong className="text-white/80">The middle is the most exposed strategic position in commercial brokerage today — and where seller motivation to engage with Sequence is highest.</strong>
          </p>
        </Card>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Big 7 going down-market (selected deals)</div>
        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Date</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Acquiror</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Target</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Value</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Multiple</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Mar-25", "Gallagher", "Woodruff-Sawyer", "$1.2B", "13.6x"],
                ["Dec-24", "Gallagher", "AssuredPartners", "$13.5B", "12.5x"],
                ["Jun-25", "Brown & Brown", "RSC / Accession", "$9.8B", "15.6x"],
                ["Dec-23", "Aon", "NFP", "$12.9B", "15.0x"],
                ["Jul-24", "Marsh", "Horton", "$4.0B", "16x"],
              ].map(([date, acq, target, val, mult]) => (
                <tr key={target as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-2.5 pr-4 text-white/40 text-xs">{date}</td>
                  <td className="py-2.5 pr-4 text-white/70">{acq}</td>
                  <td className="py-2.5 pr-4 text-white/80 font-medium">{target}</td>
                  <td className="py-2.5 pr-4 text-white/60">{val}</td>
                  <td className="py-2.5 text-white/60">{mult}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">AI-native squeeze from below</div>
        <div className="space-y-2 mb-5">
          {[
            ["Embedded platforms", "Obie (Baldwin), Vouch (tech), Coalition (cyber) integrating directly into customer purchase flows"],
            ["Tech-enabled brokers", "Newfront, Foundation, Coverdash serving sub-$50K accounts at margins traditional brokers can't match"],
            ["ChatGPT / Insurify (Feb 2026)", "AI-based insurance shopping for small accounts — public broker stocks dropped ~10% in a single day"],
            ["InsurTech capital", "$1.6B raised across 101 deals in Q3 2024 alone — 38% increase in invested value, AI-centered deals dominating"],
          ].map(([label, body]) => (
            <div key={label as string} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 text-purple-400/60 font-bold text-xs mt-0.5">↘</span>
              <div>
                <span className="text-white/70 font-medium">{label}: </span>
                <span className="text-white/45">{body}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Named mid-market targets on our radar</div>
        <div className="space-y-2">
          {[
            { name: "Heffernan", profile: "~$50M EBITDA, took minority PE 2024 — 'may not know they want an AI capital partner yet'" },
            { name: "IMA / Rob Cohen", profile: "~$185M revenue, ~8% organic, ~20% EBITDA margin; took PE 2020, grown 4x" },
            { name: "Holmes Murphy", profile: "'Really innovative' but 'blood oath of independence'" },
            { name: "M3 Insurance", profile: "Wisconsin, employee-owned, tech-forward, CEO with 'few years left'" },
            { name: "Sterling Seacrest Pritchard", profile: "$130M revenue — 'would never take outside investment' but interested in tools/partnerships" },
            { name: "Leavitt Group", profile: "$670M revenue, top 25, family-owned 4th gen, sold minority 2024" },
            { name: "Cottingham & Butler", profile: "Iowa — 'won't be for sale until John Butler dies, in his late 80s' — the archetype family-transition situation" },
          ].map(({ name, profile }) => (
            <div key={name} className="bg-white/[0.03] rounded-lg p-3 border border-white/6 flex gap-3">
              <span className="flex-shrink-0 font-semibold text-white/80 text-sm w-40">{name}</span>
              <span className="text-sm text-white/40">{profile}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why 2026–2028 is the moment">
        <Card accent="green">
          <div className="text-sm font-semibold text-white/90 mb-3">Five pressures converging on mid-market independents simultaneously</div>
          <div className="space-y-2">
            {[
              "Top-line pressure: rates softening, organic growth decelerating (5.9% projected in 2026 vs. 11.1% in 2023)",
              "Margin pressure: operating margins ex-contingent compressing 15.5% → 13.9% in Q1 2026",
              "Competitive pressure: Big 7 above with capital; AI-native below with tech",
              "Capital structure pressure: PE platforms reaching forced-sale windows",
              "Generational pressure: aging owner bases, succession decisions now or never",
            ].map((point, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="flex-shrink-0 text-emerald-400/60 font-bold">{i + 1}.</span>
                <span className="text-white/60 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/8">
            <p className="text-sm text-white/75 leading-relaxed font-medium">
              &ldquo;The seller motivation to engage is highest in 2026–2028 of any window in the last two decades.&rdquo;
            </p>
          </div>
        </Card>
      </Section>
    </div>
  );
}
