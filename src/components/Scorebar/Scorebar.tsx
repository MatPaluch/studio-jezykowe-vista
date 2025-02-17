import { FunctionComponent } from 'react';
import star from '../../assets/star.svg';

interface ScoreboardProps {
  exp?: string;
  rate?: string;
  clients?: string;
  topics?: string;
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({ exp, rate, clients, topics }) => {
  return (
    <div>
      <div>
        <div className='elements'>
          <span>{exp} +</span>
          <span>Lat doświadczenia</span>
        </div>
        <div className='elements'>
          <div>
            <span>{rate}</span>
            <img src={star} alt='star' />
          </div>
          <span>Ocena google</span>
        </div>
        <div className='elements'>
          <span>{clients}</span>
          <span>Zadowolonych klientów</span>
        </div>
        <div className='elements'>
          <span>{topics}</span>
          <span>Tematów do uczenia</span>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
