import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "RB Enterprises transformed our outdated office into a modern, inspiring workspace. The team's attention to detail and creative vision exceeded all expectations.",
    name: "Sarah Mitchell",
    role: "Interior Design Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    quote: "From the initial consultation to the final walkthrough, the process was seamless. Our home feels like a luxury retreat now thanks to the RB Enterprises team.",
    name: "James Rodriguez",
    role: "Residential Architecture",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote: "Their space planning expertise completely changed how we use our retail environment. Sales increased 40% after the redesign. Absolutely phenomenal work.",
    name: "Emily Chen",
    role: "Commercial Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    quote: "Working with RB Enterprises was an absolute pleasure. They listened to our needs, respected our budget, and delivered a result that blew us away. Highly recommend!",
    name: "David Thompson",
    role: "Residential Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-sm text-accent uppercase tracking-widest mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display">
          Hear from our clients
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] mx-3 bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
