import Education from '../components/Education';
import IEducation from '../interfaces/resume/IEducation';

interface Props {
  title: string;
  educations: IEducation[];
}

const EducationSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.educations.map((edu, i) => {
        const key = `${edu.at}-${edu.title}-${edu.type}-${i}`;
        return <Education key={key} {...edu} />;
      })}
    </div>
  );
};

export default EducationSection;
