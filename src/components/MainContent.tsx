import { useTranslation } from '../context/TranslationContext';
import { Education } from './Education';
import { WorkExperience } from './Experience';

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-white p-4 lg:p-12 print:p-12 space-y-10'>
      <section className='space-y-4'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>{t('profile.title')}</h2>
        <p className='text-gray-600 leading-relaxed'>{t('profile.description')}</p>
      </section>

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>
          {t('workExperience.title')}
        </h2>

        <WorkExperience
          title={t('workExperience.holoXR.title')}
          company={t('workExperience.holoXR.company')}
          duration={t('workExperience.holoXR.duration')}
          location={t('workExperience.holoXR.location')}
          responsibilities={[
            t('workExperience.holoXR.responsibilities.0'),
            t('workExperience.holoXR.responsibilities.1'),
            t('workExperience.holoXR.responsibilities.2'),
            t('workExperience.holoXR.responsibilities.3'),
          ]}
        />

        <WorkExperience
          title={t('workExperience.sevenSuite.title')}
          company={t('workExperience.sevenSuite.company')}
          duration={t('workExperience.sevenSuite.duration')}
          location={t('workExperience.sevenSuite.location')}
          responsibilities={[
            t('workExperience.sevenSuite.responsibilities.0'),
            t('workExperience.sevenSuite.responsibilities.1'),
            t('workExperience.sevenSuite.responsibilities.2'),
            t('workExperience.sevenSuite.responsibilities.3'),
          ]}
        />

        <WorkExperience
          title={t('workExperience.norkut.title')}
          company={t('workExperience.norkut.company')}
          duration={t('workExperience.norkut.duration')}
          location={t('workExperience.norkut.location')}
          responsibilities={[
            t('workExperience.norkut.responsibilities.0'),
            t('workExperience.norkut.responsibilities.1'),
            t('workExperience.norkut.responsibilities.2'),
            t('workExperience.norkut.responsibilities.3'),
          ]}
        />

        <WorkExperience
          title={t('workExperience.nanotecks.title')}
          company={t('workExperience.nanotecks.company')}
          duration={t('workExperience.nanotecks.duration')}
          location={t('workExperience.nanotecks.location')}
          responsibilities={[
            t('workExperience.nanotecks.responsibilities.0'),
            t('workExperience.nanotecks.responsibilities.1'),
            t('workExperience.nanotecks.responsibilities.2'),
            t('workExperience.nanotecks.responsibilities.3'),
          ]}
        />
      </section>

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold tracking-wider text-[#0082E6]'>{t('education.title')}</h2>

        <div className='space-y-6'>
          <Education
            degree={t('education.udo.title')}
            school={t('education.udo.institution')}
            duration={t('education.udo.duration')}
            details={t('education.udo.details')}
          />

          <Education
            degree={t('education.highSchool.title')}
            school={t('education.highSchool.institution')}
            duration={t('education.highSchool.duration')}
            details={t('education.highSchool.details')}
          />
        </div>
      </section>
    </div>
  );
};
