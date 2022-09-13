import Language from '../components/Language';
import ILanguage from '../interfaces/resume/ILanguage';

interface Props {
  title: string;
  languages: ILanguage[];
}

const LanguageSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl  font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.languages.map((lang, i) => {
        const key = `${lang.name}-${i}`;
        return <Language key={key} {...lang} />;
      })}
    </div>
  );
};

export default LanguageSection;
