import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.PropsWithChildren {
  icon?: JSX.Element;
}

const ActionButton: React.FC<IProps> = ({ icon, children, className, ...btnProps }) => {
  const classes = `${className} flex gap-2`;

  return (
    <button {...btnProps} className={classes}>
      <div>{icon}</div>
      <div>{children}</div>
    </button>
  );
};

export default ActionButton;
