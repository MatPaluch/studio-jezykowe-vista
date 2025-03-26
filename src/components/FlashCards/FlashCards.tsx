import clipboard from '../../assets/clip_board.svg';
import check_circle from '../../assets/check_circle.svg';
import arrow_left_circle from '../../assets/arrow_left_circle.svg';
import arrow_right_circle from '../../assets/arrow_right_circle.svg';
import flashCards from '../../assets/flashcards.jpg';
import style from './FlashCards.module.css';
import CheckButton from '../CheckButton/CheckButton';
import FlipButton from '../FlipButton/FlipButton';

function FlashCards() {
  return (
    <section className="container">
      <div className={style.sectionContent}>
        <div className={style.contentHeader}>
          <h4 className="tagline">Fiszki</h4>
          <h2 className="header2">Odkryj moc nauki z fiszkami</h2>
          <p className="textMedium">
            Fiszki to interaktywne narzędzie, które ułatwia zapamiętywanie
            słówek i zwrotów. Dzięki nim nauka staje się przyjemniejsza i
            bardziej efektywna.
          </p>
          <div className={style.subHeader}>
            <div className={style.subContent}>
              <img src={clipboard} alt="clipboard" width={32} height={32} />
              <h3 className="tagline">Jak to działa?</h3>
              <p className="textMedium">
                Twórz własne fiszki a następnie sprawdzaj swoją wiedzę.
              </p>
            </div>
            <div className={style.subContent}>
              <img src={check_circle} alt="clipboard" width={32} height={32} />
              <h3 className="tagline">Wybierz sposób uczenia</h3>
              <p className="textMedium">
                Tradycyjnie za pomocą fiszek lub interaktywnie z naszą
                aplikacją.
              </p>
            </div>
          </div>
        </div>
        <div className={style.flashCardImgContainer}>
          <img
            src={flashCards}
            alt="Flash_cards"
            className={style.flashCardImg}
          />
        </div>

        {/* <div className={style.flashCardContainer}>
          <img
            src={arrow_left_circle}
            style={{ cursor: 'pointer' }}
            alt="arrow_left_circle"
            width={48}
            height={48}
          />
          <div className={style.flashCard}>
            <span className={`tagline ${style.summary}`}>1/3</span>
            <span className="tagline">swimming</span>
            <div className={style.flashCardButtons}>
              <FlipButton />
              <CheckButton />
            </div>
          </div>
          <img
            src={arrow_right_circle}
            style={{ cursor: 'pointer' }}
            alt="arrow_right_circle"
            width={48}
            height={48}
          />
        </div> */}
      </div>
    </section>
  );
}

export default FlashCards;
