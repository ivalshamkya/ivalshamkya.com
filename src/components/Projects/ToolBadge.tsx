import React from "react";

interface SkillInterfaces {
  name: string;
  icon: JSX.Element;
}

const ToolBadge: React.FC<SkillInterfaces> = ({ name, icon }) => {
  return (
    <div className={`w-fit py-1 px-1 md:py-2 md:px-2 flex justify-center items-center ${name ? "gap-2" : ""} bg-white dark:bg-[#252525] border border-slate-200 dark:border-white/10 rounded-md transition-all linear duration-300`}>
      <div className="w-4">{icon}</div>
      <h1 className="whitespace-nowrap text-primary text-[0.7rem] md:text-xs">{name}</h1>
    </div>
  );
};

export default ToolBadge;
