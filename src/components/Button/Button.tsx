import React from 'react';
import iniStyles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({
  type = 'button',
  children = 'Click me',
  value = '',
  className = '',
  style,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      className={`${iniStyles.button} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
