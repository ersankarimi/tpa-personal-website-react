import { motion } from "framer-motion";

import Badge from "./badge";

export default function ProjectCard({
  id,
  url,
  title,
  description,
  technologies,
}) {
  return (
    <a href={url} target="_blank" className="font-m-plus" rel="noreferrer">
      <motion.div
        className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]"
        whileHover={{
          padding: "4px",
        }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        layout
      >
        <motion.div
          className="flex h-full w-full flex-col gap-12 rounded-lg bg-gray-800 p-4"
          layout="size"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {technologies.map((tech) => (
              <Badge tech={tech} id={id} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
}
