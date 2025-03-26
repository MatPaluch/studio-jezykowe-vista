import style from './CreateFlashCard.module.css';
import Poland_flag from '../../assets/mini-flag-poland.svg';
import Uk_flag from '../../assets/mini-flag-uk.svg';

function CreateFlashCard() {
  return (
    <section className="container">
      <h3 className="header3">Stwórz fiszkę</h3>
      <div className={style.border}>
        <div className={style.contentInsideBorder}>
          <div className={style.contentLeft}>
            <img
              src={Poland_flag}
              alt="Poland_flag"
              width={48}
              className={style.poland}
            />
            <input type="text" placeholder="Wpisz pojęcie" />
          </div>
          <div className={style.contentMiddle}>
            <div className={style.content_separator}></div>
            <button>Dodaj</button>
          </div>
          <div className={style.contentRight}>
            <img src={Uk_flag} alt="Uk_flag" width={48} />
            <input type="text" placeholder="Wpisz definicję" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateFlashCard;
