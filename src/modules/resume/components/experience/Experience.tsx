import { nanoid } from 'nanoid';
import IExperience from '../../../../interfaces/resume/IExperience';
import styles from '../../../../styles/modules/resume/ExperienceSection.module.scss';

interface Props {
  labelCurrent: string;
}

const Experience: React.FC<Props & IExperience> = props => {
  return (
    <div className="flex">
      <div className="w-1/3 font-light">
        {props.from} - {props.current ? props.labelCurrent : props.to}
      </div>
      <div className="w-2/3 -ml-2">
        <div className="mb-2">
          <div className="text-xl font-semibold uppercase">{props.title}</div>
          <div className="text-lg">{props.company}</div>
        </div>
        <div
          className={`${styles['box-borders']} w-full px-4 py-2 border-r-[3px] border-l-[3px] bg-[length:8px_3px] border-gray-600 from-gray-600 to-gray-600`}
        >
          <ul className="list-dash list-inside text-sm text-gray-500">
            {props.tasks.map(task => (
              <li key={nanoid()}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
