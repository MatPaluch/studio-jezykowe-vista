import style from './Form.module.css';
import send from '../../assets/send.svg';
import Button from '../Button/Button';
import logo from '../../assets/logo500x500.png';

function Form() {
  return (
    <section className={`container ${style.formSection}`}>
      <img src={logo} alt='contactIMG' width={600} height={620} />
      <div className={style.formContainer}>
        <h2 className='header2' style={{ marginBottom: 42 }}>
          Wypełnij formularz
        </h2>
        <form action='' method='post' onSubmit={(e) => e.preventDefault()} className={style.form}>
          <div>
            <label htmlFor='name'>Imię</label>
            <input type='text' name='imie' id='name' />
          </div>

          <label htmlFor='surname'>Nazwisko</label>
          <input type='text' name='nazwisko' id='surname' />

          <label htmlFor='phone'>Telefon</label>
          <input type='tel' name='telefon' id='phone' />

          <label htmlFor='message'>Wiadomość</label>
          <textarea name='wiadomosc' id='message' cols={30} rows={10}></textarea>

          <Button type='submit' className={style.buttonSend}>
            Wyślij wiadomość <img src={send} alt='sendIcon' width={24} height={24} />
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Form;
