/* eslint-disable @next/next/no-html-link-for-pages */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
// import Image from 'next/image';
import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';

export default function Hero() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('hero_x02owo');
  return (
    <div className='mt-[6rem]'>
      <div className='relative h-[90vh]'>
        <div className=''>
          <AdvancedImage
            cldImg={myImage}
            alt=''
            className='absolute h-full w-full'
          />
          {/* <Image
            src={tester.src}
            className='tiny-hero'
            alt=''
            layout='fill'
            priority={true}
            objectFit='cover'
            quality={75}
          /> */}
          <div className='relative flex h-[90vh] items-center  justify-center  bg-black bg-opacity-70 px-4 pt-24  sm:px-6'>
            <div className=' relative max-w-7xl rounded-3xl '>
              <h1 className='text-center text-5xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl '>
                <span className='block font-nexa  text-[#e2cfac] sm:pt-10 '>
                  Neurology and Neuro Rehab
                </span>
              </h1>
              <div className='mx-auto  mt-12 flex max-w-lg flex-col items-center justify-center text-center text-3xl font-medium text-white sm:max-w-3xl sm:flex-row'>
                Physical Therapy
                {/* <GoPrimitiveDot className='mx-2 text-[#e2cfac]' />
                Neuropsychiatry */}
              </div>
              <p className='font-widest mx-auto mt-12 max-w-lg text-center text-xl font-medium text-white sm:max-w-3xl'>
                Our newest services for the local community.
              </p>

              <div className='mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center'>
                <div className='space-y-4 px-10 pb-10 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0'>
                  <Link href='/appointment'>
                    <a className='flex items-center justify-center rounded-xl border border-[##7694a7] bg-white px-4 py-3 text-center text-base font-bold text-[##7694a7] shadow-sm hover:bg-[#7694a7] hover:text-white sm:px-8'>
                      REQUEST APPOINTMENT{' '}
                    </a>
                  </Link>
                  <Link href='/assessment'>
                    <a className='flex items-center justify-center rounded-xl border border-white  bg-[#7694a7] px-4 py-3 text-center text-base font-bold text-white  shadow-sm hover:bg-opacity-60 hover:text-white sm:px-8'>
                      FREE PHYSICAL THERAPY EVALUATION
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
