
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dataNavbar } from "@/common/constant/navbarLink";
import { CgDarkMode } from "react-icons/cg";

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
        <div className="hidden md:block"></div>
        <motion.div className="h-fit flex items-center overflow-hidden bg-white/70 dark:bg-[#212121] border border-gray-300 dark:border-white/20 backdrop-blur-sm shadow-inner hover:drop-shadow-lg transition-all duration-200 rounded-full">
          <motion.ul className="flex items-center">
            {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
              <motion.a
                href={`${navigate_url}`}
                key={`${navigate}`}
                className={`w-[4.5rem] md:w-32 py-2.5 md:py-3 text-xs md:text-base text-center text-primary bg-gradient-to-l rounded-full transition-all ease-in duration-75 cursor-pointer ${
                  active === navigate_url ? "text-[#f853d2] font-bold" : "hover:text-white hover:from-[#3b52ff] hover:to-[#aa00c0] font-medium"
                }`}
              >
                {navigate}
              </motion.a>
            ))}
          </motion.ul>
        </motion.div>
        <motion.button
          key={"adfw"}
          onClick={handleClick}
          className={`w-10 md:w-12 h-10 md:h-12 flex border border-gray-300 dark:border-white/20 shadow-inner ${
            theme !== "light"
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
