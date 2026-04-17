import TopView from "@/assets/TopView.png";
import waterfall from "@/assets/waterfall.png"
import bornfire from "@/assets/bornfire.png"

const destinations = [
  {
    days: "Days 1-3",
    title: "Lake View",
    image: TopView,
  },
  {
    days: "Days 4-5",
    title: "Near by WaterFall",
    image: waterfall,
  },
  {
    days: "Days 6-7",
    title: "Bonfire ",
    image: bornfire,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
          About The Resort
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-foreground">
              Your Escape<br />Awaits
            </h3>
            <p className="text-lg text-ocean font-medium">
              Experience Unrivaled Luxury Resort 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nestled amidst lush coconut groves, Shyamkum Coconut Country Resort offers a serene escape into nature’s calm. Located atop the lake, rooms have a great view for unwinding.  Designed for relaxation and authentic rural charm, the resort blends eco-friendly living with modern comforts. Guests can unwind in peaceful surroundings, savour local flavours, and reconnect with nature—making it an ideal destination for rejuvenation, family getaways, and soulful countryside experiences. We host marriage & other  functions in our lawn.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experience the perfect harmony of eco-friendly luxury and traditional charm. From serene lakeside mornings to vibrant evening celebrations on our sprawling event lawns, Shyamkum Coconut Country Resort is the ultimate canvas for your next escape or milestone event. Join us in the heart of the countryside and rediscover what it means to truly relax.
            </p>
          </div>

          {/* Right Content - Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 pl-8 lg:pl-20">
              {destinations.map((dest, index) => (
                <div
                  key={dest.title}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-8 lg:-left-12 top-4 w-4 h-4 rounded-full bg-ocean border-4 border-card" />
                  
                  {/* Day Label */}
                  <div className="text-sm text-muted-foreground mb-2"> </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {dest.title}
                  </h4>
                  
                  {/* Image */}
                  <div className="rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
