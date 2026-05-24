import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white w-full mt-auto relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="px-margin-mobile md:px-margin-desktop py-24">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <span className="font-headline text-3xl font-bold tracking-tighter text-white uppercase">
                Comvita
              </span>
            </Link>
            <p className="font-body text-body-md text-white/50 max-w-sm leading-relaxed">
              Zimbabwe's premier curators of architectural finishing. We specialize in the art of the perfect surface, from artisanal ceilings to precision masonry.
            </p>
            <div className="flex gap-6">
              {[FaFacebook, FaTiktok, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white/60 hover:text-white">
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="font-label text-label-sm uppercase tracking-[0.2em] text-secondary">Navigation</span>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="font-body text-body-md text-white/60 hover:text-white transition-colors" onClick={scrollToTop}>Home</Link>
              <Link to="/services" className="font-body text-body-md text-white/60 hover:text-white transition-colors" onClick={scrollToTop}>Services</Link>
              <Link to="/contact" className="font-body text-body-md text-white/60 hover:text-white transition-colors" onClick={scrollToTop}>Contact</Link>
            </nav>
          </div>

          <div className="space-y-8">
            <span className="font-label text-label-sm uppercase tracking-[0.2em] text-secondary">Inquiries</span>
            <div className="flex flex-col gap-4">
              <p className="font-body text-body-md text-white/60 leading-relaxed">
                123 Industrial Way<br />
                Harare, Zimbabwe
              </p>
              <a href="mailto:info@comvita.co.zw" className="font-body text-body-md text-white/60 hover:text-white transition-colors">info@comvita.co.zw</a>
              <a href="tel:+263770000000" className="font-body text-body-md text-white/60 hover:text-white transition-colors">+263 770 000 000</a>
            </div>
          </div>

        </div>
        
        <div className="max-w-container-max mx-auto border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-label text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © 2026 COMVITA CONSTRUCTION & INTERIOR FINISHING. ALL RIGHTS RESERVED.
          </span>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white/30 hover:text-white transition-colors font-label text-[10px] uppercase tracking-widest"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary transition-all">
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
