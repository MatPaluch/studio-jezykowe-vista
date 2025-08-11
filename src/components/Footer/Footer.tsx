import style from './Footer.module.css';
import logo from '../../assets/logo84x84.png';
import instagram from '../../assets/InstagramIcon.svg';
import facebook from '../../assets/FacebookIcon.svg';
import { Link } from 'react-router';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <ul className={style.footerColumns}>
          <li>
            <img src={logo} alt="logo84x84" width={84} height={84} />
          </li>
          <li>
            <h4 className="semiBold">
              <Link to="/studio-jezykowe-vista">Vista Studio Językowe</Link>
            </h4>
            <ul className={style.vsjCol}>
              <li>
                <Link to="/studio-jezykowe-vista/#about">O nas</Link>
              </li>
              <li>
                <Link to="/studio-jezykowe-vista/#about">Dlaczego my</Link>
              </li>
              <li>
                <Link to="/studio-jezykowe-vista#language">Języki</Link>
              </li>
              <li>
                <Link to="/studio-jezykowe-vista#faq">
                  <abbr
                    title="Frequently Asked Questions"
                    style={{ textDecoration: 'none' }}
                  >
                    FAQ
                  </abbr>
                </Link>
              </li>
              <li>
                <Link to="/studio-jezykowe-vista/#contact">Kontakt</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="semiBold">Nasze usługi</h4>
            <ul className={style.vsjCol}>
              <li>
                <Link to="/studio-jezykowe-vista#about">
                  Zajęcia indywidualne
                </Link>
              </li>
              <li>
                <Link to="/studio-jezykowe-vista#about">Cennik kursów</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="semiBold">Socjale</h4>
            <ul className={`${style.vsjCol} ${style.socialList}`}>
              <li>
                <div className={style.iconBg}>
                  <img
                    src={instagram}
                    alt="instagramIcon"
                    width={24}
                    height={24}
                  />
                </div>
                <a
                  href="https://www.instagram.com/studiojezykowevista/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram.com/studiojezykowevista
                </a>
              </li>
              <li>
                <div className={style.iconBg}>
                  <img
                    src={facebook}
                    alt="facebookIcon"
                    width={24}
                    height={24}
                  />
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=61557406795806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/studiojezykowevista
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={style.policyInfo}>
          {/* <li>
            <Link to="/studio-jezykowe-vista/privacyPolicy">
              Polityka prywatności
            </Link>
          </li>
          <li>
            <Link to="/studio-jezykowe-vista/termOfUse">
              Warunki korzystania
            </Link>
          </li>
          <li>
            <Link to="/studio-jezykowe-vista/cookies">Ustawienia cookies</Link>
          </li> */}
          <li>
            <span>
              &copy; {year} Vista Studio Językowe. Wszelkie prawa zastrzeżone.
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
