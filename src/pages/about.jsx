import { Cloudinary } from '@cloudinary/url-gen';

import Banner from '@/components/layout/Banner';
import Seo from '@/components/Seo';
import Swipe from '@/components/swiper/Swiper';

export const AboutUs = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/handhold_qo4inn');
  return (
    <div className=''>
      <Seo />
      <Banner pageName='About Us' imageURL={myImage} />
      <div className='container pb-20'>
        <div className='grid grid-cols-1  lg:grid-cols-2 '>
          <div className='flex flex-col justify-center md:flex-col lg:max-w-6xl '>
            <h2 className=' mb-6 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-5xl '>
              Welcome to
              <br />
              <p className='block text-[#d0ad6c]'>
                Neurology and Neuro Rehabilitation{' '}
              </p>
            </h2>
            <p className='mb-10 text-base text-gray-700 md:mr-20 md:text-lg'>
              As a neurologic and neuro rehabilitation specialty clinic, the
              services we offer are in a unique partnership of health care:
              providing and interpreting your tests, serving as a consultant to
              your referring physician and providing medical care for your
              specific neurologic, neuro rehabilitative, and psychiatry needs.
              Neurology and Neuro Rehabilitation has been carefully
              structured to provide a personal approach to patient care. Our
              goal is to provide you with very good service and pay close
              attention to your individual needs and concerns.
            </p>
          </div>
          <div className='grid-flow-col grid-cols-1  '>
            <Swipe />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
