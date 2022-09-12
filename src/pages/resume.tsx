import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/Resume.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TranslateButton from '../components/TranslateButton';
import type { UnkownProps } from '../types/UnkownProps';

const Resume: NextPage = () => {
  const { t: commonTranslator } = useTranslation('common');
  const { t: resumeTranslator } = useTranslation('resume');

  const education = resumeTranslator('education', { returnObjects: true });
  const certificates = resumeTranslator('certificates', { returnObjects: true });
  const skills = resumeTranslator('skills', { returnObjects: true });
  const experience = resumeTranslator('experience', { returnObjects: true });
  const languages = resumeTranslator('languages', { returnObjects: true });
  const socials = resumeTranslator('socials', { returnObjects: true });
  const info = resumeTranslator('info', { returnObjects: true });

  console.log({ education, certificates, skills, experience, languages, socials, info });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <TranslateButton targetLanguage="en" />
        <TranslateButton targetLanguage="hu" />
      </div>
      <div>{commonTranslator('resume_title')}</div>
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
