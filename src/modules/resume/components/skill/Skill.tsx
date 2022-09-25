import { nanoid } from 'nanoid';
import ISkill from '../../../../interfaces/resume/ISkill';

const Skill: React.FC<ISkill> = props => {
  const createScale = (length: number): number[] => {
    return Array.from({ length }, (_, i) => i + 1);
  };

  const allLevel = createScale(5);
  const currentLevel = createScale(props.level);

  return (
    <div className="flex justify-between w-60">
      <div className="flex items-center gap-2">
        <div>{props.icon}</div>
        <div>{props.name}</div>
      </div>
      <div className="relative flex justify-start items-center">
        <div className="flex gap-1">
          {allLevel.map(_ => (
            <div key={nanoid()} className="w-4 h-4 rounded-full bg-gray-400"></div>
          ))}
        </div>
        <div className="absolute flex gap-1">
          {currentLevel.map(_ => (
            <div key={nanoid()} className="w-4 h-4 rounded-full bg-purple-900"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
