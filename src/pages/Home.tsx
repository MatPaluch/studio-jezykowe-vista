import Hero from '../components/Hero/Hero';
import Learning from '../components/Learning/Learning';
import AboutUs from '../components/AboutUs/AboutUs';
import Languages from '../components/Languages/Languages';
import Faq from '../components/FAQ/Faq';
import Contact from '../components/Contact/Contact';
import Form from '../components/Form/Form';
import ClickToAction from '../components/ClickToAction/ClickToAction';

function Home() {
  return (
    <main>
      <Hero />
      <Learning />
      <AboutUs />
      <Languages />
      <Faq />
      <Contact />
      <Form />
      <ClickToAction />
    </main>
  );
}

export default Home;
