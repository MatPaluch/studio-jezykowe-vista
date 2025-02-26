import React from 'react';

interface ButtonProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  children = 'Click me',
  value = '',
  className = '',
  style,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} value={value} className={`button ${className}`} style={style}>
      {children}
    </button>
  );
}

export default Button;
