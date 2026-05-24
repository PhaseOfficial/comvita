import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ctaImg from "../../assets/office interior.jpeg";

const HomeCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative py-48 overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover opacity-30 scale-110" 
          src={ctaImg} 
          alt="Luxury Design Consultation"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <span className="font-label text-label-sm text-secondary uppercase tracking-[0.5em] block">Start Your Journey</span>
            <h2 className="font-headline text-6xl md:text-8xl text-white leading-[1.1] max-w-4xl mx-auto">
              Bring Your Dream <span className="italic font-serif-italic text-secondary-container">Space</span> to Life
            </h2>
            <p className="font-body text-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Experience the Comvita standard of luxury. Partner with our artisans to curate an environment that reflects your sophisticated vision.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
            <Link 
              to="/contact"
              className="bg-secondary text-on-secondary font-label text-label-sm uppercase tracking-[0.2em] px-16 py-6 rounded-none hover:bg-secondary/90 transition-all shadow-2xl active:scale-[0.98]"
            >
              Request a Consultation
            </Link>
            <Link 
              to="/gallery"
              className="group border border-white/20 text-white font-label text-label-sm uppercase tracking-[0.2em] px-16 py-6 rounded-none hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4"
            >
              <span>View Portfolio</span>
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

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-white/10 hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-white/10 hidden md:block"></div>
    </section>
  );
};

export default HomeCTA;
