import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { navbarLogo } from "../../assets";

export default function Header() {
  const { pathname } = useLocation();

  const [selectedLink, setSelectedLink] = useState(
    pathname === "/" ? "home" : pathname.slice(1)
  );
  const [isUnderLargeSize] = useState(window.innerWidth < 768);

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  useEffect(() => {
    setSelectedLink(pathname === "/" ? "home" : pathname.slice(1));
  }, [pathname]);

  return (
    <header className="bg-gray-800/200 fixed top-0 left-0 right-0 z-50 m-auto max-w-4xl px-4 py-3 backdrop-blur-sm md:px-8 lg:py-4 xl:px-12 2xl:px-16">
      <nav className="flex items-center justify-between font-kanit text-neutral-custom-100">
        <Link
          className="flex items-center gap-2 rounded-md px-1 focus:outline-none"
          to="/"
          onClick={() => {
            setSelectedLink("home");
            setNavbarIsOpen(false);
          }}
        >
          <img src={navbarLogo} alt="Logo" />
          <h1 className="text-lg">Ersan Karimi</h1>
        </Link>

        <motion.ul
          className={classNames(
            "absolute bottom-0 top-14 right-0 left-0 z-50 flex h-screen flex-col items-center justify-center gap-4 bg-gray-700/90 p-8 text-base backdrop-blur-lg duration-200 ease-out md:static md:z-auto md:h-auto md:translate-y-[0px] md:flex-row md:items-center md:bg-transparent md:p-0",
            {
              "translate-y-[0px]": navbarIsOpen === true && isUnderLargeSize,
              "translate-y-[-1000px]": navbarIsOpen === false,
            }
          )}
        >
          <LayoutGroup id="navbar-links">
            {["home", "about", "projects", "posts"].map((link) => (
              <NavbarLink
                onSelectedLink={setSelectedLink}
                onNavbarIsOpen={setNavbarIsOpen}
                selectedLink={selectedLink === link}
                link={link}
                key={link}
              />
            ))}
          </LayoutGroup>
          <motion.button
            type="button"
            className="mt-16 rounded-lg p-1 focus:border-0 focus:outline focus:outline-2 focus:outline-[#66EBB9]/10 md:hidden"
            initial={{
              rotate: "0",
            }}
            animate={{
              rotate: navbarIsOpen ? "180deg" : "0deg",
              transition: {
                delay: 0.2,
              },
            }}
            whileTap={{
              scale: 0.8,
            }}
            onClick={() => setNavbarIsOpen(false)}
          >
            <XMarkIcon className="h-12 w-12 text-blue-100" />
          </motion.button>
        </motion.ul>

        <motion.button
          type="button"
          className="rounded-md p-1 focus:outline focus:outline-2 focus:outline-[#66EBB9]/20 md:hidden"
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
        >
          <Bars3BottomRightIcon className="h-6 w-6 text-blue-100" />
        </motion.button>
      </nav>
    </header>
  );
}

function NavbarLink({ link, onSelectedLink, selectedLink, onNavbarIsOpen }) {
  return (
    <li className="relative rounded-md px-4 py-2 focus-within:outline focus-within:outline-[#66EBB9]/20">
      <NavLink
        to={link === "home" ? "/" : link}
        className={({ isActive }) =>
          `${
            isActive ? "text-[#66EBB9]" : "text-current"
          } block text-xl hover:text-[#66EBB9]/80 focus:outline-none md:text-base`
        }
        onClick={() => {
          onSelectedLink(link);
          onNavbarIsOpen(false);
        }}
      >
        {link.slice(0, 1).toUpperCase() + link.slice(1)}

        {selectedLink ? (
          <AnimatePresence>
            <motion.div
              className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto rounded-md bg-[#66EBB9]/10"
              exit={{
                opacity: 0,
                scale: 0,
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 600,
                },
              }}
            />
          </AnimatePresence>
        ) : null}
      </NavLink>
    </li>
  );
}
