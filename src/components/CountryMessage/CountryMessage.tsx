import style from './CountryMessage.module.css';

interface countryMessagePropTypes {
  children?: React.ReactNode;
  text?: string;
  src?: string;
  className?: string;
}

function CountryMessage({ children, text, src, className }: countryMessagePropTypes) {
  return (
    <div className={`${style.cloud} ${className}`}>
      <span className={style.message}>{children}</span>
      <img src={src} width='50' height='30' />
    </div>
  );
}

export default CountryMessage;
