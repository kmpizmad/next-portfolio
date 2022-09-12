import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
// import styles from '../styles/modules/projects/Project.module.scss';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { UnkownProps } from '../../types/UnkownProps';

const Project: NextPage = () => {
  const { query } = useRouter();
  const { t } = useTranslation('common');

  return (
    <div>
      {t('project_title')}: {query.pid}
    </div>
  );
};

export default Project;

export async function getStaticProps(context: GetStaticPropsContext): Promise<UnkownProps> {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ pid: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
