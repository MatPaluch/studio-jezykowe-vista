import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import style from './MobileMenu.module.css';
import Button from '../Button/Button';
import cross from '../../assets/cross.svg';
import loginArrow from '../../assets/loginArrow.svg';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => {
        document
          .querySelector(`.${style.mobileMenu}`)
          ?.classList.add(`${style.show}`);
      }, 50);
    } else {
      document
        .querySelector(`.${style.mobileMenu}`)
        ?.classList.remove(`${style.show}`);
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
      <h4 className={style.headerLogo}>
        Vista
        <br />
        Studio
        <br />
        Językowe
      </h4>
      <div className={style.hamburger} onClick={toggleMenu}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 24H42M6 12H42M6 36H42"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isMenuOpen && (
        <div className={style.mobileMenu}>
          <button className={style.menuToggle} onClick={toggleMenu}>
            <img src={cross} alt="CloseIcon" />
          </button>

          <nav className="menu-nav">
            <ul className={style.navList}>
              <li>
                <Link to="/studio-jezykowe-vista" onClick={toggleMenu}>
                  Strona główna
                </Link>
              </li>
              <li>
                <a href="#learning" onClick={toggleMenu}>
                  Nauczanie
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  O nas
                </a>
              </li>
              <li>
                <a href="#language" onClick={toggleMenu}>
                  Języki
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Kontakt
                </a>
              </li>
              <Link to="/studio-jezykowe-vista/student" onClick={toggleMenu}>
                <Button>
                  <img src={loginArrow} />
                  <span>Przejdź do strefy ucznia</span>
                </Button>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
