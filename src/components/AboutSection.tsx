import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import teamWorkingImg from "@/assets/team-working.jpg";

const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 80, suffix: "+", label: "Team members" },
  { value: 500, suffix: "+", label: "Completed projects" },
  { value: 30, suffix: "", label: "Industry awards" },
];

const values = [
  "Balance of style and function",
  "Timeless results that stand the test of time",
  "Thoughtful process from concept to completion",
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-5xl font-bold text-foreground">{count}{suffix}</p>
    </div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <p className="text-sm text-accent uppercase tracking-widest mb-2">Who we are</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display max-w-3xl mb-6">
          Designing with purpose, building with passion
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          We are a team of architects, designers, and dreamers dedicated to creating spaces that inspire. With over 15 years of experience, we bring innovation and craftsmanship to every project.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-t border-b border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">What drives us</h3>
            <div className="space-y-5">
              {values.map((val) => (
                <div key={val} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={teamWorkingImg}
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
