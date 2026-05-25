interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "blue" | "purple" | "green" | "amber" | "red" | "indigo";
}

const accents = {
  blue: "border-l-blue-500/60",
  purple: "border-l-purple-500/60",
  green: "border-l-emerald-500/60",
  amber: "border-l-amber-500/60",
  red: "border-l-red-500/60",
  indigo: "border-l-indigo-400/60",
};

export default function Card({ children, className = "", accent }: CardProps) {
  const accentClass = accent ? `border-l-2 ${accents[accent]}` : "";
  return (
    <div className={`bg-white/[0.03] rounded-xl p-5 border border-white/6 ${accentClass} ${className}`}>
      {children}
    </div>
  );
}
