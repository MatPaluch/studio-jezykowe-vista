import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import loginArrow from '../../assets/loginArrow.svg';
import style from './Header.module.css';
import Button from '../Button/Button';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <ul className={style.navList}>
          <li>
            <Link to='/studio-jezykowe-vista'>
              <img
                className={style.navLogo}
                src={logo}
                alt='Logo Studio Językowe Vista'
                width={90}
                height={90}
              />
            </Link>
          </li>
          <li>
            <Link to='/studio-jezykowe-vista' className='textMedium'>
              Strona główna
            </Link>
          </li>
          <li>
            <a href='#learning' className='textMedium'>
              Nauczanie
            </a>
          </li>
          <li>
            <a href='#about' className='textMedium'>
              O nas
            </a>
          </li>
          <li>
            <a href='#language' className='textMedium'>
              Języki
            </a>
          </li>
          <li>
            <a href='#contact' className='textMedium'>
              Kontakt
            </a>
          </li>
        </ul>

        <Link to='/student'>
          <Button>
            <img src={loginArrow} />
            <span>Przejdź do strefy ucznia</span>
          </Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
