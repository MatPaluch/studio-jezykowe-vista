import en from '../../assets/mini-flag-uk.svg';
import de from '../../assets/mini-flag-germany.svg';
import es from '../../assets/mini-flag-spain.svg';
import chevron from '../../assets/rightChevron.svg';

import style from './Languages.module.css';
import Button from '../Button/Button';

function Languages() {
  return (
    <section className={`container ${style.secLang}`} id="language">
      <div className={style.headingContent}>
        <h4 className="tagline">Języki</h4>
        <h2 className="header2">Oferujemy naukę trzech języków obcych</h2>
        <p className="textRegular">
          Nasza szkoła językowa oferuje kursy z języka angielskiego,
          niemieckiego oraz hiszpańskiego. Każdy z tych języków otwiera drzwi do
          nowych możliwości i kultur.
        </p>
      </div>
      <ul className={style.cardList}>
        <li>
          <img src={en} alt="english_icon" width={50} height={30} />
          <h3 className="header3_5">Język angielski – klucz do świata</h3>
          <p className="textRegular">
            Angielski to najpopularniejszy język na świecie, niezbędny w
            komunikacji międzynarodowej.
          </p>
        </li>
        <li>
          <img src={de} alt="german_icon" width={50} height={30} />
          <h3 className="header3_5">Język niemiecki – język biznesu i nauki</h3>
          <p className="textRegular">
            Niemiecki to język, który otwiera drzwi do kariery w Europie.
          </p>
        </li>
        <li>
          <img src={es} alt="spain_icon" width={50} height={30} />
          <h3 className="header3_5">
            Język hiszpański – język pasji i kultury
          </h3>
          <p className="textRegular">
            Hiszpański to język, który łączy ludzi i kultury na całym świecie.
          </p>
        </li>
      </ul>
      <a href="#contact">
        <Button style={{ width: 190 }}>
          Zapisz się{' '}
          <img src={chevron} alt="chevronRight" width="24" height="24" />
        </Button>
      </a>
    </section>
  );
}

export default Languages;
