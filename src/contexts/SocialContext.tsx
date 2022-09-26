import * as React from 'react';
import ISocial from '../interfaces/resume/ISocial';
import { SocialIcon, SocialIconProps } from 'react-social-icons';

const svgProps: SocialIconProps = {
  className: 'w-[30px!important] h-[30px!important]',
  bgColor: '#555',
};

export const socials: ISocial[] = [
  {
    site: <SocialIcon {...svgProps} url="https://mail.google.com" />,
    url: 'nagy.viktor392@gmail.com',
    mail: true,
  },
  {
    site: <SocialIcon {...svgProps} url="https://www.linkedin.com/in/viktor-nagy-07672a246" />,
    url: 'https://www.linkedin.com/in/viktor-nagy-07672a246',
  },
  {
    site: <SocialIcon {...svgProps} url="https://github.com/kmpizmad" />,
    url: 'https://github.com/kmpizmad',
  },
  {
    site: <SocialIcon {...svgProps} url="https://stackoverflow.com/users/13747848/kmp" />,
    url: 'https://stackoverflow.com/users/13747848/kmp',
  },
];

const SocialContext = React.createContext(socials);

export const SocialConsumer = SocialContext.Consumer;

export default SocialContext;
