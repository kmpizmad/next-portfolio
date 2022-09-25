import * as React from 'react';
import SocialContext, { socials } from '../contexts/SocialContext';

const SocialProvider: React.FC<React.PropsWithChildren> = props => {
  return <SocialContext.Provider value={socials}>{props.children}</SocialContext.Provider>;
};

export default SocialProvider;
