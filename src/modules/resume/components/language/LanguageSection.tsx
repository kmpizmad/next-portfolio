import { nanoid } from 'nanoid';
import Language from './Language';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import ILanguage from '../../../../interfaces/resume/ILanguage';

interface Props {
  languages: ILanguage[];
}

const LanguageSection: React.FC<Props & WithTitleProps> = props => {
  return (
    <>
      {props.languages.map(lang => {
        return <Language key={nanoid()} {...lang} />;
      })}
    </>
  );
};

export default withTitle(LanguageSection);
