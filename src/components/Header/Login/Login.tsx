import Button from '../../Button/Button';
import styles from './Login.module.css';
import send from '../../../assets/send.svg';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.buttonWrapper}>
        <button className={styles.loginButton}>Zaloguj</button>
      </div>
      <Button>
        <img src={send} alt="sendIcon" width={24} height={24} />
        Zajęcia próbne
      </Button>
    </div>
  );
}

export default Login;
