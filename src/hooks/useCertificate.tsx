import * as React from 'react';
import CertificateContext from '../contexts/CertificateContext';
import ICertificate from '../interfaces/resume/ICertificate';

const useCertificate = (): ICertificate[] => {
  return React.useContext(CertificateContext);
};

export default useCertificate;
