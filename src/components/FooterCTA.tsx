import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <>
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mx-auto mb-6 max-w-3xl font-display text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Ready to build a smarter, more beautiful space?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Share your requirements and our team will respond with consultation slots, project timelines, and a practical execution plan.
          </p>
          <Button asChild size="lg" className="rounded-full bg-accent px-10 text-lg text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Get a free quote</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="RB Enterprises home">
              <img src="/rb-logo.svg" alt="RB Enterprises logo" className="h-12 w-auto" loading="lazy" />
              <span className="text-lg font-semibold text-foreground">RB Enterprises</span>
            </Link>
            <div className="flex items-center gap-6 md:gap-8">
              <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
              <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</a>
              <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Projects</a>
              <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 RB Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
