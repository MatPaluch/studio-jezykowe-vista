import { Link } from 'react-router';
import style from './Header.module.css';
import logo from '../../assets/logo.png';

function Logo() {
  return (
    <Link to="/">
      <img
        className={style.navLogo}
        src={logo}
        alt="Logo Studio Językowe Vista"
        width={90}
        height={90}
      />
    </Link>
  );
}

export default Logo;
