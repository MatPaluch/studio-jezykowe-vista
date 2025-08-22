import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import NavList from './NavList';
import StudentNav from './StudentNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import TabletMenu from '../TabletMenu/TabletMenu';
import Button from '../Button/Button';
import loginArrow from '../../assets/loginArrow.svg';
import Login from './Login/Login';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

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
        <Logo />
        <div className={style.navigation}>
          {location.pathname === '/student' ? (
            <>
              <StudentNav />
              <Login />
            </>
          ) : (
            <>
              {windowWidth > 1024 && (
                <>
                  <NavList />
                  <Link to="/student">
                    <Button>
                      <img src={loginArrow} />
                      <span>Przejdź do strefy ucznia</span>
                    </Button>
                  </Link>
                </>
              )}
              {windowWidth >= 520 && windowWidth <= 1024 && <TabletMenu />}
              {windowWidth < 520 && <MobileMenu />}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
