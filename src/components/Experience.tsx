import IExperience from '../interfaces/resume/IExperience';

interface Props {
  labelCurrent: string;
}

const Experience: React.FC<Props & IExperience> = props => {
  return (
    <div className="my-2">
      <div className="text-xl font-semibold uppercase">{props.title}</div>
      <div className="text-lg">{props.company}</div>
      <div className="text-sm text-gray-500">
        <div>
          {props.from} - {props.current ? props.labelCurrent : props.to}
        </div>
        {props.tasks.map((task, i) => (
          <div key={`${task}-${i}`}>{task}</div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
