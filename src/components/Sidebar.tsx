"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview", icon: "◈" },
  { href: "/thesis", label: "The Thesis", icon: "◎" },
  { href: "/market", label: "Market Dynamics", icon: "◐" },
  { href: "/producers", label: "Producer Economics", icon: "◉" },
  { href: "/technology", label: "Technology & AMS", icon: "⬡" },
  { href: "/value-creation", label: "Value Creation", icon: "◆" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-[260px] bg-[#0d0d14] border-r border-white/5 flex flex-col z-50">
      <div className="px-6 py-7 border-b border-white/5">
        <div className="text-xs font-semibold tracking-[0.2em] text-[#5a5a7a] uppercase mb-1">Sequence Holdings</div>
        <div className="text-[15px] font-semibold text-white/90 leading-snug">Insurance Brokerage</div>
        <div className="text-xs text-[#5a5a7a] mt-0.5">Learnings Hub</div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                active
                  ? "bg-white/10 text-white font-medium"
                  : "text-[#8888a8] hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <span className="text-base w-5 text-center opacity-70">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-white/5">
        <div className="text-[11px] text-[#3a3a5a]">Last updated May 2026</div>
      </div>
    </aside>
  );
}
