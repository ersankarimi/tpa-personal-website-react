import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({ link, children }) {
  return (
    <Link to={`/${link}`}>
      <motion.button
        type="button"
        className="my-4 w-max rounded-md bg-[#66EBB9] px-3 py-2  hover:brightness-90 focus:outline focus:outline-2 focus:outline-[#66EBB9]/50 focus:ring-0"
        whileTap={{
          scale: 0.9,
        }}
      >
        <span className="relative flex items-center gap-2 text-sm font-medium text-[#1F2937]">
          {children}
          <FaChevronRight className="relative mr-2 mt-[2px] h-3 w-3 text-current opacity-75" />
        </span>
      </motion.button>
    </Link>
  );
}
