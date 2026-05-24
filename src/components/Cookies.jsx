import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return (
    <button 
      onClick={() => setIsVisible(true)}
      className="fixed bottom-24 left-6 bg-primary text-white p-3 rounded-xl cursor-pointer hover:-translate-y-1 z-50 transition-all active:scale-95 shadow-lg shadow-primary/20 border border-white/10"
      title="Cookie Settings"
    >
      <span className="material-symbols-outlined text-xl">cookie</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:justify-start md:items-end p-6 pointer-events-none">
      <div className="bg-white text-on-surface p-8 rounded-3xl border border-outline-variant shadow-2xl w-full max-w-md pointer-events-auto animate-fadeIn">
        <p className="font-label-md font-bold text-[10px] mb-4 uppercase tracking-[0.2em] text-accent">
          Privacy & Cookies
        </p>
        <p className="font-body-md text-sm mb-8 text-on-surface-variant leading-relaxed">
          Comvita uses cookies to ensure you get the best experience on our website. This helps us improve our service and provide relevant interior finishing solutions.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="flex-1 bg-surface-container border border-outline-variant px-6 py-3 rounded-xl font-label-md font-bold text-[10px] uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-all"
          >
            DECLINE
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-label-md font-bold text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg shadow-primary/20"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
