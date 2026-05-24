import { motion } from "framer-motion";

const Scribble = ({ d, x, y, rotate = 0, scale = 1, duration = 3, delay = 0 }) => (
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    className="fixed pointer-events-none z-[1] opacity-20"
    style={{ left: x, top: y, rotate: `${rotate}deg`, scale }}
  >
    <motion.path
      d={d}
      fill="transparent"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="text-secondary"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 2
      }}
    />
  </motion.svg>
);

const Shape = ({ type, x, y, size = 100, delay = 0 }) => (
  <motion.div
    className="fixed pointer-events-none z-[1] border border-secondary/10"
    style={{ 
      left: x, 
      top: y, 
      width: size, 
      height: size, 
      borderRadius: type === 'circle' ? '50%' : '2px' 
    }}
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      opacity: [0, 0.15, 0.15, 0],
      scale: [0.8, 1.1, 1.1, 0.8],
      rotate: [0, 90, 180, 270],
      y: [0, -30, 0]
    }}
    transition={{
      duration: 10,
      delay: delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const ArtisticBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hand-drawn scribbles/sketches */}
      <Scribble 
        d="M20,100 Q40,40 100,100 T180,100" 
        x="5%" y="10%" rotate={-15} scale={1.2} delay={0} 
      />
      <Scribble 
        d="M30,30 C50,30 50,170 170,170" 
        x="80%" y="15%" rotate={45} scale={0.8} delay={1} duration={4}
      />
      <Scribble 
        d="M100,20 L100,180 M20,100 L180,100" 
        x="15%" y="60%" rotate={10} scale={0.5} delay={2} 
      />
      <Scribble 
        d="M50,50 A40,40 0 1,1 50,51" 
        x="85%" y="75%" rotate={-20} scale={1.5} delay={0.5} duration={5}
      />
      
      {/* Geometric architectural elements */}
      <Shape type="circle" x="40%" y="15%" size={250} delay={0} />
      <Shape type="square" x="10%" y="40%" size={150} delay={2} />
      <Shape type="circle" x="70%" y="60%" size={300} delay={4} />
      <Shape type="square" x="45%" y="85%" size={80} delay={1} />

      {/* Floating Design Notes (Abstracted) */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed top-1/3 left-1/4 font-label text-[8px] uppercase tracking-[0.5em] text-secondary vertical-text"
        style={{ writingMode: 'vertical-rl' }}
      >
        Architectural Integrity // Bespoke Finishing
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-1/4 right-1/4 font-label text-[8px] uppercase tracking-[0.5em] text-secondary"
      >
        Curated Masterpiece // Precise Measurement
      </motion.div>

      {/* Subtle Grid Points */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, var(--secondary) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />
    </div>
  );
};

export default ArtisticBackground;
