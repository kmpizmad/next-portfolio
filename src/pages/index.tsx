import type { GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TranslateButton from '../modules/common/components/TranslateButton';
import type { UnkownProps } from '../types/UnkownProps';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <TranslateButton targetLanguage="en" countryCode="US" />
        <TranslateButton targetLanguage="hu" countryCode="HU" />
      </div>
      <div>{t('home_title')}</div>
    </div>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext): Promise<UnkownProps> {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  };
}
