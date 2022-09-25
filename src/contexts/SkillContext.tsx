import React from 'react';
import ISkill from '../interfaces/resume/ISkill';
import {
  JavascriptPlainIcon,
  TypescriptPlainIcon,
  Css3PlainIcon,
  SassOriginalIcon,
  NodejsPlainIcon,
  PythonOriginalIcon,
  AngularjsPlainIcon,
  ReactOriginalIcon,
  NextjsOriginalIcon,
  FlaskOriginalIcon,
  GitOriginalIcon,
} from 'react-devicons';

const svgProps = {
  className: 'w-[30px!important] h-[30px!important]',
};

// TODO: get icons for languages

export const skills: ISkill[] = [
  { name: 'JavaScript', level: 5, icon: <JavascriptPlainIcon {...svgProps} /> },
  { name: 'TypeScript', level: 5, icon: <TypescriptPlainIcon {...svgProps} /> },
  { name: 'CSS', level: 5, icon: <Css3PlainIcon {...svgProps} /> },
  { name: 'SCSS', level: 4, icon: <SassOriginalIcon {...svgProps} /> },
  { name: 'Node.js', level: 4, icon: <NodejsPlainIcon {...svgProps} /> },
  { name: 'Python', level: 3, icon: <PythonOriginalIcon {...svgProps} /> },
  { name: 'Angular2+', level: 3, icon: <AngularjsPlainIcon {...svgProps} /> },
  { name: 'React', level: 3, icon: <ReactOriginalIcon {...svgProps} /> },
  { name: 'Next.js', level: 3, icon: <NextjsOriginalIcon {...svgProps} /> },
  { name: 'Flask', level: 2, icon: <FlaskOriginalIcon {...svgProps} /> },
  { name: 'Git', level: 4, icon: <GitOriginalIcon {...svgProps} /> },
];

const SkillContext = React.createContext(skills);

export const SkillConsumer = SkillContext.Consumer;

export default SkillContext;
