import * as React from 'react';
import CertificateContext, { certificates } from '../contexts/CertificateContext';

const CertificateProvider: React.FC<React.PropsWithChildren> = props => {
  return <CertificateContext.Provider value={certificates}>{props.children}</CertificateContext.Provider>;
};

export default CertificateProvider;
