import { nanoid } from 'nanoid';
import Skill from './Skill';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import useSkill from '../../../../hooks/useSkill';

const SkillSection: React.FC<WithTitleProps> = () => {
  const skills = useSkill();

  return (
    <div className="flex flex-col gap-2">
      {skills.map(skill => {
        return <Skill key={nanoid()} {...skill} />;
      })}
    </div>
  );
};

export default withTitle(SkillSection);
