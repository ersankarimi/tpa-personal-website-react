import {
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ButtonSocialMedia({ name, url, id, children }) {
  const iconsObject = {
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    github: <FaGithub />,
    cv: <FaFileAlt />,
  };

  return (
    <motion.a
      target="_blank"
      href={url}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: id / 3,
        },
      }}
    >
      <button
        type="button"
        className="flex items-center gap-2 rounded-md px-3 py-1 font-medium text-[#00C6B9] hover:bg-[#00C6B9]/[8%]"
      >
        {iconsObject[name]}
        {children === "cv"
          ? "CV"
          : children.slice(0, 1).toUpperCase() + children.slice(1)}
      </button>
    </motion.a>
  );
}
