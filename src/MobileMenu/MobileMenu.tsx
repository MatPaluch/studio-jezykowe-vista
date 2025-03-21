import { useEffect, useState } from 'react';
import style from './MobileMenu.module.css';
import cross from '../assets/cross.svg';
import { Link } from 'react-router';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
      <h3 style={{ lineHeight: 1.2 }}>
        Vista
        <br />
        Studio
        <br />
        Językowe
      </h3>
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
                <Link to="/studio-jezykowe-vista" className="textMedium">
                  Strona główna
                </Link>
              </li>
              <li>
                <a href="#learning" className="textMedium" onClick={toggleMenu}>
                  Nauczanie
                </a>
              </li>
              <li>
                <a href="#about" className="textMedium" onClick={toggleMenu}>
                  O nas
                </a>
              </li>
              <li>
                <a href="#language" className="textMedium" onClick={toggleMenu}>
                  Języki
                </a>
              </li>
              <li>
                <a href="#contact" className="textMedium" onClick={toggleMenu}>
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
