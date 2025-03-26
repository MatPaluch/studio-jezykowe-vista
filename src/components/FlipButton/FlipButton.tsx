import flipIt from '../../assets/flipIt.svg';
import style from './FlipButton.module.css';

function FlipButton() {
  return (
    <button className={style.flipButton}>
      Flip it <img src={flipIt} alt="flipIt" width={20} height={20} />
    </button>
  );
}

export default FlipButton;
