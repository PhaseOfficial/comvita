import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Portfolio Images
import curtains1 from "../../assets/full wall curtains.jpeg";
import curtains2 from "../../assets/very long curtains that look like window blinds.jpeg";
import blinds1 from "../../assets/office blinds.jpeg";
import blinds2 from "../../assets/office window blinds.jpeg";
import carport1 from "../../assets/parking shed.jpeg";
import carport2 from "../../assets/parking shed 3.jpeg";
import trellis1 from "../../assets/alluminium doors.jpeg";
import interior1 from "../../assets/bed room interior.jpeg";
import interior2 from "../../assets/kitchen interior.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: interior1, title: "Master Suite Interior", category: "Styling", size: "large" },
    { src: curtains1, title: "Bespoke Drapery", category: "Curtains", size: "small" },
    { src: blinds1, title: "Executive Shading", category: "Blinds", size: "small" },
    { src: carport1, title: "Modern Cantilever", category: "Carports", size: "medium" },
    { src: curtains2, title: "Sheer Elegance", category: "Curtains", size: "medium" },
    { src: trellis1, title: "Architectural Glazing", category: "Trellis", size: "small" },
    { src: interior2, title: "Culinary Curation", category: "Finishing", size: "large" },
    { src: blinds2, title: "Minimalist Roller", category: "Blinds", size: "small" },
    { src: carport2, title: "Residential Protection", category: "Carports", size: "medium" },
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <span className="font-label text-label-sm text-secondary uppercase tracking-[0.4em] block text-left">The Collection</span>
            <h2 className="font-headline text-5xl text-primary leading-tight text-left">
              A Legacy of <span className="italic font-serif-italic">Exquisite</span> Craft
            </h2>
          </div>
          <p className="font-body text-body-md text-on-surface-variant/60 max-w-sm text-left">
            Explore our curated portfolio of interior styling and structural enhancements.
          </p>
        </div>
      </div>

      {/* Masonry-Style Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop columns-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 md:space-y-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedImage(image)}
            className={`group relative overflow-hidden bg-primary cursor-pointer ${
              image.size === 'large' ? 'lg:row-span-2 aspect-[3/4]' : 
              image.size === 'medium' ? 'aspect-square' : 'aspect-square md:aspect-video lg:aspect-square'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
              <span className="font-label text-[10px] text-secondary uppercase tracking-widest mb-2">{image.category}</span>
              <h3 className="font-headline text-2xl text-white tracking-wide">{image.title}</h3>
            </div>
            
            {/* Hover Frame */}
            <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Simple Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-6 md:p-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white space-y-2">
                <h4 className="font-headline text-3xl">{selectedImage.title}</h4>
                <p className="font-label text-xs uppercase tracking-widest text-secondary">{selectedImage.category}</p>
              </div>
              <button className="absolute top-[-60px] right-0 text-white flex items-center gap-2 hover:text-secondary transition-colors">
                <span className="font-label text-xs uppercase tracking-widest">Close</span>
                <span className="material-symbols-outlined">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
