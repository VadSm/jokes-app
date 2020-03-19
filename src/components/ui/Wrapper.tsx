import React from 'react';

interface IProps {
  children: React.ReactNode | null;
  className?: string;
}

const Wrapper = ({ children, className: customClassName }: IProps) => (
  <div className={`wrapper ${customClassName || ''}`}>
    {children}
  </div>
);

export default Wrapper;
