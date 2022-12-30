import Service from '@/components/home/Service';
import Seo from '@/components/Seo';

import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Map from '../components/maps/Maps';
const Home = () => {
  return (
    <div>
      <Seo />
      <Hero />
      <Service />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
