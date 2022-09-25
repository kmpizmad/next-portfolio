import Link from 'next/link';
import ISocial from '../../../../interfaces/resume/ISocial';

const Social: React.FC<ISocial> = props => {
  return (
    <Link href={props.mail ? `mailto:${props.url}` : props.url} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-2 my-2 cursor-pointer">
        <div className="text-md">{props.site}</div>
        <div className="text-md break-all">{props.url}</div>
      </div>
    </Link>
  );
};

export default Social;
