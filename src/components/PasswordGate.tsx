"use client";
import { useState, useEffect } from "react";

const CORRECT_HASH = "f2a3bfacc42f1cbdcad469088ccbc1c64b1a1249d7bd91055311b90c57d8adc9";
const SESSION_KEY = "seq_brokerage_auth";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError(false);
    const hash = await sha256(input.trim().toUpperCase());
    if (hash === CORRECT_HASH) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
    setChecking(false);
  }

  if (authed === null) return null;
  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-xs font-semibold tracking-[0.2em] text-[#5a5a7a] uppercase mb-2">Sequence Holdings</div>
          <div className="text-xl font-bold text-white/90">Insurance Brokerage</div>
          <div className="text-sm text-white/35 mt-1">Learnings Hub</div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/[0.03] rounded-2xl p-6 border border-white/8">
          <div className="mb-5">
            <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none focus:ring-1 transition-all ${
                error ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:ring-white/20 focus:border-white/20"
              }`}
              placeholder="Enter password"
              autoFocus
              autoComplete="off"
            />
            {error && (
              <div className="mt-2 text-xs text-red-400/80">Incorrect password. Try again.</div>
            )}
          </div>

          <button
            type="submit"
            disabled={checking || !input}
            className="w-full bg-white/10 hover:bg-white/15 disabled:opacity-40 disabled:cursor-not-allowed text-white/90 font-medium py-3 rounded-lg text-sm transition-all"
          >
            {checking ? "Checking…" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
