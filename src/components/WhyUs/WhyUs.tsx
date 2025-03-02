import style from './WhyUs.module.css';

function WhyUs() {
  return (
    <section className={style.bg}>
      <div className={`container ${style.content}`}>
        <img src='' alt='image_why_us' width={600} height={600} />
        <div className={style.textBox}>
          <h3 className='header3'>Dlaczego warto wybrać naszą szkołę językową?</h3>
          <p className='textRegular'>
            Nasze kursy są dostosowane do potrzeb uczniów szkół podstawowych i średnich, co pozwala
            na efektywną naukę. Dla maturzystów oferujemy intensywne przygotowanie do egzaminów, a
            klienci biznesowi mogą liczyć na indywidualne programy nauczania, które wspierają ich
            rozwój zawodowy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
