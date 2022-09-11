import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/projects/Projects.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Projects: NextPage = () => {
  const { t } = useTranslation('common');

  return <div>{t('projects_title')}</div>;
};

export default Projects;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  };
}
