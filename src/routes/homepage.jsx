import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { thumbnailHtml } from "../assets";
import { BlogCard, Button, ButtonSocialMedia, Section } from "../components";

export default function Homepage() {
  const onTheWebLinkData = [
    { id: 1, name: "github", url: "https://github.com/ersankarimi" },
    { id: 2, name: "youtube", url: "https://youtube.com/c/hajikoding" },
    { id: 3, name: "linkedin", url: "https://linkedin.com/in/ersankarimi" },
    { id: 4, name: "instagram", url: "https://instagram.com/ersankarimi" },
    { id: 5, name: "cv", url: "https://read.cv/ersankarimi" },
  ];

  const blogData = [
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

  return (
    <>
      <Helmet>
        <title>Home | Ersan Karimi</title>
      </Helmet>

      <Section
        className="my-12 flex flex-col justify-center gap-2 font-m-plus text-neutral-custom-100"
        customKey={1}
      >
        <h1 className="font-m-plus text-4xl font-bold">Ersan Karimi</h1>
        <p className="text-base opacity-80">
          a Student, Content Creator, and Self-taught Front-End Web Developer.
        </p>
      </Section>

      <Section
        className="my-12 flex flex-col items-center gap-8 font-m-plus text-neutral-custom-100"
        customKey={2}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            <span className="border-b-2 border-neutral-custom-100/60">
              About me
            </span>
          </h1>
          <p className="indent-6">
            I&apos;m a student of Informatics at Institut Teknologi Kalimantan.
            I&apos;m presently studying Front-End Web Development. I currently
            concentrate on HTML, CSS, Javascript, and React.js technologies. I
            am also pleased to share my previous knowledge on my YouTube
            channel, Haji Koding.
          </p>
        </div>
        <Button link="about">More about me</Button>
      </Section>

      <Section
        className="my-12 flex flex-col gap-8 font-m-plus text-neutral-custom-100"
        customKey={3}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            <span className="border-b-2 border-neutral-custom-100/60">
              On the web
            </span>
          </h1>

          <motion.div
            className="flex flex-col gap-2"
            initial={{
              opacity: 0,
              transition: {
                delay: 2,
              },
            }}
            animate={{
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
              },
            }}
          >
            {onTheWebLinkData.map((link) => (
              <ButtonSocialMedia {...link} key={link.id}>
                {link.name}
              </ButtonSocialMedia>
            ))}
            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              <div className="grid w-full grid-cols-1 gap-8  md:grid-cols-2 md:flex-row">
                {blogData.map((blog) => (
                  <BlogCard {...blog} key={blog.id} />
                ))}
              </div>
              <Button link="blog">Popular posts</Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
