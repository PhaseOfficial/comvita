import { motion } from "framer-motion";

// Import images from assets
import bedRoom from "../../assets/bed room interior.jpeg";
import kitchen from "../../assets/kitchen interior.jpeg";
import office from "../../assets/office interior.jpeg";
import alluminiumDoors from "../../assets/alluminium doors.jpeg";
import curtains from "../../assets/full wall curtains.jpeg";
import officeBlinds from "../../assets/office blinds.jpeg";
import parkingShed from "../../assets/parking shed.jpeg";
import robodoor from "../../assets/robodoor.jpeg";
import shutters from "../../assets/shutters.jpeg";

const Gallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const images = [
    { src: bedRoom, title: "Master Suite Interior", category: "Residential" },
    { src: kitchen, title: "Modern Culinary Space", category: "Kitchen" },
    { src: office, title: "Executive Office Suite", category: "Commercial" },
    { src: alluminiumDoors, title: "Architectural Glazing", category: "Finishing" },
    { src: curtains, title: "Bespoke Soft Furnishings", category: "Decor" },
    { src: officeBlinds, title: "Professional Window Solutions", category: "Office" },
    { src: parkingShed, title: "Structural Steelwork", category: "Exterior" },
    { src: robodoor, title: "High-Security Aesthetics", category: "Security" },
    { src: shutters, title: "Premium Window Shutters", category: "Finishing" }
  ];

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="font-label text-label-sm text-secondary uppercase tracking-[0.2em]">Portfolio</span>
            <h2 className="font-headline text-headline-lg text-primary leading-tight">A Legacy of <span className="italic">Excellence</span></h2>
          </div>
          <p className="font-body text-body-md text-on-surface-variant max-w-md">
            Witness the Comvita standard of craftsmanship through our curated selection of high-end residential and commercial projects.
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden bg-primary-container"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
              <span className="font-label text-[10px] text-secondary uppercase tracking-widest mb-2">{image.category}</span>
              <h3 className="font-headline text-2xl text-white">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
