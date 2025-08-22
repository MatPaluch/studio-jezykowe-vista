import Button from '../../Button/Button';
import styles from './Login.module.css';
import send from '../../../assets/send.svg';
import { Link } from 'react-router';
import { useState } from 'react';
import LoginModal from '../../LoginModal/LoginModal';

function Login() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.loginButton}
          onClick={() => setModalOpen(true)}
        >
          Zaloguj
        </button>
      </div>
      <Link to="#contact">
        <Button>
          <img src={send} alt="sendIcon" width={24} height={24} />
          Zajęcia próbne
        </Button>
      </Link>
      <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default Login;
