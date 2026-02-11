import { ClipboardCheck, DraftingCompass, Hammer, KeyRound } from "lucide-react";

const phases = [
  {
    title: "Consultation & brief",
    description: "We collect requirements, style preferences, budget range, and timelines for a tailored project roadmap.",
    icon: ClipboardCheck,
  },
  {
    title: "Concept & planning",
    description: "Layouts, mood boards, and material recommendations are prepared to align function and aesthetics.",
    icon: DraftingCompass,
  },
  {
    title: "Execution & supervision",
    description: "Our team coordinates vendors and site progress with quality checks and transparent updates at every stage.",
    icon: Hammer,
  },
  {
    title: "Handover & support",
    description: "Final walkthrough, snag resolution, and post-handover guidance ensure a smooth transition into your space.",
    icon: KeyRound,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">Our process</p>
        <h2 className="mb-12 max-w-3xl font-display text-3xl font-bold text-foreground md:text-5xl">A clear and client-friendly journey from idea to delivery</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <article key={phase.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-accent">
                <phase.icon className="h-5 w-5" />
              </span>
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Step {index + 1}</p>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{phase.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
