import { Compass, Camera, Heart, Hotel } from "lucide-react";

const amenities = [
  {
    icon: Heart,
    title: "Marriage Venue",
    description: "Our lush green lawns offer a breathtaking backdrop for your dream wedding.",
  },
  {
    icon: Camera,
    title: "Picturesque Corners",
    description: "Endless scenic spots around the lake and groves for perfect memories.",
  },
  {
    icon: Hotel,
    title: "Lakeside Stays",
    description: "Unique rooms designed atop the lake for an authentic serene experience.",
  },
  {
    icon: Compass,
    title: "Local Guides",
    description: "Expert guidance to explore the rural charm and natural beauty of the area.",
  },
];

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
          What's Included
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="glass-card rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-ocean/10 flex items-center justify-center">
                <amenity.icon className="w-7 h-7 text-ocean" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
