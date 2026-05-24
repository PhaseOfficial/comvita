import { motion } from "framer-motion";

const BrandStory = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-24 bg-tertiary-container text-white text-left relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-10">
            <div className="space-y-4">
              <span className="font-label text-label-sm text-secondary uppercase tracking-[0.3em]">The Philosophy</span>
              <h2 className="font-headline text-headline-lg leading-tight">
                The <span className="italic">Comvita</span> Standard of Timeless Luxury
              </h2>
            </div>
            
            <p className="font-body text-body-lg text-white/70 leading-relaxed">
              We don't just finish spaces; we curate atmospheres. Our approach is rooted in the belief that luxury is found in the unspoken details—the perfect alignment of a tile, the seamless transition of a ceiling, and the tactile richness of a hand-finished wall.
            </p>

            <div className="space-y-8 pt-4">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-white mb-2">Artisanal Mastery</h4>
                  <p className="font-body text-body-md text-white/50">Our team consists of specialized craftsmen dedicated to the highest standards of architectural finishing.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10">
                  <span className="material-symbols-outlined text-secondary text-2xl">auto_awesome</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-white mb-2">Bespoke Solutions</h4>
                  <p className="font-body text-body-md text-white/50">Every project is a unique collaboration, tailored to the specific vision and lifestyle of our clients.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-10 border border-white/10 aspect-square flex flex-col justify-between group hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-secondary text-4xl group-hover:scale-110 transition-transform">payments</span>
              <div className="space-y-4">
                <h4 className="font-headline text-2xl text-white">Value Engineering</h4>
                <p className="font-body text-sm text-white/50 leading-relaxed">Achieving high-end results through smart material selection and efficient processes.</p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg p-10 border border-white/10 aspect-square flex flex-col justify-between group hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-secondary text-4xl group-hover:scale-110 transition-transform">schedule</span>
              <div className="space-y-4">
                <h4 className="font-headline text-2xl text-white">Punctual Delivery</h4>
                <p className="font-body text-sm text-white/50 leading-relaxed">Respecting timelines with meticulous project management and dedicated site supervision.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
