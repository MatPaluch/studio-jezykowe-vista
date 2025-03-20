import { FunctionComponent, useState, useEffect } from "react";
import star from "../../assets/star.svg";
import style from "./Scoreboard.module.css";

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
  const [valueScoreboard, setValueScoreboard] = useState<number[]>([0, 0, 0, 0]);
  const [intervalTimes, setIntervalTimes] = useState<number[]>([10, 10, 10, 10]); // Interwały dla każdej wartości osobno

  // Funkcja obliczająca interwał dla każdej z wartości (np. exp, rate, clients, topics)
  const calculateInterval = (current: number, target: number, weight: number = 1): number => {
    const progress = current / target;
    // Używamy funkcji kwadratowej do wygładzenia tempa: szybki początek, spowolnienie na końcu
    const timeMultiplier = Math.pow(progress, 2);
    // Możliwość dostosowania szybkości za pomocą "wagi"
    const baseInterval = 50 + timeMultiplier * 450; // Określamy tu maksymalny czas
    return Math.max(10, baseInterval / weight); // Używamy wagi, aby dostosować tempo
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValueScoreboard((prev) => {
        const imut = [...prev];

        // Zwiększanie wartości dla każdej z czterech pozycji, osobno
        if (imut[0] < exp) imut[0] = imut[0] + 1;
        if (imut[1] < rate) imut[1] = imut[1] + 1;
        if (imut[2] < clients) imut[2] = imut[2] + 1;
        if (imut[3] < topics) imut[3] = imut[3] + 1;

        return imut;
      });
    }, Math.min(...intervalTimes)); // Używamy najmniejszego interwału, aby każda wartość mogła rosnąć osobno

    return () => clearInterval(interval);
  }, [valueScoreboard, intervalTimes, exp, rate, clients, topics]);

  useEffect(() => {
    // Obliczanie interwałów dla każdej wartości osobno
    const newIntervalTimes = [
      calculateInterval(valueScoreboard[0], exp, 1.0),    // Waga 1.0 dla exp
      calculateInterval(valueScoreboard[1], rate, 0.8),   // Waga 0.8 dla rate (bardziej wolno)
      calculateInterval(valueScoreboard[2], clients, 1.2), // Waga 1.2 dla clients (szybciej)
      calculateInterval(valueScoreboard[3], topics, 1.5), // Waga 1.5 dla topics (najwolniej)
    ];
    setIntervalTimes(newIntervalTimes);
  }, [valueScoreboard, exp, rate, clients, topics]);

  return (
    <div className={style.board}>
      <div className={style.border}>
        <div className={style.insideBoard}>
          <div className={style.element}>
            <span className={style.headerSpan}>{valueScoreboard[0]}+</span>
            <span className={style.textRegular}>Lat doświadczenia</span>
          </div>
          <div className={style.element}>
            <div className={style.star}>
              <span className={style.headerSpan}>{valueScoreboard[1]}</span>
              <img src={star} alt="star" width="24" height="24" />
            </div>
            <span>Ocena google</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{valueScoreboard[2]}+</span>
            <span>Zadowolonych klientów</span>
          </div>
          <div className={style.element}>
            <span className={style.headerSpan}>{valueScoreboard[3]}+</span>
            <span>Tematów do uczenia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
