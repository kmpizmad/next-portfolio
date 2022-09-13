import Link from 'next/link';
import ISocial from '../interfaces/resume/ISocial';

const Social: React.FC<ISocial> = props => {
  return (
    <div className="flex gap-2 my-2">
      <div className="text-xl font-semibold uppercase">{props.site}</div>
      <div>-</div>
      <div className="text-lg">
        <Link href={props.url}>
          <a>{props.url}</a>
        </Link>
      </div>
    </div>
  );
};

export default Social;
