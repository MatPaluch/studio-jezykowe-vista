import style from './Form.module.css';
import send from '../../assets/send.svg';
import Button from '../Button/Button';
import logo from '../../assets/logo500x500.png';

function Form() {
  return (
    <section className={`container ${style.formSection}`}>
      <img alt='contactIMG' width={600} height={620} />
      <div className={style.formContainer}>
        <h2 className='header2' style={{ marginBottom: 42 }}>
          Wypełnij formularz
        </h2>
        <form action='' method='post' onSubmit={(e) => e.preventDefault()} className={style.form}>
          <div className={style.nameContainer}>
            <div
              className={style.formMaterial}
              style={{
                flex: 2,
              }}
            >
              <input type='text' name='imie' id='name' placeholder='' />
              <label htmlFor='name'>Imię</label>
            </div>
            <div
              className={style.formMaterial}
              style={{
                flex: 3,
              }}
            >
              <input type='text' name='nazwisko' id='surname' placeholder='' />
              <label htmlFor='surname'>Nazwisko</label>
            </div>
          </div>
          <div className={style.formMaterial}>
            <input type='tel' name='telefon' id='phone' placeholder='' />
            <label htmlFor='phone'>Telefon</label>
          </div>
          <div className={style.textAreaDiv}>
            <textarea
              name='wiadomosc'
              id='message'
              placeholder=''
              rows={4}
              className={style.textArea}
            ></textarea>
            <label htmlFor='message'>Wiadomość</label>
          </div>
          <Button type='submit' className={style.buttonSend}>
            Wyślij wiadomość <img src={send} alt='sendIcon' width={24} height={24} />
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Form;
