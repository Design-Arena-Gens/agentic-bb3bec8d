import { CurriculumArc } from "@/components/curriculum-arc";
import { FAQ } from "@/components/faq";
import { FeatureGrid } from "@/components/feature-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { WorksheetLab } from "@/components/worksheet-lab";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f9fbff] via-[#eef3ff] to-[#f2f6ff] pb-24 text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white to-transparent" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 sm:gap-20 sm:px-8 md:px-12 lg:px-14">
        <Navigation />
        <Hero />
        <section id="features">
          <FeatureGrid />
        </section>
        <section id="worksheets">
          <WorksheetLab />
        </section>
        <section id="curriculum">
          <CurriculumArc />
        </section>
        <Testimonials />
        <Pricing />
        <section id="faq">
          <FAQ />
        </section>
        <Footer />
      </main>
    </div>
  );
}
