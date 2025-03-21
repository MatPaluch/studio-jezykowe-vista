import { FunctionComponent, useState, useEffect } from 'react';
import star from '../../assets/star.svg';
import style from './Scoreboard.module.css';

interface ScoreboardProps {
  exp?: number;
  rate?: number;
  clients?: number;
  topics?: number;
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({
  exp = 0,
  rate = 0,
  clients = 0,
  topics = 0,
}) => {
  const [counts, setCounts] = useState({ exp: 0, rate: 0, clients: 0, topics: 0 });
  const [intervalTimes, setIntervalTimes] = useState([100, 400, 10, 8]);

  useEffect(() => {
    const intervals = [
      setInterval(
        () => setCounts((prev) => ({ ...prev, exp: Math.min(prev.exp + 1, exp) })),
        intervalTimes[0]
      ),
      setInterval(
        () => setCounts((prev) => ({ ...prev, rate: Math.min(prev.rate + 1, rate) })),
        intervalTimes[1]
      ),
      setInterval(
        () => setCounts((prev) => ({ ...prev, clients: Math.min(prev.clients + 1, clients) })),
        intervalTimes[2]
      ),
      setInterval(
        () => setCounts((prev) => ({ ...prev, topics: Math.min(prev.topics + 1, topics) })),
        intervalTimes[3]
      ),
    ];

    return () => intervals.forEach(clearInterval);
  }, [exp, rate, clients, topics, intervalTimes]);

  useEffect(() => {
    if (counts.clients > clients - 20)
      setIntervalTimes((prev) => [...prev.slice(0, 2), 100, prev[3]]);
  }, [counts.clients, clients]);

  useEffect(() => {
    if (counts.topics > topics - 20) setIntervalTimes((prev) => [...prev.slice(0, 3), 100]);
  }, [counts.topics, topics]);

  return (
    <div className={style.board}>
      <div className={style.border}>
        <div className={style.insideBoard}>
          <div className={style.element}>
            <span className={style.headerSpan}>{counts.exp}+</span>
            <span className={style.textRegular}>Lat doświadczenia</span>
          </div>
          <div className={style.element}>
            <div className={style.star}>
              <span className={style.headerSpan}>{counts.rate}</span>
              <img src={star} alt='star' width='24' height='24' />
            </div>
            <span>Ocena google</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{counts.clients}+</span>
            <span>Zadowolonych klientów</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{counts.topics}+</span>
            <span>Tematów do uczenia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
