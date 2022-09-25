import type { GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import { nanoid } from 'nanoid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Pdf from 'jspdf';
import { toPng } from 'html-to-image';
import TranslateButton from '../modules/common/components/TranslateButton';
import type { UnkownProps } from '../types/UnkownProps';
import ResumeLayout from '../layouts/ResumeLayout';
// import CertificateSection from '../modules/resume/components/certificate/CertificateSection';
import EducationSection from '../modules/resume/components/education/EducationSection';
import ExperienceSection from '../modules/resume/components/experience/ExperienceSection';
import HeaderSection from '../modules/resume/components/HeaderSection';
import LanguageSection from '../modules/resume/components/language/LanguageSection';
import SkillSection from '../modules/resume/components/skill/SkillSection';
import SocialSection from '../modules/resume/components/social/SocialSection';

const Resume: NextPage = () => {
  const { t: t_common } = useTranslation('common');
  const { t: t_resume } = useTranslation('resume');

  const resumeRef = React.useRef<HTMLDivElement>(null);

  const createPdf = () => {
    if (!resumeRef.current) return;

    toPng(resumeRef.current, { quality: 0.95 }).then(imgData => {
      const pdf = new Pdf();
      pdf.addImage(imgData, 'JPEG', 5, 5, 200, 220);
      pdf.save(nanoid() + '.pdf');
    });
  };

  return (
    <ResumeLayout>
      <div className="flex flex-col">
        <div className="flex justify-between mb-8">
          <div className="flex gap-2">
            <TranslateButton targetLanguage="en" />
            <TranslateButton targetLanguage="hu" />
          </div>
          <div className="flex gap-2">
            <button onClick={createPdf}>Download</button>
            <button>Print</button>
          </div>
        </div>
        <div ref={resumeRef} className="max-w-7xl self-center">
          <HeaderSection info={t_resume('info', { returnObjects: true })} />
          <div className="grid grid-cols-[40%_minmax(0,1fr)] gap-12">
            <div className="flex flex-col">
              <SocialSection title={t_common('socials_title')} />
              <SkillSection title={t_common('skills_title')} />
              <LanguageSection
                title={t_common('languages_title')}
                languages={t_resume('languages', { returnObjects: true })}
              />
            </div>
            <div>
              <EducationSection
                title={t_common('education_title')}
                labelCurrent={t_common('current_label')}
                educations={t_resume('education', { returnObjects: true })}
              />
              <ExperienceSection
                title={t_common('experience_title')}
                labelCurrent={t_common('current_label')}
                experiences={t_resume('experience', { returnObjects: true })}
              />
              {/* <CertificateSection title={t_common('certificates_title')} /> */}
            </div>
          </div>
        </div>
      </div>
    </ResumeLayout>
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
