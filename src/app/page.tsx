import Link from "next/link";

const sections = [
  {
    href: "/thesis",
    icon: "◎",
    label: "The Thesis",
    summary: "What is a broker, the 5-point thesis, evaluation framework, platform buy box, and key risks.",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    tag: "Strategy",
  },
  {
    href: "/market",
    icon: "◐",
    label: "Market Dynamics",
    summary: "The ~$2T US market, P&C value chain, soft market data, public broker multiples, precedent M&A transactions, and fragmentation stats.",
    color: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20",
    tag: "Market",
  },
  {
    href: "/producers",
    icon: "◉",
    label: "Producer Economics",
    summary: "Producer power dynamics, operator benchmarking, comp structures, departure risk, and the pip count lever.",
    color: "from-amber-500/10 to-transparent",
    border: "border-amber-500/20",
    tag: "Operations",
  },
  {
    href: "/technology",
    icon: "⬡",
    label: "Technology & AMS",
    summary: "Why incumbents are structurally stuck, current vs. future state architecture, and why the rebuild creates durable leverage.",
    color: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/20",
    tag: "Technology",
  },
  {
    href: "/value-creation",
    icon: "◆",
    label: "Value Creation",
    summary: "Five levers: AMS rebuild, sales enablement, talent flywheel, strategic M&A, and vertical integration.",
    color: "from-indigo-500/10 to-transparent",
    border: "border-indigo-500/20",
    tag: "Finance",
  },
];

const keyNumbers = [
  { value: "~$2T", label: "US insurance market (P&C + L&H)", sub: "P&C crossed $1T for first time in 2024" },
  { value: "$22B", label: "Retail broker US profit pool", sub: "27–35% EBITDA margins" },
  { value: "60%", label: "Producer time on admin", sub: "vs. client-facing work" },
  { value: "10–15pts", label: "Margin available from AI", sub: "30–35% today → 45–50%+ steady state" },
  { value: "27,471", label: "Total US retail broker firms", sub: "Top 76 firms = ~55–65% of revenue" },
  { value: "15.0x", label: "Precedent M&A median multiple", sub: "vs. public trading at ~10–13x today" },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs font-semibold tracking-[0.2em] text-[#5a5a7a] uppercase mb-4">Sequence Holdings · M&A</div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
          Insurance Brokerage<br />
          <span className="text-white/40">Thesis Deck · May 2026</span>
        </h1>
        <p className="text-[16px] text-white/50 leading-relaxed max-w-2xl">
          Everything Sequence has learned about insurance brokerage — synthesized from expert calls, market research, operator interviews, and industry data. Updated from Broker Thesis Deck v6, May 2026.
        </p>
      </div>

      {/* Key Numbers */}
      <div className="mb-12">
        <div className="text-xs font-semibold tracking-[0.15em] text-[#5a5a7a] uppercase mb-4">Key Numbers</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {keyNumbers.map((n) => (
            <div key={n.value} className="bg-white/[0.03] rounded-xl p-4 border border-white/6">
              <div className="text-2xl font-bold text-white tracking-tight">{n.value}</div>
              <div className="text-xs text-white/55 mt-1">{n.label}</div>
              <div className="text-xs text-white/30 mt-0.5">{n.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* One-liner thesis */}
      <div className="mb-12 bg-white/[0.03] rounded-2xl p-6 border border-white/6 border-l-2 border-l-blue-500/50">
        <div className="text-xs font-semibold tracking-[0.15em] text-blue-400/70 uppercase mb-3">Simple Thesis</div>
        <p className="text-[17px] text-white/85 leading-relaxed">
          Insurance brokerage is a <strong className="text-white">high-retention, high-margin, recession-resistant</strong> distribution business where the admin layer — currently ~60% of producer and service-staff time — is a pure AI automation target. A modern stack (normalized data layer + agentic orchestration + LLM pane of glass) doesn&apos;t compete with AMS incumbents on feature parity — it makes the underlying job smaller. The defensibility shift matters more than the cost line: when workflow lives in the chassis rather than the producer&apos;s head, book stickiness travels with the platform.
        </p>
      </div>

      {/* Section Cards */}
      <div className="text-xs font-semibold tracking-[0.15em] text-[#5a5a7a] uppercase mb-4">Sections</div>
      <div className="space-y-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex items-start gap-5 bg-white/[0.03] hover:bg-white/[0.055] rounded-2xl p-5 border border-white/6 transition-all duration-200"
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} border ${s.border} flex items-center justify-center text-lg`}>
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors">{s.label}</span>
                <span className="text-[10px] font-medium tracking-wider text-white/25 uppercase">{s.tag}</span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed">{s.summary}</p>
            </div>
            <span className="flex-shrink-0 text-white/20 group-hover:text-white/50 transition-colors text-lg mt-1">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
