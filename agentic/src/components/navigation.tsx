"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#features", label: "Philosophy" },
  { href: "#worksheets", label: "Worksheets" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 mx-auto max-w-6xl rounded-full border border-slate-200 bg-white/80 shadow-xl shadow-slate-200/70 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700"
        >
          Northstar
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow shadow-slate-900/20 transition hover:bg-slate-800"
          >
            Join today
          </Link>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-slate-100 px-4 py-2 text-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-900 px-4 py-2 text-center text-white"
            >
              Join today
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
