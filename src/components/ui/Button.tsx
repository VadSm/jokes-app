import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  customClassName?: string;
}

const Button = ({ children: text, customClassName, ...btnProps }: IProps) => (
  <button
    type="button"
    className={`custom-button ${customClassName || ''}`}
    {...btnProps}
  >
    {text}
  </button>
);

export default Button;
