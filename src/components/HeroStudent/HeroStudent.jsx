import Button from '../Button/Button';
import chevron from '../../assets/rightChevron.svg';
import style from './HeroStudent.module.css';
function HeroStudent() {
  return (
    <section className={` ${style.heroStudent}`}>
      <div className={`container ${style.content}`}>
        <h4 className="tagline" style={{ color: 'white' }}>
          Witaj!
        </h4>
        <h2 className="header2" style={{ color: 'white' }}>
          To jest Twoja strefa ucznia
        </h2>
        <p className="textMedium" style={{ color: 'white' }}>
          Odkryj funkcje, które ułatwią Ci naukę języków i dostęp do materiałów
          edukacyjnych.
        </p>
        <Button>
          Zaloguj się
          <img src={chevron} alt="rightChevron" width="24" height="24" />
        </Button>
      </div>
    </section>
  );
}

export default HeroStudent;
