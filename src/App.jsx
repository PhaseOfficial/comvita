import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route
        path="*"
        element={
          <div className="text-center mt-40 text-2xl font-headline-lg text-primary uppercase tracking-widest">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
