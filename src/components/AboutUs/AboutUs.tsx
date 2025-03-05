import { useState } from 'react';
import WhyUs from '../WhyUs/WhyUs';
import style from './AboutUs.module.css';

function AboutUs() {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <section className='container' id='about'>
        <div className={style.content}>
          <div className={style.heading}>
            <h3 className='tagline'>O nas</h3>
            <h2 className='header2'>Nasza historia i wartości edukacyjne</h2>
          </div>
          <div className={style.desc}>
            <p className='textRegular'>
              Vista - Studio Językowe powstało z pasji do nauczania języków obcych. Naszą misją jest
              inspirowanie uczniów do odkrywania świata poprzez język.
            </p>
            <button className={style.transButton} onClick={handleShow}>
              <div className={style.buttonContent}>
                <span>Dowiedz się więcej</span>
                <svg
                  className={`${style.chevron} ${show && style.show}`}
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M18 9L13 14L8 9' stroke='url(#paint_linear)' strokeWidth='2' />
                  <defs>
                    <linearGradient
                      id='paint_linear'
                      x1='13'
                      y1='9'
                      x2='13'
                      y2='14'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#D93FD3' />
                      <stop offset='1' stopColor='#7247E9' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      <WhyUs show={show} />
    </>
  );
}

export default AboutUs;
