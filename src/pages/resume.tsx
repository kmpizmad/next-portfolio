import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/Resume.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TranslateButton from '../components/TranslateButton';
import type { UnkownProps } from '../types/UnkownProps';
import IEducation from '../interfaces/resume/IEducation';
import ICertificate from '../interfaces/resume/ICertificate';
import ISkill from '../interfaces/resume/ISkill';
import IExperience from '../interfaces/resume/IExperience';
import ISocial from '../interfaces/resume/ISocial';
import ILanguage from '../interfaces/resume/ILanguage';
import IInfo from '../interfaces/resume/IInfo';
import EducationSection from '../modules/EducationSection';
import CertificateSection from '../modules/CertificateSection';
import SkillSection from '../modules/SkillSection';
import LanguageSection from '../modules/LanguageSection';
import ExperienceSection from '../modules/ExperienceSection';
import SocialSection from '../modules/SocialSection';

const Resume: NextPage = () => {
  const { t: commonTranslator } = useTranslation('common');
  const { t: resumeTranslator } = useTranslation('resume');

  const educations: IEducation[] = resumeTranslator('education', { returnObjects: true });
  const certificates: ICertificate[] = resumeTranslator('certificates', { returnObjects: true });
  const skills: ISkill[] = resumeTranslator('skills', { returnObjects: true });
  const experiences: IExperience[] = resumeTranslator('experience', { returnObjects: true });
  const languages: ILanguage[] = resumeTranslator('languages', { returnObjects: true });
  const socials: ISocial[] = resumeTranslator('socials', { returnObjects: true });
  const info: IInfo = resumeTranslator('info', { returnObjects: true });

  console.log({ educations, certificates, skills, experiences, languages, socials, info });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <TranslateButton targetLanguage="en" />
        <TranslateButton targetLanguage="hu" />
      </div>
      <div>{commonTranslator('resume_title')}</div>
      <div className="max-w-7xl self-center">
        <div className="grid grid-cols-2">
          <div>
            <ExperienceSection
              title={commonTranslator('experience_title')}
              labelCurrent={commonTranslator('current_job_label')}
              experiences={experiences}
            />
            <EducationSection title={commonTranslator('education_title')} educations={educations} />
            <CertificateSection title={commonTranslator('certificates_title')} certificates={certificates} />
          </div>
          <div className="flex flex-col">
            <SkillSection title={commonTranslator('skills_title')} skills={skills} />
            <LanguageSection title={commonTranslator('languages_title')} languages={languages} />
            <SocialSection title={commonTranslator('socials_title')} socials={socials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

export async function getStaticProps(context: GetStaticPropsContext): Promise<UnkownProps> {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common', 'resume'])),
    },
  };
}
