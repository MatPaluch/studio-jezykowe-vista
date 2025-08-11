import React from 'react';
import './LoginModal.css';
import cross from '../../assets/cross.svg';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <img src={cross} alt="Close" />
        </button>
        <h2 className="header2">Zaloguj się, aby kontynuować.</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); /* Tu logika */
          }}
        >
          <div>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div>
            <label>Hasło</label>
            <input type="password" required />
          </div>
          <button className="login-button" type="submit">
            Zaloguj
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
