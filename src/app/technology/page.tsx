import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function TechnologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageHeader
        label="Section 3 · Technology"
        title="Technology & AMS"
        description="The operating stack incumbents run on, why the AMS is the foundational element to rebuild, and how a modern agentic architecture unlocks margin, retention, and every downstream commercial lever."
      />

      <Section title="AMS market structure">
        <Card accent="blue" className="mb-4">
          <p className="text-sm text-white/70 leading-relaxed">
            The agency management system (AMS) market is a <strong className="text-white/90">duopoly with a long tail</strong>. The two existing AMS systems have rigid schemas, batch-oriented architectures, and decades of accumulated tech debt — making feature work impossible to escape from the data model underneath.
          </p>
        </Card>

        <div className="overflow-x-auto mb-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Vendor</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Products</th>
                <th className="text-left py-2 pr-4 text-xs text-white/35 font-medium">Owner</th>
                <th className="text-left py-2 text-xs text-white/35 font-medium">Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                ["Applied Systems", "Applied Epic", "Hellman & Friedman + GIC", "No API. Highly litigious. Closed architecture. Avoid."],
                ["Vertafore", "AMS360, BenefitPoint, ImageRight, Q5", "Roper Technologies", "Has API. More open architecture. Preferred."],
                ["Smaller-agency tier", "HawkSoft, EZLynx, NowCerts, QQ Catalyst", "Various", "Sub-$10M agencies only"],
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

        <Card accent="amber">
          <div className="text-sm font-semibold text-white/90 mb-2">Strong preference: AMS 360 (Vertafore) over Applied Epic</div>
          <p className="text-sm text-white/60 leading-relaxed">
            AMS 360 has an API and a generally more open architecture. Applied Epic has no API and is highly litigious. Neither platform is great, but AMS 360 is meaningfully better as a foundation for building above. An existing data warehouse capability (like Liberty or Sterling Seacrest) is a great starting point.
          </p>
        </Card>
      </Section>

      <Section title="Why the incumbents are structurally stuck">
        <div className="space-y-3">
          {[
            {
              label: "Structural constraints",
              body: "The two existing AMS systems have rigid schemas, batch-oriented architectures, and decades of accumulated tech debt. Feature work cannot escape the data model underneath.",
              accent: "red" as const,
            },
            {
              label: "Data entry problem",
              body: "The middle- and back-office layers of insurance brokers spend ~60% of their time on manual data entry, re-keying, and document handling — a direct result of the system of record.",
              accent: "red" as const,
            },
            {
              label: "Point solutions make it worse",
              body: "Every modern overlay and AI point-solution (proposal generators, COI tools, claims portals) compounds the integration tax rather than reducing it.",
              accent: "red" as const,
            },
          ].map(({ label, body, accent }) => (
            <Card key={label} accent={accent}>
              <div className="text-sm font-semibold text-white/90 mb-1.5">{label}</div>
              <p className="text-sm text-white/55 leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Current state vs. future state architecture">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-5">
            <div className="text-xs font-bold text-red-400/70 uppercase tracking-wider mb-3">Current State</div>
            <div className="text-center text-xs font-semibold text-white/60 mb-3">AMS (Applied / Vertafore)</div>
            <div className="grid grid-cols-2 gap-2">
              {["Rating", "Proposal", "COI Tool", "Claims", "Comp", "BI / Reports", "Cert Mgr", "Doc Store", "E-sign", "Carrier APIs", "ERP"].map((item) => (
                <div key={item} className="bg-white/[0.04] rounded-lg px-2 py-1.5 text-xs text-white/45 text-center">{item}</div>
              ))}
            </div>
            <div className="mt-3 text-xs text-red-400/50 text-center">Integration tax compounds with every point solution added</div>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-2xl p-5">
            <div className="text-xs font-bold text-emerald-400/70 uppercase tracking-wider mb-3">Future State</div>
            <div className="space-y-2">
              <div className="bg-blue-500/15 border border-blue-500/25 rounded-lg p-2.5 text-xs text-white/70 text-center font-semibold">LLM-Forward Pane of Glass<br/><span className="font-normal text-white/45">Primary Human Interface</span></div>
              <div className="bg-purple-500/15 border border-purple-500/25 rounded-lg p-2.5 text-xs text-white/70 text-center font-semibold">Agentic Orchestration<br/><span className="font-normal text-white/45">Workflow sub-agents</span></div>
              <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-lg p-2.5 text-xs text-white/70 text-center font-semibold">Foundational Data Ontology Layer<br/><span className="font-normal text-white/45">Normalized, clean, agentic-ready</span></div>
            </div>
            <div className="mt-3 text-xs text-emerald-400/50 text-center">Each layer compounds value of layers above it</div>
          </div>
        </div>
      </Section>

      <Section title="What &ldquo;rebuild&rdquo; actually means">
        <div className="space-y-3">
          {[
            {
              title: "First-principles reimagination",
              body: "Prior attempts at AMS modernization have taken an incremental '1-to-n' approach. Rethinking from '0-to-1' first principles enables competition on architecture instead of capabilities.",
              accent: "green" as const,
            },
            {
              title: "The primitives",
              body: "A normalized data layer as the foundation supports an agentic orchestration layer and a fundamentally reimagined pane of glass for human + AI operating system.",
              accent: "green" as const,
            },
            {
              title: "The job gets smaller and faster",
              body: "Renewal prep, transactional processing (COIs, endorsements) and claims intake become automated, shrinking the unit of workflow itself — not just increasing speed.",
              accent: "green" as const,
            },
            {
              title: "Build cost: AI era vs. pre-AI era",
              body: "Prior tech-native rebuild required $100M / 6 years / 100 engineers in the pre-AI-coding era. Today's tooling compresses to ~$10M / 6–12 months / 10–15 forward-deployed engineers.",
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

      <Section title="Why the rebuild creates durable leverage">
        <div className="space-y-2">
          {[
            ["Margin", "Optimization and efficiency flows through every functional area as an output of systems innovation, not an input. Humans are freed up to work at highest-and-best-use instead of data entry."],
            ["Retention", "When workflows are orchestrated end-to-end with AI, speed and service quality step-change, driving customer stickiness to the platform instead of the producer."],
            ["Cross-sell", "The data layer is the pre-condition to sales enablement applications supporting producers. Every commercial lever downstream flows from this foundation."],
            ["Platform-for-producers", "With a reimagined service delivery organization, producers have something truly differentiated to sell to their customers, driving organic growth, book-size, and new producer attraction."],
            ["M&A", "Acquisitions migrate onto one chassis instead of rolling into separate systems, unlocking a fundamentally different synergy profile vs. every competing aggregator."],
            ["Switching cost shift", "Moves client switching cost from producer-relationship to platform-workflow — a SaaS-style moat applied to a traditionally relationship-driven industry."],
          ].map(([title, body]) => (
            <div key={title as string} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-sm font-semibold text-white/80 mb-1">{title}</div>
              <div className="text-sm text-white/45 leading-relaxed">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What the AMS contains">
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

      <Section title="Why we can&apos;t replace the AMS like BankSouth&apos;s LOS">
        <Card accent="red" className="mb-4">
          <div className="text-sm font-semibold text-white/90 mb-2">The AMS is a more complex system of record</div>
          <p className="text-sm text-white/60 leading-relaxed">
            The BankSouth LOS was a single-product, finite-lifecycle, bounded-counterparty system with ~150 standardized forms. An AMS is multi-product, indefinite-lifecycle, with 100–200+ carrier counterparties, ~800 ACORD forms, 50 state regulators, and append-only policy state. The AMS also functions as an accounting system — existing architectures are closed, necessitating significant engineering work to read/write out of the existing system, or building a net-new system of record.
          </p>
        </Card>
        <Card accent="green">
          <div className="text-sm font-semibold text-white/90 mb-2">The difficulty creates the moat</div>
          <p className="text-sm text-white/60 leading-relaxed">
            No incumbent broker will be able to execute an initiative of this scale without a partner like Sequence. The architectural pattern — normalized data layer + agentic orchestration backbone + LLM chat as primary interface — is reusable across vertical-system-of-record opportunities beyond brokerage.
          </p>
        </Card>
      </Section>
    </div>
  );
}
