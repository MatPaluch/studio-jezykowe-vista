import style from './CreateFlashCard.module.css';
import Poland_flag from '../../assets/mini-flag-poland.svg';
import Uk_flag from '../../assets/mini-flag-uk.svg';

function CreateFlashCard() {
  return (
    <section className="container">
      <h3 className="header3" style={{ textAlign: 'center', marginBottom: 48 }}>
        Stwórz fiszkę
      </h3>
      <div className={style.border}>
        <div className={style.contentInsideBorder}>
          <div className={style.contentSides}>
            <img
              src={Poland_flag}
              alt="Poland_flag"
              width={72}
              height={53}
              className={style.poland}
            />
            <div className={style.inputContainer}>
              <input
                type="text"
                className={style.inputs}
                placeholder="Wpisz pojęcie"
              />
            </div>
          </div>
          <div className={style.contentMiddle}>
            <div className={style.content_separator}></div>
            <button className={style.addButton}>Dodaj</button>
          </div>
          <div className={style.contentSides}>
            <img src={Uk_flag} alt="Uk_flag" width={72} height={53} />
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="Wpisz definicję"
                className={style.inputs}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateFlashCard;
