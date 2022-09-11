import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/Resume.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Resume: NextPage = () => {
  const { t } = useTranslation('common');

  return <div>{t('resume_title')}</div>;
};

export default Resume;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  };
}
