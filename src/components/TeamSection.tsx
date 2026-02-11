const team = [
  {
    name: "Alexander Wright",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Sophia Martinez",
    role: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <p className="text-sm text-accent uppercase tracking-widest mb-2">Our team</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mb-12">
          The dedicated team behind the craft
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
