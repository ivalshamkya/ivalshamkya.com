import Marquee from "react-fast-marquee";
import { STACKS } from "@/common/constant/stack";
import SkillCard from "./SkillCard";

const SkillList= () => {
  if (!STACKS) {
    return null;
  }

  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-2">
      {Array.from({ length: 2 }, (_, index) => {
        const slider = [...stacksInArray].sort(() => Math.random() - 0.5)
        return (
          <Marquee key={index} direction={index % 2 === 0 ? "left" : "right"}>
            {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
            ))}
          </Marquee>
        )
      })}
    </div>
  );
};

export default SkillList;
