function Button({ children, value }: { children: string; value: string }) {
  return <button value={value}>{`Button ${children}`}</button>;
}

export default Button;
