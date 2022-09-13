import Experience from '../components/Experience';
import IExperience from '../interfaces/resume/IExperience';

interface Props {
  title: string;
  labelCurrent: string;
  experiences: IExperience[];
}

const ExperienceSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl  font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.experiences.map((exp, i) => {
        const key = `${exp.company}-${exp.from}-${exp.to}-${i}`;
        return <Experience key={key} {...exp} labelCurrent={props.labelCurrent} />;
      })}
    </div>
  );
};

export default ExperienceSection;
