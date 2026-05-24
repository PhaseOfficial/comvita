import { motion } from "framer-motion";

const TrustBanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const features = [
    {
      title: "Premium Materials",
      icon: "verified",
      description: "Sourcing only the finest fabrics, timber, and alloys for lasting architectural beauty."
    },
    {
      title: "Modern Designs",
      icon: "architecture",
      description: "Contemporary aesthetics that blend structural integrity with current interior trends."
    },
    {
      title: "Professional Installation",
      icon: "engineering",
      description: "Master-led execution ensuring every screw and seam meets the highest standard."
    },
    {
      title: "Custom Solutions",
      icon: "design_services",
      description: "Bespoke engineering for unique spaces that standard off-the-shelf products cannot fill."
    },
    {
      title: "Value Focused",
      icon: "payments",
      description: "Smart material selection and efficient processes that maximize your design investment."
    },
    {
      title: "Client Satisfaction",
      icon: "sentiment_satisfied",
      description: "A 100% commitment to delivering a finish that exceeds your aesthetic expectations."
    }
  ];

  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")'
      }}></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.span {...fadeInUp} className="font-label text-label-sm text-secondary uppercase tracking-[0.4em] block">
            Why Comvita
          </motion.span>
          <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="font-headline text-5xl md:text-6xl leading-tight">
            The Standard of <span className="italic font-serif-italic text-secondary-container">Excellence</span>
          </motion.h2>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="w-24 h-[1px] bg-secondary mx-auto"></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center relative transition-transform duration-500 group-hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </span>
                <div className="absolute -inset-2 border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-headline text-2xl tracking-wide">{feature.title}</h3>
                <p className="font-body text-body-md text-white/40 leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Premium Fabrics", value: "200+" },
            { label: "Expert Craftsmen", value: "25" },
            { label: "Happy Clients", value: "100%" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              {...fadeInUp}
              transition={{ delay: 0.6 + (index * 0.1) }}
              className="text-center space-y-2"
            >
              <p className="font-headline text-4xl md:text-5xl text-secondary">{stat.value}</p>
              <p className="font-label text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
