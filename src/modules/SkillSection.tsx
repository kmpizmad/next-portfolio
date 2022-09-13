import Skill from '../components/Skill';
import ISkill from '../interfaces/resume/ISkill';

interface Props {
  title: string;
  skills: ISkill[];
}

const SkillSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.skills.map((skill, i) => {
        const key = `${skill.name}-${i}`;
        return <Skill key={key} {...skill} />;
      })}
    </div>
  );
};

export default SkillSection;
