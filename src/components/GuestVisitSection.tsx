import guestVisit from "@/assets/kailash-kher-visit.jpeg";

export const GuestVisitSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={guestVisit}
              alt="Kailash Kher visiting Shyamkum Coconut Country Resort"
              className="w-full h-full max-h-[560px] object-cover object-center"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-ocean font-medium mb-3">
              A Special Visit
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Kailash Kher
            </h2>
            <p className="text-lg text-muted-foreground">
              Indian playback singer
            </p>
            <div className="mt-6 h-1 w-16 rounded-full bg-sunset" />
          </div>
        </div>
      </div>
    </section>
  );
};
