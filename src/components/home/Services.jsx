import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Service Images
import curtainsImg from "../../assets/full wall curtains.jpeg";
import blindsImg from "../../assets/office window blinds.jpeg";
import carportImg from "../../assets/parking shed 2.jpeg";
import trellisImg from "../../assets/alluminium doors.jpeg";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const previewServices = [
    {
      title: "Curtains",
      image: curtainsImg,
      description: "Bespoke luxury drapery featuring premium fabrics and artisanal hanging techniques for elegant homes.",
      icon: "curtains"
    },
    {
      title: "Blinds",
      image: blindsImg,
      description: "Precision light control with our modern roller, Venetian, and professional office shading systems.",
      icon: "blinds"
    },
    {
      title: "Carports",
      image: carportImg,
      description: "Sophisticated outdoor structures engineered for durability and architectural weather resistance.",
      icon: "garage"
    },
    {
      title: "Trellis",
      image: trellisImg,
      description: "Decorative and functional trellis installations that add architectural rhythm to gardens and patios.",
      icon: "grid_view"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-6">
            <span className="font-label text-label-sm text-secondary uppercase tracking-[0.4em] block text-left">Our Portfolio</span>
            <h2 className="font-headline text-5xl text-primary leading-tight text-left">
              Bespoke <span className="italic font-serif-italic">Finishing</span> Solutions
            </h2>
          </div>
          <Link 
            to="/services" 
            className="font-label text-label-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors border-b border-primary/20 pb-2 flex items-center gap-2 group shrink-0"
          >
            View Full Catalog
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewServices.map((service, index) => (
            <motion.div 
              key={service.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-none shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-outline/5 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                {/* Icon Overlay */}
                <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-secondary">{service.icon}</span>
                  <span className="font-headline text-2xl tracking-wide">{service.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <p className="font-body text-body-md text-on-surface-variant/80 leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-3 font-label text-[10px] uppercase tracking-widest text-primary hover:text-secondary transition-all group/link pt-4"
                >
                  Learn More
                  <span className="material-symbols-outlined text-xs group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
