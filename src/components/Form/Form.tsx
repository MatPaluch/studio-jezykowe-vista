function Form() {
  return (
    <section>
      <img src='' alt='contactIMG' />
      <h2></h2>
      <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='name'>Imię</label>
        <input type='text' name='imie' id='name' />

        <label htmlFor='surname'>Nazwisko</label>
        <input type='text' name='nazwisko' id='surname' />

        <label htmlFor='phone'>Telefon</label>
        <input type='tel' name='telefon' id='phone' />

        <label htmlFor='message'>Wiadomość</label>
        <input type='text' name='wiadomosc' id='message' />

        <button type='submit'>Wyślij wiadomość</button>
      </form>
    </section>
  );
}

export default Form;
