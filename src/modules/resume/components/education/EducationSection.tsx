import { nanoid } from 'nanoid';
import Education from './Education';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import IEducation from '../../../../interfaces/resume/IEducation';

interface Props {
  labelCurrent: string;
  educations: IEducation[];
}

const EducationSection: React.FC<Props & WithTitleProps> = props => {
  return (
    <div className="flex flex-col gap-4">
      {props.educations.map(edu => {
        return <Education key={nanoid()} {...edu} labelCurrent={props.labelCurrent} />;
      })}
    </div>
  );
};

export default withTitle(EducationSection);
