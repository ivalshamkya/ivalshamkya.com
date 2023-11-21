import React from "react";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dataNavbar } from "@/common/constant/navbarLink";
import { CgDarkMode } from "react-icons/cg";
import { METADATA } from "@/common/constant/metadata";

interface Navigation {
  active: string;
}

const Navbar: React.FC<Navigation> = ({ active }) => {
  const [theme, setTheme] = useState<string>("");
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setTheme((prev) => localStorage.getItem("theme") ?? "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "fade",
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "fade",
        duration: 0.5,
      },
    },
  };

  return (
    <Fragment>
      <motion.nav
        variants={navbarVariants}
        initial={"hidden"}
        animate={"visible"}
        className="w-screen flex justify-between fixed top-5 md:top-7 right-0 left-0 px-4 md:px-7 z-50 -translate-x-1/2"
      >
        {
          METADATA.authors.isAvailable ? (
          <div className="hidden md:block w-44">
            <div className="group w-fit py-3 px-[1rem] relative overflow-hidden inline-flex items-center bg-white/70 dark:bg-[#212121] border border-gray-300 dark:border-white/20 backdrop-blur-sm shadow-inner rounded-full hover:w-full hover:gap-2">
              <div className="relative inline-flex justify-center items-center text-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-ping">
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-pulse">
                </div>
              </div>
              <span className="w-0 overflow-hidden whitespace-nowrap group-hover:w-full text-sm items-center justify-center transition-all ease-in-out duration-300"> Available for work. </span>
            </div>
          </div>
          )
          :
          <div className="hidden md:block"></div>
        }
        <motion.div className={`h-fit flex items-center overflow-hidden ${ METADATA.authors.isAvailable && "md:-ml-40" } bg-white/70 dark:bg-[#212121] border border-gray-300 dark:border-white/20 backdrop-blur-sm shadow-inner hover:drop-shadow-lg transition-all duration-200 rounded-full`}>
          <motion.ul className="flex items-center">
            {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
              <motion.li
                key={`${navigate}`}
                className={`w-[5rem] md:w-32 py-2 md:py-3 text-sm md:text-base text-center text-primary bg-gradient-to-r rounded-full transition-all ease-in duration-75 cursor-pointer ${active === navigate_url
                    ? "text-white from-[#3b52ff] to-[#aa00c0] font-bold"
                    : "text-primary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3b52ff] hover:to-[#aa00c0] font-medium"
                  }`}
              >
                <motion.a href={`/${navigate_url}`}>
                  {navigate}
                </motion.a> 
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.button
          onClick={handleClick}
          className={`w-10 md:w-12 h-10 md:h-12 flex border border-gray-300 dark:border-white/20 shadow-inner ${theme !== "light"
              ? "opacity-70 rotate-180 dark:bg-[#212121] text-white border border-white/70"
              : "opacity-70 rotate-0 text-slate-950 bg-white/70"
            } justify-center items-center text-center text-2xl text-primary backdrop-blur-sm drop-shadow-sm bg-gradient-to-br rounded-full hover:opacity-80 hover:drop-shadow-lg transition-all ease-in duration-200 font-semibold cursor-pointer`}
        >
          <CgDarkMode />
        </motion.button>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
