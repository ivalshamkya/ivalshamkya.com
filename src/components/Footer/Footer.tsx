import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useTime, useTransform } from "framer-motion";

import { METADATA } from "@/common/constant/metadata";

const Footer: React.FC = () => {


  return (
    <div className="w-full bg-white dark:bg-[#18181B] py-5">
      <h1 className="text-center">Made with ❤️ by me</h1>
    </div>
  );
};

export default Footer;