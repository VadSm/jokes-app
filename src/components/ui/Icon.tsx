import React from 'react';

interface IProps {
  iconPath: string;
  className?: string;
  title?: string;
}

const Icon = ({ className: customClassName, iconPath, title }: IProps) => (
  <div
    className={`custom-icon ${customClassName || ''}`}
    style={{ backgroundImage: `url(${iconPath})` }}
    title={title}
  />
);

export default Icon;
