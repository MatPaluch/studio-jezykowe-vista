import { Link } from 'react-router';
import style from './Header.module.css';

function StudentNav() {
  return (
    <ul className={style.navList}>
      <li>
        <Link
          to="/studio-jezykowe-vista/"
          className="textMedium"
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#272742"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Strona główna
        </Link>
      </li>
    </ul>
  );
}

export default StudentNav;
