import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Insurance Brokerage — Sequence Learnings",
  description: "Everything Sequence has learned about insurance brokerage — thesis, market, technology, producer economics, and value creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0f] text-[#e8e8ed] min-h-screen">
        <PasswordGate>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-[260px] min-h-screen">
              {children}
            </main>
          </div>
        </PasswordGate>
      </body>
    </html>
  );
}
