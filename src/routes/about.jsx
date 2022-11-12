import { Helmet } from "react-helmet-async";

import { ButtonSocialMedia, Section } from "../components";

export default function About() {
  const onTheWebLinkData = [
    { id: 1, name: "github", url: "https://github.com/ersankarimi" },
    { id: 2, name: "youtube", url: "https://youtube.com/c/hajikoding" },
    { id: 3, name: "linkedin", url: "https://linkedin.com/in/ersankarimi" },
    { id: 4, name: "instagram", url: "https://instagram.com/ersankarimi" },
    { id: 5, name: "cv", url: "https://read.cv/ersankarimi" },
  ];

  return (
    <>
      <Helmet>
        <title>About | Ersan Karimi</title>
      </Helmet>

      <Section
        className="my-16 flex flex-col justify-center gap-4 font-m-plus text-neutral-custom-100"
        customKey={1}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            About me
          </span>
        </h1>
        <p>How are you? I hope you&apos;re doing well.</p>
        <p>
          Let me introduce myself since you&apos;ve arrived at this About page.
        </p>
        <p>Every day, I&apos;m a ...</p>
        <p>
          Informatics student at Institut Teknologi Kalimantan, Content Creator
          on{" "}
          <a
            href="https://www.youtube.com/c/hajikoding"
            className="font-bold underline"
          >
            Haji Koding YouTube Channel
          </a>{" "}
          , and Self-taught Front-End Web Developer.
        </p>
      </Section>

      <Section
        className="my-16 flex flex-col justify-center gap-4 font-m-plus text-neutral-custom-100"
        customKey={2}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            What is my focus right now ?
          </span>
        </h1>
        <p>
          Currently, I focus on studying and exploring the technology used or
          related to Front-End Web Development.
        </p>
        <p>And, I aspire to be a Front-End Web Developer.</p>
        <p>
          I do not yet have any professional work experience in Front-End Web
          Development, but I hope to obtain it soon😁.
        </p>
      </Section>

      <Section
        className="my-16 flex flex-col justify-center gap-4 font-m-plus text-neutral-custom-100"
        customKey={3}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            Why do I make videos on YouTube ?
          </span>
        </h1>
        <p>
          In fact, at this time I am not an expert in the field of Web
          Development or anything else related to Software Engineering.
        </p>
        <p>
          I created videos on YouTube to share what I have learned and practice
          my speaking, presentation, and other related skills.
        </p>
      </Section>
      <Section
        className="my-16 flex flex-col justify-center gap-4 font-m-plus text-neutral-custom-100"
        customKey={4}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            What other things I do ?
          </span>
        </h1>
        <p>I have hobbies such as football, basketball, and jogging.</p>
        <p>
          I also like to hang out with others in online or offline communities
          who share my interests.
        </p>
      </Section>

      <Section
        className="my-16 flex flex-col justify-center gap-4 font-m-plus text-neutral-custom-100"
        customKey={5}
      >
        <h1 className="text-xl font-semibold">
          <span className="border-b-2 border-neutral-custom-100/60">
            Social Media
          </span>
        </h1>
        <p>Follow and reach me on various social media. I also have a CV.</p>
        {onTheWebLinkData.map((link) => (
          <ButtonSocialMedia {...link} key={link.id}>
            {link.name}
          </ButtonSocialMedia>
        ))}
      </Section>
    </>
  );
}
