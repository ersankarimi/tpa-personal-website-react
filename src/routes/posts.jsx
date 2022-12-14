import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { thumbnailHtml, thumbnailPyhton } from "../assets";
import { BlogCard, Section } from "../components";

export default function Posts() {
  const postsData = [
    {
      id: 1,
      title: "Tutorial HTML5",
      description:
        "Here we will both learn the basics of HTML5. We will discuss what is HTML, what are tags and attributes in HTML, how to create forms in HTML, what are HTML semantic tags, and many others.",
      pulishedDate: "21 October 2021",
      imgSource: thumbnailHtml,
      blogUrl:
        "https://youtube.com/playlist?list=PLJ0buff7jNKOpAWlC_wnBV-N5Elkayk4b",
    },
    {
      id: 2,
      title: "Tutorial Python",
      description:
        "Here we will both learn the basics of the Python programming language. We will cover variables, loops, lists, dictionaries, and many others.",
      pulishedDate: "4 October 2021",
      imgSource: thumbnailPyhton,
      blogUrl:
        "https://youtube.com/playlist?list=PLJ0buff7jNKO5MJ2nDrOV_jUmGXbJzBGv",
    },
    {
      id: 3,
      title: "Extensions for Writing HTML Code",
      description:
        "Here we will talk about what VSCode extensions will help us while writing HTML code.",
      pulishedDate: "21 June 2021",
      imgSource:
        "https://i.ytimg.com/vi/k4rthX766wQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtj5uVcJI9IondFFSisgXsOlM-BQ",
      blogUrl:
        "https://www.youtube.com/watch?v=k4rthX766wQ&list=PLJ0buff7jNKNf42GeLW-ucUrcOSZja5cy&index=1&t=456s",
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
        <title>Posts | Ersan Karimi</title>
      </Helmet>
      <Section
        className="mt-28 mb-12 flex flex-col gap-8 font-m-plus text-neutral-custom-100"
        customKey={1}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            Popular Posts.
          </span>
        </h1>
        <motion.div
          className="grid w-full grid-cols-1 gap-8  md:grid-cols-2 md:flex-row"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          {postsData.map((post) => (
            <motion.div variants={itemVariants} key={post.id}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
