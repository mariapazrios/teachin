"use client";
import { useState, useEffect } from "react";

const CORRECT_HASH = "f2a3bfacc42f1cbdcad469088ccbc1c64b1a1249d7bd91055311b90c57d8adc9";
const STORAGE_KEY = "seq_brokerage_auth";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);

function rotr(x: number, n: number) {
  return (x >>> n) | (x << (32 - n));
}

// Pure-JS SHA-256, used when crypto.subtle is unavailable. subtle only exists in
// secure contexts, so a board member on a plain-http link would otherwise hit an
// exception here and never get past "Checking…".
function sha256Sync(text: string): string {
  const bytes = new TextEncoder().encode(text);
  const bitLen = bytes.length * 8;
  const total = Math.ceil((bytes.length + 9) / 64) * 64;
  const buf = new Uint8Array(total);
  buf.set(bytes);
  buf[bytes.length] = 0x80;

  const view = new DataView(buf.buffer);
  view.setUint32(total - 8, Math.floor(bitLen / 0x100000000));
  view.setUint32(total - 4, bitLen >>> 0);

  const H = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ]);
  const w = new Uint32Array(64);

  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) w[i] = view.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + K[i] + w[i]) >>> 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0;
      d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }

    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0;
    H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0;
    H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }

  return Array.from(H).map(x => x.toString(16).padStart(8, "0")).join("");
}

async function sha256(text: string): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (subtle) {
    try {
      const buf = await subtle.digest("SHA-256", new TextEncoder().encode(text));
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
    } catch {
      // fall through to the pure-JS path
    }
  }
  return sha256Sync(text);
}

type Store = Pick<Storage, "getItem" | "setItem" | "removeItem">;

const memoryStore: Store = (() => {
  const map = new Map<string, string>();
  return {
    getItem: k => map.get(k) ?? null,
    setItem: (k, v) => { map.set(k, v); },
    removeItem: k => { map.delete(k); },
  };
})();

// localStorage first so the grant survives closing the tab; sessionStorage and
// then memory as fallbacks, since both throw outright when storage is blocked
// (Safari private browsing, locked-down managed browsers).
function pickStore(): Store {
  for (const open of [() => window.localStorage, () => window.sessionStorage]) {
    try {
      const s = open();
      const probe = "__seq_probe__";
      s.setItem(probe, "1");
      s.removeItem(probe);
      return s;
    } catch {
      // unavailable — try the next one
    }
  }
  return memoryStore;
}

let store: Store | null = null;
function getStore(): Store {
  if (!store) store = pickStore();
  return store;
}

function hasValidGrant(): boolean {
  let raw: string | null;
  try {
    raw = getStore().getItem(STORAGE_KEY);
  } catch {
    return false;
  }
  if (!raw) return false;

  try {
    const grant = JSON.parse(raw);
    // Tying the grant to the hash means rotating the password invalidates
    // outstanding grants. The hash already ships in the bundle, so this leaks nothing.
    if (!grant || grant.h !== CORRECT_HASH) return false;
    return typeof grant.t === "number" && Date.now() - grant.t < MAX_AGE_MS;
  } catch {
    return false;
  }
}

function writeGrant() {
  try {
    getStore().setItem(STORAGE_KEY, JSON.stringify({ h: CORRECT_HASH, t: Date.now() }));
  } catch {
    // Non-fatal: the visitor stays unlocked for this page load, just not the next one.
  }
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    setAuthed(hasValidGrant());
  }, []);

  // Unlocking in one tab unlocks the others, instead of leaving stale prompts behind.
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== null && e.key !== STORAGE_KEY) return;
      setAuthed(hasValidGrant());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError(null);
    try {
      const hash = await sha256(input.trim().toUpperCase());
      if (hash === CORRECT_HASH) {
        writeGrant();
        setAuthed(true);
      } else {
        setError("Incorrect password. Try again.");
        setInput("");
      }
    } catch {
      setError("Couldn't check the password. Please reload the page and try again.");
    } finally {
      setChecking(false);
    }
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
              onChange={e => { setInput(e.target.value); setError(null); }}
              className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none focus:ring-1 transition-all ${
                error ? "border-red-500/60 focus:ring-red-500/30" : "border-white/10 focus:ring-white/20 focus:border-white/20"
              }`}
              placeholder="Enter password"
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {error && (
              <div className="mt-2 text-xs text-red-400/80">{error}</div>
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
