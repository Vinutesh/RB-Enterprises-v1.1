import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "The Horizon Villa",
    description: "A contemporary hillside villa featuring floor-to-ceiling glass walls that merge indoor luxury with breathtaking mountain views.",
    category: "Residential",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Urban Loft Revival",
    description: "A converted warehouse transformed into a vibrant living space, preserving industrial character while adding modern comforts.",
    category: "Interior",
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Serenity Office Complex",
    description: "A biophilic office design that integrates natural elements and sustainable materials for a healthier, more productive workspace.",
    category: "Commercial",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <p className="text-sm text-accent uppercase tracking-widest mb-2">Our work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mb-12">
          A showcase of our recent projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="group grid md:grid-cols-2 gap-6 items-center bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-secondary text-muted-foreground rounded-full px-3 py-1">{project.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-display">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                  View in detail <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
