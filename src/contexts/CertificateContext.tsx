import * as React from 'react';
import createDate from '../helpers/createDate';
import ICertificate from '../interfaces/resume/ICertificate';

export const certificates: ICertificate[] = [
  {
    name: 'Docker Crash Course',
    course: 'https://www.udemy.com/course/docker-tutorial-for-devops-run-docker-containers/',
    link: 'https://drive.google.com/drive/folders/1EpvwV-xSRmmnCn533lwzO-hPhjPrxLhg',
    completed: createDate(2022, 8),
  },
  {
    name: 'Advanced REST APIs with Flask and Python',
    course: 'https://www.google.com/url?q=https://www.udemy.com/course/advanced-rest-apis-flask-python/',
    link: 'https://drive.google.com/drive/folders/1EpvwV-xSRmmnCn533lwzO-hPhjPrxLhg',
    completed: createDate(2022, 8),
  },
  {
    name: 'REST APIs with Flask and Python',
    course: 'https://www.udemy.com/course/rest-api-flask-and-python/',
    link: 'https://drive.google.com/file/d/1mqQlRGLsrvFPiT-ybomAjTG_Sn0HW84v/view?usp=sharing',
    completed: createDate(2022, 7),
  },
  {
    name: 'AZ-104',
    course: '',
    link: 'https://drive.google.com/drive/folders/1EpvwV-xSRmmnCn533lwzO-hPhjPrxLhg',
    completed: createDate(2022, 4),
  },
  {
    name: 'The Complete Web Development Bootcamp',
    course: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    link: 'https://drive.google.com/file/d/1FaiiMMSvszlADB7s-dKDkmMCPds8Cr-X/view?usp=sharing',
    completed: createDate(2020, 8),
  },
];

const CertificateContext = React.createContext(certificates);

export const CertificateConsumer = CertificateContext.Consumer;

export default CertificateContext;
