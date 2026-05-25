interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-lg font-semibold text-white/90 mb-5 pb-3 border-b border-white/8">{title}</h2>
      {children}
    </section>
  );
}
