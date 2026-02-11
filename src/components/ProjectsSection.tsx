import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "The Horizon Villa",
    description: "A contemporary hillside villa with panoramic glazing, privacy-focused zoning, and sustainable finishes.",
    category: "Residential",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Urban Loft Revival",
    description: "A warehouse conversion that preserves industrial soul while introducing warm, practical modern living.",
    category: "Interior",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Serenity Office Complex",
    description: "A biophilic office concept designed to improve focus, wellbeing, and collaborative energy.",
    category: "Commercial",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">Our work</p>
        <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl">Recent projects that blend beauty and performance</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.title} className="group grid items-center gap-6 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/30 md:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">{project.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-6 text-muted-foreground">{project.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                  Enquire about similar work <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
            <Link to="/contact">Start your project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
