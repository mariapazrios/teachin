import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function TechnologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 4 · Technology"
        title="Technology & AMS"
        description="The operating stack incumbents run on, why the AMS is irreplaceable in the short term, and why the ontology-first strategy is the right path to building above it."
      />

      <Section title="AMS market structure">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            The agency management system (AMS) market is a <strong className="text-white/90">duopoly with a long tail</strong>. ~40,000 agencies, ~300–400,000 seats. Small TAM relative to enterprise software build cost — which is why incumbents have been able to charge rents without improvement for decades.
          </p>
        </Card>

        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Vendor</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Products</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Owner</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Position</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Applied Systems", "Applied Epic", "Hellman & Friedman + GIC", "~50%+ of mid-to-large agencies"],
                ["Vertafore", "AMS360, BenefitPoint, ImageRight, Q5", "Roper Technologies", "The other duopolist; cloud-hosted, more modular"],
                ["Smaller-agency tier", "HawkSoft, EZLynx, NowCerts, QQ Catalyst", "Various", "Primarily sub-$10M-revenue agencies"],
              ].map(([vendor, products, owner, pos]) => (
                <tr key={vendor as string} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4 text-white/80 font-medium text-sm">{vendor}</td>
                  <td className="py-3 pr-4 text-white/50 text-xs">{products}</td>
                  <td className="py-3 pr-4 text-white/40 text-xs">{owner}</td>
                  <td className="py-3 text-white/50 text-xs">{pos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-2">Adjacent layers most brokers also run</div>
          {[
            ["CRM overlays", "Salesforce Financial Services Cloud, Tarmika — producer-facing workflow on top of the AMS"],
            ["Point solutions", "Comeulate (commission reconciliation), Indio (submissions), Patra (servicing), Power Broker AI (policy comparison)"],
            ["External integrations", "Outlook, carrier portals, comparative raters"],
          ].map(([label, body]) => (
            <div key={label as string} className="flex gap-3 text-sm bg-white/[0.02] rounded-lg p-3 border border-white/5">
              <span className="flex-shrink-0 text-xs font-semibold text-white/35 w-28">{label}</span>
              <span className="text-white/45">{body}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What an AMS contains">
        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Six functional subsystems</div>
        <div className="space-y-2 mb-5">
          {[
            ["1", "Master data layer", "Clients, carriers, producers, employees, locations"],
            ["2", "Policy & transaction ledger", "Every quote, bind, endorsement, audit, renewal, time-ordered"],
            ["3", "Document store", "The actual PDFs (applications, policies, endorsements, certs, loss runs). The legal source of truth."],
            ["4", "Carrier integration layer", "IVANS downloads (carrier-to-AMS) and uploads via carrier portals"],
            ["5", "Commission accounting", "Direct bill reconciliation against carrier statements, agency bill ledger, contingents"],
            ["6", "Workflow engine", "Task queues, assignments, reminders, renewal calendars"],
          ].map(([num, title, body]) => (
            <div key={num as string} className="flex gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/8 flex items-center justify-center text-xs text-white/40 font-bold">{num}</span>
              <div>
                <div className="text-sm font-semibold text-white/80 mb-0.5">{title}</div>
                <div className="text-xs text-white/45 leading-relaxed">{body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">The four highest-volume back-office transactions</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Certificates of insurance",
            "Evidence of property changes",
            "Policy changes (endorsements)",
            "Document review / comparison",
          ].map((t) => (
            <div key={t} className="bg-white/[0.03] rounded-xl p-4 border border-white/6 text-sm text-white/70 font-medium">
              {t}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-white/35 text-center">Together account for ~80% of daily transactional work</div>
      </Section>

      <Section title="Sources of AMS complexity">
        <div className="space-y-2">
          {[
            ["Carrier counterparty cardinality", "100–200 carriers per broker. Each has its own downloads, field naming, commission structures, policy form variants, upload requirements."],
            ["State regulatory heterogeneity", "50 state insurance departments. Filings, surplus lines, licensing, premium tax, and disclosures all vary by state. Federal layers on top (NFIP, terrorism, ERISA)."],
            ["ACORD form universe", "~800 standard forms. Many have regional and carrier-specific variants. Forms get updated; old policies reference old versions."],
            ["Multi-year policy lifecycle", "Policies renew indefinitely. Endorsements modify state retroactively. Claims tail 7+ years. Append-only, time-aware data model required."],
            ["Documents as legal record", "PDFs are the source of truth; AMS fields are derivative. Requires OCR, classification, indexing, and retention of millions of documents per agency."],
            ["Per-agency customization", "Each installation carries years of workflow customization. Two agencies on the same AMS look meaningfully different operationally."],
            ["Switching cost", "Industry consensus: replacing an AMS is an operational nightmare. The market is locked because no agency wants to be the guinea pig."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-sm font-semibold text-white/80 mb-1">{title}</div>
              <div className="text-sm text-white/45 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why we can't just replace the AMS">
        <Card accent="red" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">Not like BankSouth&apos;s LOS</div>
          <p className="text-sm text-white/60 leading-relaxed">
            We cannot replace an AMS as quickly as Sequence replaced the LOS at BankSouth. The BankSouth LOS was a single-product, finite-lifecycle, bounded-counterparty system with ~150 standardized forms. An AMS is multi-product, indefinite-lifecycle, with 100–200+ carrier counterparties, ~800 ACORD forms, 50 state regulators, and append-only policy state.
          </p>
        </Card>
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
          <div className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2">Real-world data point</div>
          <p className="text-sm text-white/55 leading-relaxed">
            Newfront spent ~6 years and ~$100M on engineering to rebuild the AMS pre-AI. Even best-in-class Risk Strategies ($9.8B sale) ran 60 AMS instances. The integration tax is real and eats the margin expansion sponsors underwrite.
          </p>
        </div>
      </Section>

      <Section title="The ontology-first strategy">
        <Card accent="green" className="mb-5">
          <div className="text-sm font-semibold text-white/90 mb-2">Sequencing: ontology first. Everything else compounds on it.</div>
          <p className="text-sm text-white/60 leading-relaxed">
            The data ontology layer is what makes the rest of the strategy possible without first replacing the system of record. With ontology in place, we can build product capabilities above the AMS, build adjacent systems (vertical agents, MGA platforms, M&A integration tooling), and eventually evaluate selective AMS component replacement once operator credibility is established.
          </p>
        </Card>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Above the AMS — consumer data layer to deliver capabilities</div>
        <div className="space-y-2 mb-5">
          {[
            ["Producer copilot", "Lead scoring, account research, prep, follow-up", "New-business win rate; sales velocity"],
            ["Quote orchestration", "Market-access multiplication", "Win rate; recapture of wholesale margin"],
            ["Client-facing benchmarking", "Show clients how their coverage compares", "Win rate; pricing power on fees"],
            ["Coverage-gap diagnostics", "Continuous AI-driven gap analysis", "Retention; E&O risk reduction"],
            ["Mid-term re-marketing", "Proactively shop at renewal", "Retention; client savings delivered"],
            ["AI-driven claims advocacy", "Intelligent claims support", "Retention; moment-of-truth differentiation"],
          ].map(([lever, detail, metric]) => (
            <div key={lever as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-white/80">{lever}</span>
                  <span className="text-sm text-white/40 ml-2">{detail}</span>
                </div>
                <span className="flex-shrink-0 text-xs text-emerald-400/60 text-right">{metric}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-3">Adjacent to the AMS</div>
        <div className="space-y-2">
          {[
            ["Vertical intelligence agents", "Construction, transportation, etc.", "Win rate in specialty; defensible niche"],
            ["Internal MGA / program platforms", "Capture underwriting economics", "Margin expansion; new product creation"],
            ["M&A integration tooling", "Post-close data migration", "Tuck-in magnetism"],
            ["Producer P&L granularity", "Comp optimization data", "Talent retention"],
          ].map(([lever, detail, metric]) => (
            <div key={lever as string} className="bg-white/[0.03] rounded-lg p-3.5 border border-white/6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-sm font-semibold text-white/80">{lever}</span>
                  <span className="text-sm text-white/40 ml-2">{detail}</span>
                </div>
                <span className="flex-shrink-0 text-xs text-indigo-400/60 text-right">{metric}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Notable industry observations">
        <div className="space-y-2">
          {[
            "Applied Epic does not provide open API access. Vertafore does, selectively for larger customers.",
            "Most mid-market brokers run 4–12 point solutions alongside the AMS plus Outlook and Excel for the gaps.",
            "Industry standard cost structure: service 20–25% of revenue; producer comp 25–35%; G&A 5–7%; typical EBITDA ~30%.",
            "AI transformation in insurance is in its 'far infancy.' — Steve Brown / Acrisure, 3/31",
            "The AMS is rated as 'poor' by operators across the board — Applied Epic and AMS360 both widely disliked. No one has built a credible replacement.",
          ].map((obs, i) => (
            <div key={i} className="flex gap-3 text-sm bg-white/[0.02] rounded-lg p-3 border border-white/5">
              <span className="flex-shrink-0 text-white/20">→</span>
              <span className="text-white/50 leading-relaxed">{obs}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
