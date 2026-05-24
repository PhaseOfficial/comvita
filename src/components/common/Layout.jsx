import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "../Cookies";
import ArtisticBackground from "./ArtisticBackground";

const Layout = ({ children }) => {
  return (
    <div className="bg-surface min-h-screen font-body selection:bg-secondary selection:text-on-secondary relative">
      {/* Global Background Layer */}
      <ArtisticBackground />
      
      <Header />
      
      <main className="min-h-screen relative z-10">
        {children}
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;

