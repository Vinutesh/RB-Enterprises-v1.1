import { Link } from "react-router-dom";
import { Compass, Paintbrush, LayoutGrid, Flower2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    description: "Context-aware design that balances local codes, long-term functionality, and strong visual identity.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Refined interiors tailored to your brand or lifestyle with thoughtful materials, textures, and lighting.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    description: "Efficient circulation and zoning that improve comfort, usability, and day-to-day performance.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    icon: Flower2,
    title: "Turnkey Styling",
    description: "End-to-end finish styling and decor curation to deliver a polished and move-in-ready environment.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary/30 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">What we offer</p>
        <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl">Services that shape lasting spaces</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border/60">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/55 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <service.icon className="mb-2 h-7 w-7 text-accent" />
                <h3 className="mb-1 text-xl font-bold text-foreground md:text-2xl">{service.title}</h3>
                <p className="mb-4 max-w-sm text-sm text-muted-foreground">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                  Discuss this service <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
