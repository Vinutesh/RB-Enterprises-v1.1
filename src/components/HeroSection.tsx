import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";

const logos = ["Archaus", "DesignCo", "SpaceWorks", "ModernBuild", "UrbanNest", "StyleCraft"];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto pt-12 pb-16">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm text-muted-foreground">#1 in Smart, Stylish Spaces</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 font-display">
            Crafting spaces that match your style and needs
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We blend creativity with precision to design interiors and architecture that reflect who you are — functional, beautiful, and timeless.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" className="rounded-full border-foreground/20 text-foreground hover:bg-foreground hover:text-background px-8">
              Get in touch
            </Button>
            <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8">
              View services
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
              alt="Luxury modern home"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 hidden md:block">
            <p className="text-sm font-semibold text-foreground">Smart planning</p>
            <p className="text-xs text-muted-foreground">Data-driven design approach</p>
          </div>

          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 hidden md:block">
            <p className="text-sm font-semibold text-foreground">Seamless process</p>
            <p className="text-xs text-muted-foreground">From concept to completion</p>
          </div>

          <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 hidden md:block">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">Client satisfaction</p>
            <div className="flex items-center gap-1 mt-1">
              <Users className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">500+ happy clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo ticker */}
      <div className="mt-16 border-t border-b border-border py-6 overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-muted-foreground/40 text-xl font-bold mx-12 select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
