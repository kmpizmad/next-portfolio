import Link from 'next/link';
import ICertificate from '../interfaces/resume/ICertificate';

const Certificate: React.FC<ICertificate> = props => {
  return (
    <div className="my-2">
      <div className="text-xl font-semibold uppercase">
        <span>
          <Link href={props.course}>
            <a>{props.name}</a>
          </Link>
        </span>
        <span> - </span>
        <span>
          <Link href={props.link}>
            <a>Cert</a>
          </Link>
        </span>
      </div>
      <div className="text-sm text-gray-500">{props.completed}</div>
    </div>
  );
};

export default Certificate;
