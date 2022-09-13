import ILanguage from '../interfaces/resume/ILanguage';

const Language: React.FC<ILanguage> = props => {
  return (
    <div className="flex gap-2 my-2">
      <div className="text-xl font-semibold uppercase">{props.name}</div>
      <div>-</div>
      <div className="text-lg">{props.level}</div>
    </div>
  );
};

export default Language;
