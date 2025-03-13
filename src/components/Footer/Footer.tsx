import style from './Footer.module.css';
import logo from '../../assets/logo84x84.png';
import instagram from '../../assets/InstagramIcon.svg';
import facebook from '../../assets/FacebookIcon.svg';
import linkedin from '../../assets/LinkedInIcon.svg';
import youtube from '../../assets/YoutubeIcon.svg';
import { Link } from 'react-router';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className='container'>
        <ul className={style.footerColumns}>
          <li>
            <img src={logo} alt='logo84x84' width={84} height={84} />
          </li>
          <li>
            <h4 className='semiBold'>Vista Studio Językowe</h4>
            <ul className={style.vsjCol}>
              <li>
                <a href='#about'>Dlaczego my</a>
              </li>
              <li>
                <a href='#language'>Języki</a>
              </li>
              <li>
                <a href='#about'>O nas</a>
              </li>
              <li>
                <a href='#faq'>
                  <abbr title='Frequently Asked Questions' style={{ textDecoration: 'none' }}>
                    FAQ
                  </abbr>
                </a>
              </li>
              <li>
                <a href='#contact'>Kontakt</a>
              </li>
            </ul>
          </li>
          <li>
            <h4 className='semiBold'>Nasze usługi</h4>
            <ul className={style.vsjCol}>
              <li>
                <a href='#about'>Zajęcia indywidualne</a>
              </li>
              <li>
                <a href='#language'>Opinie uczniów</a>
              </li>
              <li>
                <a href='#about'>Cennik kursów</a>
              </li>
            </ul>
          </li>
          <li>
            <h4 className='semiBold'>Socjale</h4>
            <ul className={`${style.vsjCol} ${style.socialList}`}>
              <li>
                <div className={style.iconBg}>
                  <img src={instagram} alt='instagramIcon' width={24} height={24} />
                </div>
                <a href='#about'>instagram.com/vista</a>
              </li>
              <li>
                <div className={style.iconBg}>
                  <img src={facebook} alt='facebookIcon' width={24} height={24} />
                </div>
                <a href='#language'>facebook.com/vista</a>
              </li>
              <li>
                <div className={style.iconBg}>
                  <img src={linkedin} alt='linkedinIcon' width={24} height={24} />
                </div>
                <a href='#about'>linkedin.com/vista</a>
              </li>
              <li>
                <div className={style.iconBg}>
                  <img src={youtube} alt='youtubeIcon' width={24} height={24} />
                </div>
                <a href='#about'>youtube.com/vista</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={style.policyInfo}>
          <li>
            <span>&copy; {year} Vista Studio Językowe. Wszelkie prawa zastrzeżone.</span>
          </li>
          <li>
            <Link to='/studio-jezykowe-vista/privacyPolicy'>Polityka prywatności</Link>
          </li>
          <li>
            <Link to='/studio-jezykowe-vista/termOfUse'>Warunki korzystania</Link>
          </li>
          <li>
            <Link to='/studio-jezykowe-vista/cookies'>Ustawienia cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
