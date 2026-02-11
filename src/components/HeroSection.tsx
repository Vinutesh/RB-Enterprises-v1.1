import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";

const logos = ["Archaus", "DesignCo", "SpaceWorks", "ModernBuild", "UrbanNest", "StyleCraft"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-0 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="hero-glow-delay absolute -bottom-24 right-[10%] h-[18rem] w-[18rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl pb-12 pt-10 text-center md:pb-14">
          <h1 className="mb-5 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
            Crafted interiors and architecture for modern living
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            RB Enterprises delivers elegant, practical spaces for homes, offices, and hospitality venues with transparent planning,
            dependable timelines, and premium execution.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline" size="lg" className="rounded-full border-foreground/20 px-8 text-foreground hover:bg-foreground hover:text-background">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90">
              <a href="#services">View services</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 md:aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
              alt="Luxury modern home"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute left-4 top-4 hidden rounded-xl bg-background/90 px-4 py-3 backdrop-blur-sm md:block">
            <p className="text-sm font-semibold text-foreground">Smart planning</p>
            <p className="text-xs text-muted-foreground">Data-backed design and budget clarity</p>
          </div>

          <div className="absolute bottom-4 right-4 hidden rounded-xl bg-background/90 px-4 py-3 backdrop-blur-sm md:block">
            <div className="mb-1 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">Trusted delivery</p>
            <div className="mt-1 flex items-center gap-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">500+ clients served</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden border-y border-border py-5">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="mx-10 select-none text-lg font-bold text-muted-foreground/40 sm:text-xl">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
