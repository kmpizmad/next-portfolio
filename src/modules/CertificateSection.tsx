import Certificate from '../components/Certificate';
import ICertificate from '../interfaces/resume/ICertificate';

interface Props {
  title: string;
  certificates: ICertificate[];
}

const CertificateSection: React.FC<Props> = props => {
  return (
    <div>
      <div className="text-xl  font-bold tracking-wide uppercase underline">{props.title}</div>
      {props.certificates.map((cert, i) => {
        const key = `${cert.link}-${i}`;
        return <Certificate key={key} {...cert} />;
      })}
    </div>
  );
};

export default CertificateSection;
