import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";

// Import local images from assets
import curtainsImg from "../assets/full wall curtains.jpeg";
import blindsImg from "../assets/office blinds.jpeg";
import carportsImg from "../assets/parking shed.jpeg";
import trellisImg from "../assets/alluminium doors.jpeg";
import processBg from "../assets/office interior.jpeg";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const services = [
    {
      id: "01",
      title: "Luxury Curtains",
      description: "Transform your living spaces with our curated collection of luxury curtains. We combine high-end fabrics with precision engineering to create window dressings that define the character of your home.",
      subText: "From expansive full-wall drapery in master suites to elegant living room installations, our bespoke solutions are tailored to your unique architectural volume.",
      features: ["Custom Sizing & Professional Measurement", "Premium Fabric Sourcing", "Expert Track & Rail Installation", "Automated Motorization Options"],
      image: curtainsImg,
      cta: "Enquire for Curtains"
    },
    {
      id: "02",
      title: "Modern Blinds",
      description: "Our blind systems offer the ultimate in light control and privacy without compromising on minimalist aesthetics. Designed for both high-end residential and professional office environments.",
      subText: "Explore our range of roller blinds, Venetian systems, and vertical solutions. Each installation features clean lines and smooth operation for a modern, clutter-free look.",
      features: ["Roller, Venetian & Vertical Systems", "High-Performance Office Solutions", "Thermal & UV Protection Fabrics", "Minimalist Hardware Design"],
      image: blindsImg,
      cta: "Explore Blind Range"
    },
    {
      id: "03",
      title: "Designer Carports",
      description: "Extend your property's architectural language to the exterior with our stylish modern carports. We build structures that provide superior protection while enhancing curb appeal.",
      subText: "Our carports are engineered for durability and weather resistance, utilizing high-grade materials that withstand the elements while maintaining a sleek, modern silhouette.",
      features: ["Engineered Structural Integrity", "Weather-Resistant Finishes", "Custom Design Integration", "Professional Site Supervision"],
      image: carportsImg,
      cta: "Start Carport Project"
    },
    {
      id: "04",
      title: "Decorative Trellis",
      description: "Add elegance and functionality to your garden or patio with our decorative trellis installations. Perfect for creating private sanctuaries or supporting architectural greenery.",
      subText: "We specialize in bespoke trellis work that serves as both a structural support and a visual centerpiece, blending seamlessly with your outdoor finishing.",
      features: ["Bespoke Pattern Design", "Durable Outdoor Materials", "Patio & Garden Integration", "Precision Wall Mounting"],
      image: trellisImg,
      cta: "Design Your Trellis"
    }
  ];

  const processSteps = [
    { num: "1", title: "Consultation", desc: "A personal discovery session to understand your aesthetic preferences and technical needs." },
    { num: "2", title: "Design Planning", desc: "Detailed architectural mapping and conceptual visualization of your bespoke solution." },
    { num: "3", title: "Material Selection", desc: "Curating a palette of premium fabrics and hardware from our exclusive global suppliers." },
    { num: "4", title: "Installation", desc: "Master-led on-site execution with surgical precision and minimal disruption." },
    { num: "5", title: "Final Finishing", desc: "A meticulous quality check and final polish to ensure the Comvita standard is achieved." }
  ];

  const faqs = [
    { q: "How long does a custom curtain installation take?", a: "Typically, the process from consultation to final hanging takes 2-4 weeks, depending on fabric availability and complexity of the motorization systems." },
    { q: "Do you provide weather warranties for carports?", a: "Yes, all our carport structures come with a comprehensive structural and weather-resistance warranty, ensuring long-term peace of mind." },
    { q: "Can your blinds be integrated into smart home systems?", a: "Absolutely. We offer a range of automated blind solutions that can be fully integrated with major smart home hubs for seamless control." },
    { q: "Do you offer nationwide service in Zimbabwe?", a: "While our studio is based in Harare, we are fully equipped for nationwide travel for significant residential and commercial installations." }
  ];

  return (
    <Layout>
      <main className="bg-surface">
        {/* Page Header */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img 
              alt="Services Banner" 
              className="w-full h-full object-cover opacity-40 scale-105" 
              src={processBg} 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/80"></div>
          </div>
          <div className="relative z-10 text-center px-margin-mobile max-w-5xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label text-label-sm text-secondary uppercase tracking-[0.5em] block"
            >
              The Comvita Collection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-headline text-6xl md:text-8xl text-white leading-none"
            >
              Our <span className="italic">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-body text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Bespoke finishing solutions for those who value artisanal craftsmanship and architectural integrity.
            </motion.p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30">
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
          </div>
        </section>

        {/* Individual Service Sections */}
        <section className="py-32 container mx-auto px-margin-mobile md:px-margin-desktop relative">
          <div className="absolute inset-0 architectural-grid pointer-events-none"></div>
          
          <div className="space-y-48 relative z-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                {...fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-20 group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute -inset-4 border border-secondary/20 z-0 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                  <div className="relative overflow-hidden aspect-[4/5] bg-primary-container z-10">
                    <img 
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                      src={service.image} 
                      alt={service.title} 
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-10 text-left">
                  <div className="space-y-4">
                    <span className="text-secondary font-label text-label-sm uppercase tracking-[0.3em]">{service.id} / Catalog</span>
                    <h2 className="font-headline text-5xl text-primary leading-tight">{service.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-on-surface-variant font-body text-xl leading-relaxed">{service.description}</p>
                    <p className="text-on-surface-variant/60 font-body text-body-md italic">{service.subText}</p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 gap-4 pt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-4 text-on-surface">
                        <span className="w-6 h-[1px] bg-secondary"></span>
                        <span className="font-label text-label-sm uppercase tracking-widest opacity-70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact"
                    className="inline-block mt-8 bg-primary text-on-primary px-12 py-6 font-label text-label-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-xl active:scale-[0.98]"
                  >
                    {service.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section (Timeline) */}
        <section className="relative py-32 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")'
          }}></div>

          <div className="relative z-10 container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-24 space-y-6">
              <span className="font-label text-label-sm text-secondary uppercase tracking-[0.4em]">Methodology</span>
              <h2 className="font-headline text-5xl md:text-6xl leading-tight">Our <span className="italic">Process</span></h2>
              <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {processSteps.map((step) => (
                <motion.div 
                  key={step.num}
                  {...fadeInUp}
                  className="space-y-8 relative group"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="font-headline text-8xl text-white/5 absolute -top-8 group-hover:text-secondary/10 transition-colors">{step.num}</div>
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md relative z-10">
                       <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    {/* Connection Line */}
                    {parseInt(step.num) < 5 && (
                      <div className="hidden md:block absolute left-[calc(50%+32px)] right-[-50%] h-[1px] bg-white/10 top-1/2"></div>
                    )}
                  </div>
                  <div className="text-center space-y-4 pt-4">
                    <h3 className="font-headline text-2xl text-white">{step.title}</h3>
                    <p className="font-body text-sm text-white/40 leading-relaxed px-4">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (Accordion) */}
        <section className="py-32 container mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3 space-y-6">
              <span className="font-label text-label-sm text-secondary uppercase tracking-[0.3em]">Knowledge</span>
              <h2 className="font-headline text-4xl text-primary leading-tight">Common <span className="italic text-secondary">Queries</span></h2>
              <p className="font-body text-on-surface-variant/60 leading-relaxed">Everything you need to know about partnering with Comvita for your interior finishing.</p>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-outline/10 overflow-hidden bg-white hover:border-secondary/30 transition-colors">
                  <button 
                    className="w-full flex justify-between items-center px-8 py-8 text-left transition-all group"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-headline text-2xl text-primary group-hover:text-secondary transition-colors">{faq.q}</span>
                    <motion.span 
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100"
                    >
                      keyboard_arrow_down
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 font-body text-body-lg text-on-surface-variant leading-relaxed">
                          <div className="w-12 h-[1px] bg-secondary/20 mb-6"></div>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-48 bg-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 architectural-grid opacity-[0.05]"></div>
          <div className="container mx-auto px-margin-mobile relative z-10 space-y-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="font-label text-label-sm text-secondary uppercase tracking-[0.4em]">Next Steps</span>
              <h2 className="font-headline text-6xl md:text-7xl leading-tight">Define Your <span className="italic">Sanctuary</span></h2>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                to="/contact"
                className="bg-primary text-on-primary px-16 py-6 font-label text-label-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              >
                Request a Proposal
              </Link>
              <Link 
                to="/contact"
                className="border border-primary/20 text-primary px-16 py-6 font-label text-label-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
              >
                Contact Specialist
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services;
