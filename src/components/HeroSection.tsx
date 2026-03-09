import LandingPage from "@/assets/LandingPage.png";
import TopView from "@/assets/TopView.png";
import marriage from "@/assets/marriage .png"
import bedroom from "@/assets/rooms.png"
import pool from "@/assets/pool.png"

const features = [
  { image: TopView , label: "Lake View " },
  { image: marriage, label: "Marriage Venue" },
  { image: bedroom, label: "Luxury Rooms" },
  { image: pool, label: "Swimming Pool" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LandingPage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Feature Circles */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex flex-col items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-card/80 shadow-elevated hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img
                  src={feature.image}
                  alt={feature.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-card text-sm md:text-base font-medium text-center">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
