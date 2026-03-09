import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="inline-block"
            >
              <img 
            src="/logo.png" 
            alt="Shyamkum Coconut Country Resort" 
            className="h-12 w-auto"
          />
            </a>
            <p className="text-card/70 text-sm leading-relaxed max-w-xs">
              Experience the perfect blend of luxury and nature at our serene coconut country resort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-card font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-card/70 hover:text-card transition-colors text-sm py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-card font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+9178824222" className="flex items-center gap-3 text-card/70 hover:text-card transition-colors text-sm">
                <Phone className="w-4 h-4 text-sunset" />
                +91 9178824222 , 06671224222
              </a>
              <a href="mailto:coconutcountry@gmail.com" className="flex items-center gap-3 text-card/70 hover:text-card transition-colors text-sm">
                <Mail className="w-4 h-4 text-sunset" />
                coconutcountry@gmail.com
              </a>
              <div className="flex items-start gap-3 text-card/70 text-sm">
                <MapPin className="w-4 h-4 text-sunset mt-0.5" />
                <span>Coconut Country Resort,<br />Odisha, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-card/50">
            <p>© {currentYear} Shyamkum Coconut Country Resort. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-card transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
