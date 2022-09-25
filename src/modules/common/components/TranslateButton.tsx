import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  targetLanguage: string;
}

const TranslateButton: React.FC<Props> = props => {
  const router = useRouter();
  const target = props.targetLanguage + router.pathname;

  return (
    <Link href={target} locale={props.targetLanguage}>
      <a>{props.targetLanguage}</a>
    </Link>
  );
};

export default TranslateButton;
