import Link from 'next/link';
import { useRouter } from 'next/router';
import Flag from 'react-country-flag';

interface Props {
  targetLanguage: string;
  countryCode: string;
}

const TranslateButton: React.FC<Props> = props => {
  const router = useRouter();
  const target = props.targetLanguage + router.pathname;

  return (
    <Link href={target} locale={props.targetLanguage}>
      <a>
        <Flag
          countryCode={props.countryCode}
          svg
          title={props.countryCode}
          style={{
            width: '20px',
            height: '20px',
          }}
        />
      </a>
    </Link>
  );
};

export default TranslateButton;
