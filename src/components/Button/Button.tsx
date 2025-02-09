interface buttonPropsTypes {
  className?: string;
  children?: React.ReactNode;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, value, className, onClick }: buttonPropsTypes) {
  return (
    <button onClick={onClick} value={value} className={className}>
      {children}
    </button>
  );
}

export default Button;
