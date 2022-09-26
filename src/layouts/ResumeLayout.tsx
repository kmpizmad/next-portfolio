import CertificateProvider from '../providers/CertificateProvider';
import SkillProvider from '../providers/SkillProvider';

const ResumeLayout: React.FC<React.PropsWithChildren> = props => {
  return (
    <CertificateProvider>
      <SkillProvider>
        <div className="bg-gray-400">
          <div className="max-w-5xl mx-auto py-8 font-poppins">{props.children}</div>
        </div>
      </SkillProvider>
    </CertificateProvider>
  );
};

export default ResumeLayout;
