import style from './Learning.module.css';
import Button from '../Button/Button';
import checkCircle from '../../assets/checkCircle.svg';
import activity from '../../assets/activity.svg';
import growingUp from '../../assets/trendingUp.svg';
import chevron from '../../assets/chevron_right.svg';

function Learning() {
  return (
    <section className="container" id="learning">
      <div>
        <div className={style.cardDescription}>
          <div className={style.header}>
            <h4 className="tagline">Nauczanie</h4>
            <h2 className="header2">Jak uczymy w Studio Językowym Vista?</h2>
          </div>

          <p className="textRegular">
            Na naszych zajęciach skupiamy się na wcześniej wyznaczonych celach,
            aby zapewnić efektywną i satysfakcjonującą naukę. Dla niektórych
            będzie to szlifowanie akcentu, a dla innych – zdobycie piątki ze
            sprawdzianu lub kartkówki. Twoje potrzeby są dla nas najważniejsze.
            <br />
            <br />
            Aby nauka języków była ciekawa, korzystamy z różnorodnych podcastów,
            materiałów na YouTube oraz muzyki. Dla każdego znajdzie się coś
            interesującego! Pomagamy w sposób nowoczesny, przyjazny i
            dostosowany do indywidualnych potrzeb.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Learning;
