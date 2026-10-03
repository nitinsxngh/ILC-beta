import * as Psychometric from './Psychometric';
import * as CVBuilder from './CVBuilder';
import * as CareerId from './CareerId';
import * as CareerKundali from './CareerKundali';
import * as StudyAbroad from './StudyAbroad';

export const toolModules = [
  {
    tab: {
      id: 'psychometric',
      bg: 'tools/psy.svg',
      label: 'Psychometric test',
      title: "Know What You're Built For",
      subtitle:
        'Our psychometrically validated assessments are built on research based insights,and advanced data models to evaluate your aptitude and interests, helping you understand yourself better and choose the right career path with confidence.',
      btnText: 'Take assessment',
      rightClassName: 'tools-center',
    },
    LeftPanel: Psychometric.LeftPanel,
    Visual: Psychometric.Visual,
  },
  {
    tab: {
      id: 'cv_builder',
      bg:"tools/cvbuilderbg.svg",
      label: 'Digilocker Verified CV',
      title: 'Your CV Should Build Trust Instantly',
      subtitle:
        'A verified CV that makes it easy for employers to validate your credentials quickly, securely, and effortlessly.',
      listTitle: 'Features',
      points: [
        'DigiLocker verified credentials',
        'AI generated, ATS-optimised',
        'Blockchain secured identity',
      ],
      btnText: 'Build your CV',
      rightClassName: 'tools-bottom-end',
    },
    LeftPanel: CVBuilder.LeftPanel,
    Visual: CVBuilder.Visual,
  },
  {
    tab: {
      id: 'career_id',
      bg:"tools/carreridbg.svg",
      label: 'Career ID',
      title: 'One profile. Every milestone. ',
      points: [
        "Career ID is a secure digital profile that keeps your academic achievements, skills, certifications, internships, and work experience together in one place. As your career evolves, your profile evolves with it, giving you a verified record that's always up to date and ready whenever you need it.",
      ],
      btnText: 'Get your Career ID',
      rightClassName: 'tools-center',
    },
    LeftPanel: CareerId.LeftPanel,
    Visual: CareerId.Visual,
  },
  {
    tab: {
      id: 'career_kundli',
      bg:"tools/kundli.svg",
      label: 'Career Kundli',
      title: 'Your Career Dashboard',
      subtitle:
        'Career Kundli is your interactive career dashboard, bringing together strengths, verified achievements, and career milestones in one place.',
      listTitle: "What's inside",
      btnText: 'Build your Career Kundli',
      rightClassName: 'tools-bottom-end',
    },
    LeftPanel: CareerKundali.LeftPanel,
    Visual: CareerKundali.Visual,
  },
  {
    tab: {
      id: 'study_abroad',
      bg: 'tools/y.svg',
      label: 'Study Abroad Planning',
      title: 'Your Study Abroad Journey, All in One Place',
      subtitle:
        'Choose the right course and university, get expert guidance, and prepare your application with confidence.',
      btnText: 'Build your plan',
      rightClassName: 'tools-study-right',
    },
    LeftPanel: StudyAbroad.LeftPanel,
    Visual: StudyAbroad.Visual,
  },
];

export const tabsData = toolModules.map((mod) => mod.tab);
