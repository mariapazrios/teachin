interface StatProps {
  value: string;
  label: string;
  sub?: string;
}

export default function Stat({ value, label, sub }: StatProps) {
  return (
    <div className="bg-white/[0.03] rounded-xl p-5 border border-white/6">
      <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
      {sub && <div className="text-xs text-white/35 mt-0.5">{sub}</div>}
    </div>
  );
}
