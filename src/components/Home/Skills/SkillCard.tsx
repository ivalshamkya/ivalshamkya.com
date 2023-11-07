import { STACKS } from "@/common/constant/stack";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillInterfaces {
  name: string;
  icon: JSX.Element
}

const SkillCard: React.FC<SkillInterfaces> = ({ name, icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-fit py-2 px-2.5 mx-1.5 flex justify-center items-center space-x-2 bg-white dark:bg-[#212121] border border-slate-50 dark:border-white/5 rounded-full shadow dark:shadow-white/5 hover:drop-shadow-md hover:dark:shadow-white/30 transition-all linear duration-300">
            <div className="w-5">{icon}</div>
            <h1 className="whitespace-nowrap text-sm">{name}</h1>
          </div>
        </TooltipTrigger>
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillCard;
