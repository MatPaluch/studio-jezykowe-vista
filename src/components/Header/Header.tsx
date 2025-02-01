import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import loginArrow from '../../assets/logInArrow.svg';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <nav className={`${style.navigation}  container`}>
        <ul className={style.navList}>
          <li>
            <Link to='/' className={style.homePageLink}>
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
            <Link to='/' className={style.homePageLink}>
              Strona główna
            </Link>
          </li>
          <li>
            <a href='#learning'>Nauczanie</a>
          </li>
          <li>
            <a href='#about'>O nas</a>
          </li>
          <li>
            <a href='#language'>Języki</a>
          </li>
          <li>
            <a href='#contact'>Kontakt</a>
          </li>
        </ul>

        <Link to='/student' className={style.studentButton}>
          <img src={loginArrow} />
          <span>Przejdź do strefy ucznia</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
