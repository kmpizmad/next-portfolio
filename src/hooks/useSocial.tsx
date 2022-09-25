import React from 'react';
import SocialContext from '../contexts/SocialContext';
import ISocial from '../interfaces/resume/ISocial';

const useSocial = (): ISocial[] => {
  return React.useContext(SocialContext);
};

export default useSocial;
