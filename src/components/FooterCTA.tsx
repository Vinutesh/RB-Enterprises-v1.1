import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <>
      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-6 max-w-3xl mx-auto">
            Let's create a space you'll love
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
            Ready to transform your vision into reality? Get in touch with our team for a free consultation.
          </p>
          <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 text-lg">
            Get a free quote!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="text-2xl font-bold text-foreground">
              Buildio<span className="text-accent">*</span>
            </a>
            <div className="flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Buildio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
