import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TopView from "@/assets/TopView.png";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    setFormData({ name: "", phone: "", comment: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${TopView})` }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-card mb-2">
            Want to join us,
          </h2>
          <p className="text-xl md:text-2xl font-serif text-card/90 mb-8">
            but still have questions?
          </p>
          <p className="text-card/80 mb-8">Leave a request</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-card/95 border-card/50 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-card/95 border-card/50 text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="Comment"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              className="bg-card/95 border-card/50 text-foreground placeholder:text-muted-foreground min-h-24"
            />
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
