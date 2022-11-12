import { motion } from "framer-motion";

export default function Section({ children, customKey, className }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      transition: {
        delay: i / 10,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
      opacity: 1,
      y: 0,
    }),
  };

  return (
    <motion.section
      className={className}
      variants={variants}
      animate="visible"
      initial="hidden"
      key={customKey}
      custom={customKey}
      exit={{
        y: 100,
        opacity: 0,
      }}
    >
      {children}
    </motion.section>
  );
}
