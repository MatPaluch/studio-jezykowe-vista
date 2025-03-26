import checkIt from '../../assets/checkIt.svg';
import style from './CheckButton.module.css';

function CheckButton() {
  return (
    <button className={style.checkButton}>
      Got it <img src={checkIt} alt="checkIt" width={20} height={20} />
    </button>
  );
}

export default CheckButton;
