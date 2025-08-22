import en from '../../assets/mini-flag-uk.svg';
import de from '../../assets/mini-flag-germany.svg';
import es from '../../assets/mini-flag-spain.svg';
import chevron from '../../assets/chevron_right.svg';
import pointer_polygon from '../../assets/pointer_polygon.svg';

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

      <ul className={style.categoryList}>
        <li className={style.categoryItem}>
          <div className={style.categoryHeader}>
            <span className="header3_5">📘</span>
            <h3 className="header3_5">Kurs językowy</h3>
          </div>

          <ul className={style.categoryContent}>
            <li>
              <h4>KURS INDYWIDUALNY</h4>
              <p>
                Nauka dla każdego: dzieci, młodzieży, studentów,dorosłych i
                seniorów.
              </p>
            </li>
            <li>
              <h4>ZAJĘCIA KONWERSACYJNE</h4>
              <p>Swobodne konwersacje które przełamią bariery językowe.</p>
            </li>
            <li>
              <h4>BUSINESS ENGLISH</h4>
              <p>Profesjonalny angielski w pracy i biznesie.</p>
            </li>
            <li>
              <h4>PRZYGOTOWANIE DO ROZMÓW KWALIFIKACYJNYCH</h4>
              <p>Symulacje rozmów, przygotowanie do pytań i odpowiedzi.</p>
            </li>
            <li>
              <h4>ANGIELSKI W PODRÓŻY</h4>
              <p>Mów pewnie w każdym zakątku świata.</p>
            </li>
          </ul>
        </li>
        <img
          src={pointer_polygon}
          alt="pointer_polygon"
          className={style.pointerPolygon}
          width={64}
          height={48}
        />
        <li className={style.categoryItem}>
          <div className={style.categoryHeader}>
            <span className="header3_5">✏️</span>
            <h3 className="header3_5">Korepetycje</h3>
          </div>

          <ul className={style.categoryContent}>
            <li>
              <h4>PROFESJONALNE WSPARCIE DLA UCZNIÓW</h4>
              <p>Szkół podstawowych, liceum i technikum.</p>
            </li>
            <li>
              <h4>KOREPETYCJE DLA STUDENTÓW</h4>
              <p>Nadrobienie zaległości lub nauka ,,na 5’’.</p>
            </li>
            <li>
              <h4>POWTÓRKI MATERIAŁÓW</h4>
              <p>Przygotowanie do kartkówek i sprawdzianów.</p>
            </li>
            <li>
              <h4>ĆWICZENIE UMIEJĘTNOŚCI</h4>
              <p>Komunikacyjnych i werbalnych w praktyce.</p>
            </li>
          </ul>
        </li>

        <li className={style.categoryItem}>
          <div className={style.categoryHeader}>
            <span className="header3_5">🎓</span>
            <h3 className="header3_5">Egzaminy</h3>
          </div>

          <ul className={style.categoryContent}>
            <li>
              <h4>MATURA Z J. ANGIELSKIEGO</h4>
              <p>Poziom podstawowy i rozszerzony.</p>
            </li>
            <li>
              <h4>EGZAMIN ÓSMOKLASISTY Z J. ANGIELSKIEGO</h4>
              <p>Bez stresu i z dobrym wynikiem.</p>
            </li>
          </ul>
        </li>
      </ul>

      <a href="#contact">
        <Button style={{ width: 190 }}>
          Zapisz się
          <img src={chevron} alt="chevronRight" width="24" height="24" />
        </Button>
      </a>
    </section>
  );
}

export default Languages;
