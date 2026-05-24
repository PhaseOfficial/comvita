import { motion } from "framer-motion";

const Testimonials = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-24 bg-surface-container-highest/20 text-left overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div 
          {...fadeInUp}
          className="relative bg-white p-16 md:p-24 rounded-none shadow-[40px_40px_80px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-16 items-start"
        >
          {/* Quote Icon Background */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <span className="material-symbols-outlined text-[200px]">format_quote</span>
          </div>

          <div className="w-20 h-20 shrink-0 bg-secondary flex items-center justify-center relative z-10">
            <span className="material-symbols-outlined text-4xl text-on-secondary">format_quote</span>
          </div>

          <div className="relative z-10 space-y-8">
            <div className="flex gap-2 text-secondary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            
            <p className="font-headline text-3xl md:text-4xl italic text-primary leading-tight">
              "Comvita redefined my expectations of what a finish should look like. Their attention to detail during the skimming and tiling phase was surgical. They didn't just build a kitchen; they crafted a masterpiece of functional art."
            </p>
            
            <div className="pt-4">
              <p className="font-label text-label-sm text-primary uppercase tracking-[0.2em]">— Takudzwa M., Luxury Estate Owner</p>
              <p className="font-body text-sm text-on-surface-variant/60 mt-1">Harare, Zimbabwe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
