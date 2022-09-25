import * as React from 'react';
import SkillContext, { skills } from '../contexts/SkillContext';

const SkillProvider: React.FC<React.PropsWithChildren> = props => {
  return <SkillContext.Provider value={skills}>{props.children}</SkillContext.Provider>;
};

export default SkillProvider;
