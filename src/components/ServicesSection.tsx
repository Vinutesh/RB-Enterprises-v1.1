import { Compass, Paintbrush, LayoutGrid, Flower2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    description: "Creating innovative structures that harmonize with their environment and serve your vision.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Transforming spaces into stunning reflections of style, comfort, and personality.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    description: "Optimizing layouts for maximum functionality, flow, and aesthetic impact.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    icon: Flower2,
    title: "Space Decoration",
    description: "Curating the perfect finishing touches that bring warmth and character to any room.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <p className="text-sm text-accent uppercase tracking-widest mb-2">What we offer</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mb-12">
          Services that shape spaces
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <service.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-sm">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                  View in detail <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
