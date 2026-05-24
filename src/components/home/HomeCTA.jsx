import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ctaBg from "../../assets/office interior.jpeg";

const HomeCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-primary">
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover opacity-30 scale-110" 
          src={ctaBg} 
          alt="Luxury Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center text-white">
        <motion.div {...fadeInUp} className="space-y-8">
          <span className="font-label text-label-sm text-secondary uppercase tracking-[0.3em]">Begin Your Journey</span>
          <h2 className="font-headline text-display-lg leading-[1.1] max-w-4xl mx-auto">
            Ready to <span className="italic">Elevate</span> Your Architectural Vision?
          </h2>
          <p className="font-body text-body-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Partner with Comvita for uncompromising quality and artisanal finishing. Let us transform your space into a curated masterpiece.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
            <Link 
              to="/contact"
              className="bg-secondary text-on-secondary font-label text-label-sm uppercase tracking-widest px-12 py-5 rounded-none hover:bg-secondary/90 transition-all shadow-2xl"
            >
              Request a Consultation
            </Link>
            <Link 
              to="/services"
              className="border border-white/20 backdrop-blur-md text-white font-label text-label-sm uppercase tracking-widest px-12 py-5 rounded-none hover:bg-white hover:text-primary transition-all"
            >
              Our Specializations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
