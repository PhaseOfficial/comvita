import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "../Cookies";
import BuilderAesthetic from "./BuilderAesthetic";

const Layout = ({ children }) => {
  return (
    <div className="bg-background min-h-screen font-body-md selection:bg-primary selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-gradient-to-tr from-secondary to-transparent"></div>
      
      <BuilderAesthetic />
      
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
