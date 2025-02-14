import { Link } from 'react-router';
import style from './Hero.module.css';
import europeMap from '../../assets/europeMap.svg';
import CountryMessage from '../CountryMessage/CountryMessage';
import poland from '../../assets/miniflag-poland.svg';

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
          <CountryMessage src={poland} className={style.poland}>
            Miło cię widzieć!
          </CountryMessage>
        </div>
      </div>
    </section>
  );
}

export default Hero;
