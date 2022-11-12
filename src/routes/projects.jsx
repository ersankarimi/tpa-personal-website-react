import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { ProjectCard, Section } from "../components";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      url: "https://testsatu.netlify.app/",
      title: "Explora web tools",
      description:
        "Explora web tools is tools for web development. You’ll find a preview and code generators to help you with your front-end web projects.",
      technologies: [
        "react",
        "javascript",
        "tailwindcss",
        "reactrouter",
        "framermotion",
      ],
    },
    {
      id: 2,
      title: "Birthday Reminder Informatika 2020",
      url: "https://birthdayreminderinformatika2020.netlify.app/",
      description:
        "This project displays a list of names, dates of birth, and ages of each student of Informatics Institut Teknologi Kalimantan Kalimantan batch 2020.",
      technologies: ["react", "javascript", "tailwindcss", "reactrouter"],
    },
    {
      id: 3,
      title: "Youtube Clone",
      url: "https://youtube-like-clone.netlify.app/",
      description:
        "I tried to clone YouTube by displaying a list of youtube videos from the data retrieval through the API, being able to play the youtube videos, being able to like and dislike the videos.",
      technologies: [
        "react",
        "javascript",
        "tailwindcss",
        "reactrouter",
        "axios",
      ],
    },
    {
      id: 4,
      url: "https://halobuku.netlify.app/",
      title: "Halo Buku",
      description: "Commerce to buy various books such as novels.",
      technologies: ["nextjs", "tailwindcss", "typescript"],
    },
    {
      id: 4,
      url: "https://ouroboros-tech.netlify.app/",
      title: "Ouroboros Technologies",
      description:
        "This is the official website for Ouroboros Technologies. Ouroboros Technologies is a Collage Community at Institut Teknologi Kalimantan.",
      technologies: ["nextjs", "tailwindcss", "javascript"],
    },
  ];

  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <Helmet>
        <title>Projects | Ersan Karimi</title>
      </Helmet>
      <Section
        className="mt-20 mb-12 flex flex-col gap-8 font-m-plus text-neutral-custom-100"
        customKey={1}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            My personal projects.
          </span>
        </h1>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 md:grid-cols-2"
        >
          {projectsData.map((project) => (
            <motion.div variants={itemVariants} key={project.id}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
