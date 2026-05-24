import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Comvita redefined my expectations of what a finish should look like. Their attention to detail during the curtain installation and wall skimming was surgical. They didn't just build a space; they crafted a masterpiece of functional art.",
      author: "Takudzwa M.",
      location: "Luxury Estate Owner, Harare",
      rating: 5
    },
    {
      text: "The modern carport they installed is not just durable but adds a significant aesthetic value to our property. The engineering team was professional and the finishing is absolutely flawless. Highly recommended for bespoke work.",
      author: "Sarah L.",
      location: "Corporate Executive",
      rating: 5
    },
    {
      text: "We worked with Comvita for our new office blinds and interior styling. The result is a sophisticated environment that our clients constantly compliment. Their process is transparent and the delivery was punctual.",
      author: "James P.",
      location: "Interior Architect",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-surface-container-highest/20 overflow-hidden relative">
      {/* Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <span className="material-symbols-outlined text-[400px]">format_quote</span>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="font-label text-label-sm text-secondary uppercase tracking-[0.4em] block">Endorsements</span>
          <h2 className="font-headline text-5xl text-primary leading-tight">The <span className="italic font-serif-italic">Voice</span> of Satisfaction</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-12 md:p-24 shadow-2xl relative"
            >
              {/* Star Rating */}
              <div className="flex gap-2 text-secondary mb-10 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>

              <blockquote className="font-headline text-3xl md:text-4xl italic text-primary leading-snug text-center mb-12">
                "{testimonials[activeIndex].text}"
              </blockquote>

              <div className="text-center space-y-2">
                <p className="font-label text-label-sm text-primary uppercase tracking-[0.2em] font-bold">
                  — {testimonials[activeIndex].author}
                </p>
                <p className="font-body text-sm text-on-surface-variant/60 italic">
                  {testimonials[activeIndex].location}
                </p>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-12 left-12 md:top-20 md:left-20 w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-secondary text-2xl">format_quote</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-6 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-[2px] transition-all duration-500 ${
                  activeIndex === index ? 'w-12 bg-secondary' : 'w-6 bg-primary/10 hover:bg-primary/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Side Arrows (Desktop) */}
          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-[-80px] top-1/2 -translate-y-1/2 hidden xl:flex text-primary/20 hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-5xl">west</span>
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-[-80px] top-1/2 -translate-y-1/2 hidden xl:flex text-primary/20 hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-5xl">east</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
