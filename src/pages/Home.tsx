import Hero from '../components/Hero/Hero';
import Science from '../components/Science/Science';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyUs from '../components/WhyUs/WhyUs';
import Languages from '../components/Languages/Languages';
import Faq from '../components/FAQ/Faq';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <Science />
      <AboutUs />
      <WhyUs />
      <Languages />
      <Faq />
      <Contact />
    </main>
  );
}

export default Home;
