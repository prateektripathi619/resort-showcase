import LandingPage from "@/assets/LandingPage.png";
import TopView from "@/assets/TopView.png";
import marriage from "@/assets/marriage .png"
import bedroom from "@/assets/rooms.png"
import pool from "@/assets/pool.png"
import G1 from "@/assets/G1.png"
import G2 from "@/assets/G2.png"
import G3 from "@/assets/G3.jpeg"

const images = [
  { src: LandingPage, alt: "Luxury Resort" },
  { src: TopView , label: "Lake View" },
  
  { src: bedroom, label: "Luxury Rooms" },
  
  { src: G1, label: "G1" },
  { src: G2, label: "G2" },
  { src: G3, label: "G3" },
  
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.alt}
              className={`relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-500 group animate-fade-in cursor-pointer ${
                index === 0 || index === 6 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 6 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
