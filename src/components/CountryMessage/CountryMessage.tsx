interface countryMessagePropTypes {
  text?: string;
  src?: string;
  className?: string;
}

function CountryMessage({ text, src, className }: countryMessagePropTypes) {
  return (
    <div>
      <span>{text}</span>
      <img src={src} />
    </div>
  );
}

export default CountryMessage;
