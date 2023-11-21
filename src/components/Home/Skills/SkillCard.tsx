import React from "react";

interface SkillInterfaces {
  name: string;
  icon: JSX.Element;
}

const SkillCard: React.FC<SkillInterfaces> = ({ name, icon }) => {
  return (
    <div className="w-fit py-2 px-2.5 my-1 mx-1.5 flex justify-center items-center space-x-2 bg-white dark:bg-[#212121] border border-slate-50 dark:border-white/5 rounded-full shadow dark:shadow-white/5 hover:drop-shadow-md hover:dark:shadow-white/30 transition-all linear duration-300">
      <div className="w-5">{icon}</div>
      <h1 className="whitespace-nowrap text-primary text-sm">{name}</h1>
    </div>
  );
};

export default SkillCard;
