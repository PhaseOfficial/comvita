import { motion } from "framer-motion";
import aboutImg from "../../assets/kitchen interior.jpeg";

const Certification = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-32 bg-surface text-left overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/4 h-full architectural-grid pointer-events-none opacity-40"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          {...fadeInUp}
          className="relative group"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border border-secondary/10 z-0 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl z-10">
            <img 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" 
              src={aboutImg} 
              alt="Comvita Luxury Interiors"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute -bottom-10 -right-10 bg-primary p-12 text-white z-20 shadow-2xl hidden lg:block">
            <p className="font-headline text-5xl mb-2">15+</p>
            <p className="font-label text-[10px] text-white/40 uppercase tracking-[0.2em] whitespace-nowrap">Years of Aesthetic Excellence</p>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-12">
          <div className="space-y-6">
            <span className="font-label text-label-sm text-secondary uppercase tracking-[0.3em] block">Our Story</span>
            <h2 className="font-headline text-5xl text-primary leading-tight">
              Curating <span className="italic font-serif-italic">Atmospheres</span> of Timeless Elegance
            </h2>
          </div>
          
          <div className="space-y-6 text-on-surface-variant/80 font-body text-body-lg leading-relaxed">
            <p>
              Comvita is more than a finishing provider; we are curators of residential and commercial spaces. Our expertise lies at the intersection of interior styling, advanced shading solutions, and sophisticated outdoor enhancements.
            </p>
            <p>
              From the tactile richness of bespoke curtains to the structural elegance of modern carports, we ensure every element of your property reflects a commitment to quality and architectural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-8 border-t border-outline/10">
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-primary">Styling</h4>
              <p className="font-body text-xs text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">Interior Refinement</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-primary">Shading</h4>
              <p className="font-body text-xs text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">Precision Systems</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-2xl text-primary">Outdoor</h4>
              <p className="font-body text-xs text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">Structural Beauty</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
