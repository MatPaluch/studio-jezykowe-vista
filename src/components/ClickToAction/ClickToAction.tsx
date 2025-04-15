import Button from '../Button/Button';
import chevron from '../../assets/chevron_right.svg';
import style from './ClickToAction.module.css';

function ClickToAction() {
  return (
    <section className={`container ${style.section}`}>
      <h2 className="header2">Zacznij swoją językową przygodę</h2>
      <div>
        <p className="textRegular">
          Dołącz do naszej szkoły i odkryj radość nauki języków obcych. Zapisz
          się na zajęcia już dziś i otwórz drzwi do nowych możliwości!
        </p>
        <a href="#contact">
          <Button style={{ marginTop: 32, width: 190 }}>
            Zapisz się{' '}
            <img src={chevron} alt="chevronRight" width="24" height="24" />
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ClickToAction;
