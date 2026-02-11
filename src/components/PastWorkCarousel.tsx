const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
];

const PastWorkCarousel = () => {
  return (
    <section className="overflow-hidden py-16 md:py-20">
      <div className="container mx-auto mb-10 px-4">
        <p className="mb-2 text-sm uppercase tracking-widest text-accent">Our portfolio</p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">Past work highlights</h2>
      </div>

      <div className="flex animate-scroll-left-slow">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="mx-2 flex-shrink-0 md:mx-3">
            <div className="h-36 w-36 overflow-hidden rounded-full border border-border md:h-52 md:w-52">
              <img src={src} alt="Project" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastWorkCarousel;
