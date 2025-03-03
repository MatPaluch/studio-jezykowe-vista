import { useState } from 'react';
import downChevron from '../../assets/downChevron.svg';
import faqData from './faqData.json';
import style from './Faq.module.css';
import Button from '../Button/Button';

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='container'>
      <div className={style.content}>
        <div className={style.title}>
          <h2 className='header2'>FAQ</h2>
          <p className='textRegular'>
            Oto odpowiedzi na najczęściej zadawane pytania dotyczące naszych kursów i zajęć.
          </p>
        </div>
        <ul className={style.list}>
          {faqData.map((item, index) => (
            <li key={index} className={style.listElement}>
              <div className={style.question} onClick={() => toggleAnswer(index)}>
                <h5 className='semiBold'>{item.question}</h5>
                <img
                  className={`${style.downChevron} ${openIndex === index ? style.rotate : ''}`}
                  src={downChevron}
                  alt='downChevron'
                  width={32}
                  height={32}
                />
              </div>
              <div className={`${style.answer} ${openIndex === index ? style.open : ''}`}>
                <p className='textRegular'>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.contactContent}>
          <h4 className='header3_5'>Masz jeszcze pytania?</h4>
          <p className='textRegular'>Skontaktuj się z nami, aby uzyskać więcej informacji.</p>
          <Button style={{ width: 160 }}>Kontakt</Button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
