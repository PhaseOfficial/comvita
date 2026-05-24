import { motion } from "framer-motion";

const PaintStroke = ({ children, color = "#A4000B", className = "" }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1 left-0 w-full h-4 pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2 12 Q 25 8 50 12 T 98 12"
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M 5 16 Q 30 12 55 16 T 95 16"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        />
      </svg>
    </span>
  );
};

export default PaintStroke;
