import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImg from "../../assets/bed room interior.jpeg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover brightness-[0.6] scale-110" 
          src={heroImg} 
          alt="Luxury Interior Design"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none architectural-grid"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="font-label text-label-sm uppercase tracking-[0.4em] text-secondary">
              Exquisite Interior & Exterior Finishing
            </span>
          </motion.div>
          
          <h1 className="font-headline text-display-lg text-white mb-8 leading-[1.05]">
            Transforming Spaces with <span className="italic font-serif-italic text-secondary-container">Style</span> & Comfort
          </h1>
          
          <p className="font-body text-body-lg text-white/70 mb-12 max-w-2xl leading-relaxed">
            Comvita is your trusted provider of elegant interior styling, bespoke shading solutions, and sophisticated outdoor enhancements designed for the modern lifestyle.
          </p>
          
          <div className="flex flex-wrap gap-8">
            <Link 
              to="/services"
              className="bg-secondary text-on-secondary font-label text-label-sm uppercase tracking-widest px-12 py-6 rounded-none hover:bg-secondary/90 transition-all shadow-2xl hover:shadow-secondary/20 active:scale-[0.98]"
            >
              View Services
            </Link>
            <Link 
              to="/contact"
              className="group flex items-center gap-4 text-white font-label text-label-sm uppercase tracking-widest px-4 py-6 transition-all border border-white/20 hover:bg-white hover:text-primary"
            >
              <span>Get a Quote</span>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="material-symbols-outlined text-sm"
              >
                arrow_forward
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Subtle Decorative) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full border border-white/5 pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[20%] w-64 h-64 rounded-full border border-white/5 pointer-events-none"
      />

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
      >
        <span className="font-label text-[10px] uppercase tracking-[0.3em]">Discover Comvita</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
