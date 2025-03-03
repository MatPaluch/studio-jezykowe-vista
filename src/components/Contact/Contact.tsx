import envelope from '../../assets/envelope.svg';
import phone from '../../assets/phone.svg';
import map from '../../assets/map.svg';
import style from './Contact.module.css';

function Contact() {
  return (
    <section className='container'>
      <div className={style.content}>
        <div className={style.titleContent}>
          <h4 className='tagline'>Kontakt</h4>
          <h2 className='header2'>Skontaktuj się</h2>
          <p className='textRegular'>
            Zachęcamy do kontaktu! Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania.
          </p>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <img src={envelope} alt='envelopeIcon' width={24} height={24} />
            <span>
              <h6 className='header6'>Email</h6>
              <a className='textLinks' href='mailto:kontakt@vista.edu.pl'>
                kontakt@vista.edu.pl
              </a>
            </span>
          </li>
          <li className={style.item}>
            <img src={phone} alt='phoneIcon' width={24} height={24} />
            <span>
              <h6 className='header6'>Telefon</h6>
              <a className='textLinks' href='mailto:+48 123 456 789'>
                +48 123 456 789
              </a>
            </span>
          </li>
          <li className={style.item}>
            <img src={map} alt='mapIcon' width={24} height={24} />
            <span>
              <h6 className='header6'>Biuro</h6>
              <a className='textLinks' href='mailto:kontakt@vista.edu.pl'>
                ul. Przykładowa 123, Warszawa 00-001 PL
              </a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
