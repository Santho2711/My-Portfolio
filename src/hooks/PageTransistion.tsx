import { motion } from "framer-motion";
import type React from "react";

const PageTransition:React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} // Crucial for every-page navigation
      transition={{ duration: 1 }} // Animation speed
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
