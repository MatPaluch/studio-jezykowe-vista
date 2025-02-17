import style from './CountryMessage.module.css';
import triangle from '../../assets/triangle.svg';

interface countryMessagePropTypes {
  children?: React.ReactNode;
  src?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  flagAlignRight?: boolean;
  cloudPointerRight?: boolean;
  delay?: string;
}

function CountryMessage({
  children,
  src,
  top,
  right,
  bottom,
  left,
  flagAlignRight,
  cloudPointerRight,
  delay,
}: countryMessagePropTypes) {
  return (
    <div
      className={style.cloud}
      style={{
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        flexDirection: flagAlignRight ? 'row-reverse' : 'row',
        animationDelay: delay,
      }}
    >
      <img src={src} width='50' height='30' />
      <span className={style.message}>{children}</span>
      <img
        src={triangle}
        width={32}
        height={16}
        className={style.triangle}
        style={cloudPointerRight ? { right: 18 } : { left: 18 }}
      />
    </div>
  );
}

export default CountryMessage;
