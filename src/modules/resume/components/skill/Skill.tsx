import { nanoid } from 'nanoid';
import ISkill from '../../../../interfaces/resume/ISkill';

const Skill: React.FC<ISkill> = props => {
  const createScale = (length: number): number[] => {
    return Array.from({ length }, (_, i) => i + 1);
  };

  const allLevel = createScale(5);
  const currentLevel = createScale(props.level);

  return (
    <div className="flex justify-between w-[80%]">
      <div className="flex items-center gap-4">
        {/* <div>{props.icon}</div> */}
        <div className="font-light uppercase tracking-wide">{props.name}</div>
      </div>
      <div className="relative flex justify-start items-center">
        <div className="flex gap-2">
          {allLevel.map(_ => (
            <div key={nanoid()} className="w-4 h-4 rounded-full bg-gray-400"></div>
          ))}
        </div>
        <div className="absolute flex gap-2">
          {currentLevel.map(_ => (
            <div key={nanoid()} className="w-4 h-4 rounded-full bg-gray-700"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
