import { AnimatePresence } from "framer-motion";

import { avatarHero, ellipseHero } from "../../assets";

import Footer from "./footer";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-12 flex-1 px-6 py-3 md:px-12 lg:py-4 xl:px-24 2xl:px-28">
        <section className="my-8">
          <div className="group relative flex  items-center justify-center p-8">
            <img
              src={ellipseHero}
              alt="Ellipse Illustration"
              className="absolute -top-8 bottom-0 -z-[1] bg-cover bg-no-repeat object-cover duration-200 ease-in group-hover:rotate-45 group-hover:scale-110"
            />

            <picture className="flex justify-center duration-300 group-hover:scale-105">
              <source media="(min-width:360px)" srcSet={avatarHero} />
              <img src={avatarHero} alt="Ersan Profile" />
            </picture>
          </div>
        </section>

        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
