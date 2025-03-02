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
          <h3 className='header3'>Jak działa nauczanie w naszej szkole?</h3>
          <p>
            W Vista Studio Językowym pomagamy otwierać drzwi do świata dzięki łamaniu bariery
            językowej i znajomości języków obcych. Naszym celem jest wspieranie zarówno dzieci,
            młodzieży, jak i dorosłych w rozwijaniu umiejętności językowych w sposób nowoczesny,
            przyjazny i dostosowany do indywidualnych potrzeb.
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
