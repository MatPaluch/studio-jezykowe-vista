import clipboard from '../../assets/clip_board.svg';
import check_circle from '../../assets/check_circle.svg';
import style from './FlashCards.module.css';

function FlashCards() {
  return (
    <section className="container">
      <div className={style.sectionContent}>
        <div className={style.contentHeader}>
          <h4 className="tagline">Fiszki</h4>
          <h2 className="header2">Odkryj moc nauki z fiszkami</h2>
          <p>
            Fiszki to interaktywne narzędzie, które ułatwia zapamiętywanie
            słówek i zwrotów. Dzięki nim nauka staje się przyjemniejsza i
            bardziej efektywna.
          </p>
          <div className={style.subHeader}>
            <div className={style.howItWorks}>
              <img src={clipboard} alt="clipboard" />
              <h3 className="tagline">Jak to działa?</h3>
              <p className="textMedium">
                Twórz własne fiszki lub korzystaj z gotowych zestawów.
              </p>
            </div>
            <div className={style.benefits}>
              <img src={check_circle} alt="clipboard" />
              <h3 className="tagline">Korzyści z fiszek</h3>
              <p className="textMedium">
                Uskutecznij swoją pamięć i przyspiesz proces nauki języków.
              </p>
            </div>
          </div>
        </div>

        <div className={style.flashCards}></div>
      </div>
    </section>
  );
}

export default FlashCards;
