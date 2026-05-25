interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="mb-10 pb-8 border-b border-white/6">
      <div className="text-xs font-semibold tracking-[0.2em] text-[#5a5a7a] uppercase mb-3">{label}</div>
      <h1 className="text-3xl font-bold text-white tracking-tight mb-3">{title}</h1>
      <p className="text-[15px] text-white/50 leading-relaxed max-w-2xl">{description}</p>
    </div>
  );
}
