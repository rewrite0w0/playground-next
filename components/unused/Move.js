import { motion } from 'framer-motion';

export default function Move() {
  return (
    <motion.div
      animate={{
        x: 0,
        background: '#000',
        boxShadow: '10px 10px 0 rgba(0,0,0,0.2',
        position: 'fixed',
        transitionEnd: {
          display: 'none',
        },
      }}
    />
  );
}
