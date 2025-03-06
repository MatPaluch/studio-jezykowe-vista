import style from './Footer.module.css';
import logo from '../../assets/logo84x84.png';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <ul className={style.footerColumns}>
          <li>
            <img src={logo} alt='logo84x84' width={84} height={84} />
          </li>
          <li>
            <h4 className='semiBold'>Vista Studio Językowe</h4>
            <ul className={style.vsjCol}>
              <li>
                <a href='#about'>Dlaczego my</a>
              </li>
              <li>
                <a href='#language'>Języki</a>
              </li>
              <li>
                <a href='#about'>O nas</a>
              </li>
              <li>
                <a href='#faq'>FAQ</a>
              </li>
              <li>
                <a href='#contact'>Kontakt</a>
              </li>
            </ul>
          </li>
          <li>
            <h4 className='semiBold'>Nasze usługi</h4>
            <ul className={style.vsjCol}>
              <li>
                <a href='#about'>Zajęcia indywidualne</a>
              </li>
              <li>
                <a href='#language'>Opinie uczniów</a>
              </li>
              <li>
                <a href='#about'>Cennik kursów</a>
              </li>
            </ul>
          </li>
          <li>
            <h4 className='semiBold'>Sociale</h4>
            <ul className={style.vsjCol}>
              <li>
                <a href='#about'>Zajęcia indywidualne</a>
              </li>
              <li>
                <a href='#language'>Opinie uczniów</a>
              </li>
              <li>
                <a href='#about'>Cennik kursów</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
