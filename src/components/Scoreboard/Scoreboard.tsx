import { FunctionComponent } from 'react';
import star from '../../assets/star.svg';
import style from './Scoreboard.module.css';

interface ScoreboardProps {
  exp?: string;
  rate?: string;
  clients?: string;
  topics?: string;
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({ exp, rate, clients, topics }) => {
  return (
    <div className={`container ${style.board}`}>
      <div className={style.border}>
        <div className={style.insideBoard}>
          <div className={style.element}>
            <span className={style.headerSpan}>{exp}+</span>
            <span className={style.textRegular}>Lat doświadczenia</span>
          </div>
          <div className={style.element}>
            <div className={style.star}>
              <span className={style.headerSpan}>{rate}</span>
              <img src={star} alt='star' width='24' height='24' />
            </div>
            <span>Ocena google</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{clients}+</span>
            <span>Zadowolonych klientów</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{topics}+</span>
            <span>Tematów do uczenia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
