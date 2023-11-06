import { METADATA } from "@/common/constant/me";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";

const HomeContent = () => {
  const navbarVariants = {
    hidden: {
      opacity: 0.1,
      filter: "blur(3px)",
      y: 70,
      transition: {
        duration: 0.5
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ease: "anticipate",
        duration: 0.7
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        variants={navbarVariants}
        animate="visible"
        className="max-w-3xl space-y-12 md:space-y-20 px-6"
      >
        <m.div
          className="flex flex-col-reverse md:grid grid-cols-3 gap-3"
          layout
        >
          <m.div className="col-span-2 order-2 md:order-1">
            <h2 className="text-primary font-bold md:text-2xl text-xl mb-1.5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b52ff] to-pink-500">
                Hello
              </span>{" "}
                it's me{" "}
              <div className="text-3xl ml-1.5 animate-wave">👋</div>
            </h2>
            <h1 className="text-4xl font-extrabold mb-1.5">{METADATA.authors.name}</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quae illum? Molestiae nisi repellendus incidunt est ab commodi totam
              minus, ad magni eligendi.
            </p>
          </m.div>
          <m.div className="order-2 md:order-1" layout>
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              className="md:ml-auto shadow rounded-full w-36 md:w-48"
              alt="profileImage"
            />
          </m.div>
        </m.div>

        <m.div layout>
          <h1 className="text-2xl font-bold mb-4">Favorite Things</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
            blanditiis reprehenderit? Soluta quaerat pariatur magni error ut quas
            illo recusandae quis neque unde facilis, accusantium numquam nam sit
            eaque nulla?
          </p>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default HomeContent;
