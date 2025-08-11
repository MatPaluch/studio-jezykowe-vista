import envelope from '../../assets/envelope.svg';
import phone from '../../assets/phone.svg';
import map from '../../assets/map.svg';
import style from './Contact.module.css';

function Contact() {
  return (
    <>
      <section className="container" id="contact">
        <div className={style.content}>
          <div className={style.titleContent}>
            <h4 className="tagline">Kontakt</h4>
            <h2 className="header2">Skontaktuj się</h2>
            <p className="textRegular">
              Zachęcamy do kontaktu! Jesteśmy dostępni, aby odpowiedzieć na
              wszystkie Twoje pytania.
            </p>
          </div>
          <address>
            <ul className={style.list}>
              <li className={style.item}>
                <img src={envelope} alt="envelopeIcon" width={24} height={24} />
                <span>
                  <h6 className="header6">Email</h6>
                  <a
                    className="textLinks"
                    href="mailto:studiojezykowevista@gmail.com"
                  >
                    studiojezykowevista@gmail.com
                  </a>
                </span>
              </li>
              <li className={style.item}>
                <img src={phone} alt="phoneIcon" width={24} height={24} />
                <span>
                  <h6 className="header6">Telefon</h6>
                  <a className="textLinks" href="tel:+48723956208">
                    +48 723 956 208
                  </a>
                </span>
              </li>
              <li className={style.item}>
                <img src={map} alt="mapIcon" width={24} height={24} />
                <span>
                  <h6 className="header6">Biuro</h6>
                  <a
                    className="textLinks"
                    href="https://maps.app.goo.gl/xy2Brt8hZFeSzqoV9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ul. Skotarska 17, 61-639 Poznań
                  </a>
                </span>
              </li>
            </ul>
          </address>
        </div>
      </section>
      {/* <div className={style.or}>
        <h2 className="header2">LUB</h2>
      </div> */}
    </>
  );
}

export default Contact;
