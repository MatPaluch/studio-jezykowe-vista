import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.loginButton}>Zaloguj</button>
    </div>
  );
}

export default Login;
