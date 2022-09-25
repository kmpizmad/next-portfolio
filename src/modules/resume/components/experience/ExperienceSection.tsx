import { nanoid } from 'nanoid';
import Experience from './Experience';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import IExperience from '../../../../interfaces/resume/IExperience';

interface Props {
  labelCurrent: string;
  experiences: IExperience[];
}

const ExperienceSection: React.FC<Props & WithTitleProps> = props => {
  return (
    <div className="flex flex-col gap-8">
      {props.experiences.map(exp => {
        return <Experience key={nanoid()} {...exp} labelCurrent={props.labelCurrent} />;
      })}
    </div>
  );
};

export default withTitle(ExperienceSection);
