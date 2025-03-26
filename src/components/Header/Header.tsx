import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.png';
import loginArrow from '../../assets/loginArrow.svg';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu.tsx';
import TabletMenu from '../TabletMenu/TabletMenu.tsx';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to="/studio-jezykowe-vista">
          <img
            className={style.navLogo}
            src={logo}
            alt="Logo Studio Językowe Vista"
            width={90}
            height={90}
          />
        </Link>

        <div className={style.navigation}>
          {windowWidth > 1024 && (
            <>
              <ul className={style.navList}>
                <li>
                  <Link to="/studio-jezykowe-vista" className="textMedium">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <a href="#learning" className="textMedium">
                    Nauczanie
                  </a>
                </li>
                <li>
                  <a href="#about" className="textMedium">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#language" className="textMedium">
                    Języki
                  </a>
                </li>
                <li>
                  <a href="#contact" className="textMedium">
                    Kontakt
                  </a>
                </li>
              </ul>
              <Link to="/studio-jezykowe-vista/student">
                <Button>
                  <img src={loginArrow} />
                  <span>Przejdź do strefy ucznia</span>
                </Button>
              </Link>
            </>
          )}
          {windowWidth >= 520 && windowWidth <= 1024 && <TabletMenu />}

          {windowWidth < 520 && <MobileMenu />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
