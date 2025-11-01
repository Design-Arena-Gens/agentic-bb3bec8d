import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 px-6 py-10 text-slate-300 shadow-xl shadow-slate-900/60 sm:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Northstar Homeschooling
          </p>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            Reimagining homeschooling as a studio for evidence-seeking, empathy, and bold ideas.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          <Link href="#worksheets" className="hover:text-white">
            Interactive labs
          </Link>
          <Link href="#pricing" className="hover:text-white">
            Membership
          </Link>
          <Link href="mailto:hello@northstarhome.school" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Northstar Homeschooling. Built for families who believe
        thinking is a team sport.
      </div>
    </footer>
  );
}
