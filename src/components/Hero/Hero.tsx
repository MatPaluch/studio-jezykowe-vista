import { Link } from 'react-router';
import style from './Hero.module.css';
import europeMap from '../../assets/europeMap.svg';
import CountryMessage from '../CountryMessage/CountryMessage';
import poland from '../../assets/mini-flag-poland.svg';
import germany from '../../assets/mini-flag-germany.svg';
import uk from '../../assets/mini-flag-uk.svg';
import spain from '../../assets/mini-flag-spain.svg';

function Hero() {
  const handle = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.innerHTML);
  };

  return (
    <section className={style.heroSection}>
      <div className={`container ${style.mainContainer}`}>
        <div className={style.leftSide}>
          <h1>Odkryj świat języków z Studio Językowe Vista!</h1>
          <p className={style.subHeader}>
            Nasza szkoła językowa oferuje indywidualne podejście do każdego ucznia, zapewniając
            skuteczną naukę języków obcych. Z nami odkryjesz radość z nauki angielskiego,
            niemieckiego i hiszpańskiego.
          </p>
          <Link to='#contact' className={`${style.trialLesson} button`}>
            Umów się na lekcję próbną
          </Link>
        </div>
        <div className={style.rightSide}>
          <img width='734' height='456' src={europeMap} className={style.svgEuropeMap} />
          <CountryMessage src={poland} top={112} right={106} flagAlignRight={true}>
            Cześć!
          </CountryMessage>
          <CountryMessage src={uk} top={106} left={206} cloudPointerRight={true}>
            Hello!
          </CountryMessage>
          <CountryMessage src={germany} top={160} right={244}>
            Hallo!
          </CountryMessage>
          <CountryMessage src={spain} bottom={132} left={64} cloudPointerRight={true}>
            ¡Hola!
          </CountryMessage>
        </div>
      </div>
    </section>
  );
}

export default Hero;
