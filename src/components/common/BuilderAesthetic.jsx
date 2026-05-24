import { motion } from "framer-motion";
import { FaHammer, FaTools } from "react-icons/fa";
import { GiNails, GiPaintRoller, GiHandSaw } from "react-icons/gi";

const ToolIcon = ({ Icon, x, y, rotate, delay, size = 40 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2], 
      scale: 1,
      y: [0, -20, 0],
      rotate: [rotate, rotate + 10, rotate]
    }}
    transition={{
      opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      scale: { duration: 1, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
    className="fixed pointer-events-none z-[20] text-primary/30"
    style={{ left: x, top: y }}
  >
    <Icon size={size} />
  </motion.div>
);

const NailIcon = ({ x, y, rotate }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.25 }}
    className="fixed pointer-events-none z-[20] text-primary/20"
    style={{ left: x, top: y, rotate: `${rotate}deg` }}
  >
    <GiNails size={20} />
  </motion.div>
);

const BuilderAesthetic = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[20]">
      {/* Corner Paint Splashes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/10 blur-[100px] rounded-full" />
      
      <ToolIcon Icon={FaHammer} x="5%" y="15%" rotate={-20} delay={0.2} size={60} />
      <ToolIcon Icon={GiNails} x="85%" y="10%" rotate={45} delay={0.4} size={40} />
      <ToolIcon Icon={GiPaintRoller} x="10%" y="70%" rotate={15} delay={0.6} size={55} />
      <ToolIcon Icon={GiHandSaw} x="90%" y="80%" rotate={-30} delay={0.8} size={65} />
      <ToolIcon Icon={FaTools} x="45%" y="90%" rotate={10} delay={1} size={30} />
      
      {/* Scattered Nails */}
      <NailIcon x="2%" y="40%" rotate={120} />
      <NailIcon x="95%" y="30%" rotate={30} />
      <NailIcon x="15%" y="95%" rotate={200} />
      <NailIcon x="80%" y="85%" rotate={45} />
      
      {/* Animated Paint Drips */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        className="fixed top-0 left-[20%] w-1 h-24 bg-secondary/10 origin-top rounded-full blur-[1px]"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
        className="fixed top-0 left-[80%] w-1 h-16 bg-secondary/5 origin-top rounded-full blur-[1px]"
      />

      {/* Occasional Paint Brush Swipe */}
      <motion.div
        initial={{ x: "-100%", skewX: -20 }}
        animate={{ x: "200%" }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 10, ease: "linear" }}
        className="fixed top-1/2 left-0 w-[40%] h-32 bg-secondary/5 blur-3xl"
      />
    </div>
  );
};

export default BuilderAesthetic;
