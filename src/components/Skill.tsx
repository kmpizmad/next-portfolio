import ISkill from '../interfaces/resume/ISkill';

const Skill: React.FC<ISkill> = props => {
  const createScale = (length: number): number[] => {
    return Array.from({ length }, (_, i) => i + 1);
  };

  const allLevel = createScale(5);
  const currentLevel = createScale(props.level);

  return (
    <div className="flex justify-between w-60">
      <div>{props.name}</div>
      <div className="relative flex justify-start items-center">
        <div className="flex gap-1">
          {allLevel.map(level => (
            <div key={`allLevel-counter-${level}`} className="w-4 h-4 rounded-full bg-gray-400"></div>
          ))}
        </div>
        <div className="absolute flex gap-1">
          {currentLevel.map(level => (
            <div key={`currentLevel-counter-${level}`} className="w-4 h-4 rounded-full bg-cyan-900"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
