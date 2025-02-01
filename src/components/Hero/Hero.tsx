import Button from '../Button/Button';
import style from './Hero.module.css';

function Hero() {
  return (
    <section className={style.heroSection}>
      <div>
        <h1>Odkryj świat języków z Studio Językowe Vista!</h1>
        <Button value='buttoned'>To jest wartość w button</Button>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
