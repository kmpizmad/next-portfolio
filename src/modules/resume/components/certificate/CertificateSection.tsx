import { nanoid } from 'nanoid';
import Certificate from './Certificate';
import withTitle, { WithTitleProps } from '../../../../hoc/withTitle';
import useCertificate from '../../../../hooks/useCertificate';

const CertificateSection: React.FC<WithTitleProps> = () => {
  const certificates = useCertificate();

  return (
    <>
      {certificates.map(cert => {
        return <Certificate key={nanoid()} {...cert} />;
      })}
    </>
  );
};

export default withTitle(CertificateSection);
