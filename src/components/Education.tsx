import IEducation from '../interfaces/resume/IEducation';

const Education: React.FC<IEducation> = props => {
  return (
    <div className="my-2">
      <div className="text-xl font-semibold uppercase">{props.title}</div>
      <div className="text-lg">
        {props.at} - {props.type}
      </div>
      <div className="text-sm text-gray-500">
        <div>
          {props.from} - {props.to}
        </div>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export default Education;
