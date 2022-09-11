import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return <div>{t('home_title')}</div>;
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  };
}
