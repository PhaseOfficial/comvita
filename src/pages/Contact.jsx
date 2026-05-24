import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import contactHero from "../assets/office interior.jpeg";
import Layout from "../components/common/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Interior Finishing",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    const fieldName = id || name;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "263770000000"; // Updated placeholder
    const text = `*New Inquiry from Comvita Website*%0A%0A*Name:* ${formData.fullName}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const contactInfo = [
    {
      icon: "location_on",
      title: "Our Studio",
      details: "123 Industrial Way",
      subDetails: "Harare, Zimbabwe",
    },
    {
      icon: "call",
      title: "Direct Lines",
      details: "+263 77 000 0000",
      subDetails: "Available for Consultations Mon-Fri",
    },
    {
      icon: "mail",
      title: "Digital Inquiries",
      details: "info@comvita.co.zw",
      subDetails: "We respond within 24 hours",
    },
  ];

  return (
    <Layout>
      <main className="bg-surface text-primary overflow-hidden text-left pt-20">
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img
              src={contactHero}
              alt="Comvita Office"
              className="w-full h-full object-cover opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/60"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label text-label-sm text-secondary uppercase tracking-[0.4em] block"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-headline text-5xl md:text-7xl text-white"
            >
              Let's <span className="italic">Collaborate</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Bespoke interior solutions and high-end construction excellence. Reach out to discuss your next masterpiece.
            </motion.p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="relative z-20 -mt-24 px-margin-mobile md:px-margin-desktop mb-32">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-outline/5 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-2xl group-hover:text-white transition-colors">
                    {info.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl mb-4 text-primary">
                  {info.title}
                </h3>
                <p className="font-body text-body-md text-primary font-medium">{info.details}</p>
                <p className="font-body text-sm text-on-surface-variant/60 mt-2 leading-relaxed">
                  {info.subDetails}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="bg-primary py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
            
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="space-y-4">
                <span className="font-label text-label-sm text-secondary uppercase tracking-[0.2em]">The Inquiry</span>
                <h2 className="font-headline text-4xl md:text-5xl text-white leading-tight">
                  Share Your <span className="italic">Vision</span> With Us
                </h2>
                <p className="font-body text-lg text-white/50 max-w-md">
                  Whether it's a private residence or a commercial fit-out, our experts are ready to provide artisanal guidance.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  {[FaFacebook, FaTiktok, FaWhatsapp].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/40 hover:text-white">
                      <Icon className="text-2xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white/5 backdrop-blur-xl p-10 md:p-16 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Knight"
                      className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+263 ..."
                      className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alexander@luxury.com"
                    className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-white/40 ml-1">Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option className="bg-primary" value="Interior Finishing">Interior Finishing</option>
                    <option className="bg-primary" value="Bespoke Cabinetry">Bespoke Cabinetry</option>
                    <option className="bg-primary" value="Architectural Ceilings">Architectural Ceilings</option>
                    <option className="bg-primary" value="Commercial Fit-Out">Commercial Fit-Out</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Vision</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements..."
                    className="w-full bg-white/5 border-b border-white/20 px-4 py-4 text-white placeholder:text-white/10 resize-none focus:outline-none focus:border-secondary transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-on-secondary font-label text-label-sm uppercase tracking-widest py-6 shadow-2xl hover:bg-secondary/90 transition-all active:scale-[0.98]"
                >
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </motion.div>

          </div>
        </section>

      </main>
    </Layout>
  );
};

export default Contact;
