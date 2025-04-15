import { Link } from 'react-router';
import style from './Header.module.css';

function NavList() {
  return (
    <ul className={style.navList}>
      <li>
        <Link to="/studio-jezykowe-vista/" className="textMedium">
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
  );
}

export default NavList;
