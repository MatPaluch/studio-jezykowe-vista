import Button from '../../Button/Button';
import styles from './Login.module.css';
import send from '../../../assets/send.svg';
import { Link } from 'react-router';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.buttonWrapper}>
        <button className={styles.loginButton}>Zaloguj</button>
      </div>
      <Link to="/studio-jezykowe-vista/#contact">
        <Button>
          <img src={send} alt="sendIcon" width={24} height={24} />
          Zajęcia próbne
        </Button>
      </Link>
    </div>
  );
}

export default Login;
