import IEducation from '../../../../interfaces/resume/IEducation';

interface IProps {
  labelCurrent: string;
}

const Education: React.FC<IProps & IEducation> = props => {
  return (
    <div className="flex">
      <div className="w-1/3 font-light">
        {props.from} - {props.current ? props.labelCurrent : props.to}
      </div>
      <div className="w-2/3 -ml-2">
        <div className="-mb-1">
          <div className="text-xl font-semibold uppercase">{props.title}</div>
          <div className="text-lg">{props.school}</div>
        </div>
        <div className="text-sm text-gray-500">{props.description}</div>
      </div>
    </div>
  );
};

export default Education;
