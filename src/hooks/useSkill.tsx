import * as React from 'react';
import SkillContext from '../contexts/SkillContext';
import ISkill from '../interfaces/resume/ISkill';

const useSkill = (): ISkill[] => {
  return React.useContext(SkillContext);
};

export default useSkill;
