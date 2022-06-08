import { motion, useMotionValue } from "framer-motion";

export default function FM() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return <motion.div initial="hidden" animate="visible" variants={variants} />;
}
