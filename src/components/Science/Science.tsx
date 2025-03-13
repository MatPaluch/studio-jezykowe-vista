import style from './Science.module.css';
import Button from '../Button/Button';
import checkCircle from '../../assets/checkCircle.svg';
import activity from '../../assets/activity.svg';
import growingUp from '../../assets/trendingUp.svg';
import chevron from '../../assets/rightChevron.svg';

function Science() {
  return (
    <section className='container' id='learning'>
      <div>
        <div className={style.cardDescription}>
          <h3 className='header3'>Jak uczymy w Studio Językowym Vista?</h3>
          <p>
            Na naszych zajęciach skupiamy się na wcześniej wyznaczonych celach, aby zapewnić
            efektywną i satysfakcjonującą naukę. Dla niektórych będzie to szlifowanie akcentu, a dla
            innych – zdobycie piątki ze sprawdzianu lub kartkówki. Twoje potrzeby są dla nas
            najważniejsze.
            <br />
            <br />
            Aby nauka języków była ciekawa, korzystamy z różnorodnych podcastów, materiałów na
            YouTube oraz muzyki. Dla każdego znajdzie się coś interesującego! Pomagamy w sposób
            nowoczesny, przyjazny i dostosowany do indywidualnych potrzeb.
          </p>
        </div>
      </div>
      <div>
        <ul className={style.benefitsList}>
          <li>
            <div>
              <img src={checkCircle} alt='checkCircle' width='48' height='48' />
              <h4 className='header4'>
                Korzyści płynące z indywidualnych zajęć językowych w Vista
              </h4>
              <p>Indywidualne podejście zapewnia skuteczniejszą naukę i szybsze postępy.</p>
              <Button style={{ marginTop: 64 }}>
                Dowiedz się więcej <img src={chevron} alt='chevronRight' width='24' height='24' />
              </Button>
            </div>
          </li>
          <li>
            <div>
              <img src={activity} alt='checkCircle' width='48' height='48' />
              <h4 className='header4'>Metoda nauczania dostosowana do Twojego stylu uczenia</h4>
              <p>Wykorzystujemy różnorodne materiały i techniki, aby uczynić naukę przyjemną.</p>
              <Button style={{ marginTop: 64 }}>
                Dowiedz się więcej <img src={chevron} alt='chevronRight' width='24' height='24' />
              </Button>
            </div>
          </li>
          <li>
            <div>
              <img src={growingUp} alt='checkCircle' width='48' height='48' />
              <h4 className='header4'>Odkryj, jak szybko możesz osiągnąć swoje cele językowe</h4>
              <p>Z nami nauka staje się łatwiejsza i bardziej efektywna.</p>
              <Button style={{ marginTop: 64 }}>
                Dowiedz się więcej <img src={chevron} alt='chevronRight' width='24' height='24' />
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Science;
