import { Cloudinary } from '@cloudinary/url-gen';
import Link from 'next/link';
import React from 'react';

import Banner from '@/components/layout/Banner';
import Divider from '@/components/layout/Dividers';
import Logo from '@/components/Logos';
import Seo from '@/components/Seo';

const patients = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/forptbanner_hik3k6');
  return (
    <>
      <Seo />
      <Banner pageName='For Patients' imageURL={myImage} />
      <Divider sectionName='Patient Resources' />
      <div className='container mb-20'>
        <h2 className='mb-6 text-center font-sans text-3xl font-bold leading-none tracking-tight text-wcyan  md:mx-auto'>
          New Patient Form
        </h2>
        <div className='flex flex-shrink-0 flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-10 sm:space-y-0'>
          {' '}
          <div className='h-full items-center rounded-r border border-l-4 border-l-[#457A9A] p-5 text-center shadow-sm'>
            {' '}
            <h1 className='mb-2 font-semibold leading-5 '>Offline Form</h1>
            <Link href='/pdf/NewPatient.pdf' target='_blank' passHref>
              <button className=' hover:wcyan/60 inline-flex items-center justify-center rounded-lg bg-wcyan px-5 py-3 text-center text-white '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
                  />
                </svg>
                <span className='ml-4 flex flex-col items-center leading-none'>
                  <span className='mb-1 text-xs'>DOWNLOAD AND</span>
                  <span className='title-font font-semibold '>
                    Print Offline Form
                  </span>
                </span>
              </button>
            </Link>
          </div>
          {/* <div className='h-full items-center rounded-r border border-l-4 border-l-[#457A9A] p-5 text-center shadow-sm'>
            <h1 className='mb-2 font-semibold leading-5 '>Online Form</h1>
            <Link
              href='https://app.formdr.com/practice/MjE3MzQ=/form/hOvfi-yfyE4rrOciJYi907SF32_Nxeam'
              passHref
            >
              <a target='_blank'>
                <button className='hover:wcyan/60 inline-flex items-center justify-center rounded-lg bg-wcyan px-5 py-3 text-center text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                    />
                  </svg>
                  <span className='ml-4 flex flex-col items-center justify-center text-center leading-none'>
                    <span className='mb-1 text-xs'>FILL OUT AND</span>
                    <span className='title-font font-semibold'>
                      Submit Online Form
                    </span>
                  </span>
                </button>
              </a>
            </Link>
          </div> */}
        </div>
        <h2 className='mb-6 mt-6  text-center font-sans text-3xl font-bold leading-none tracking-tight text-wcyan  md:mx-auto'>
          Portal Access
        </h2>
        <div className='flex flex-shrink-0 flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-10 sm:space-y-0'>
          <div className='h-full items-center justify-center rounded-r border border-l-4 border-l-[#457A9A] p-5 text-center shadow-sm'>
            <h1 className='mb-2 font-semibold leading-5 '>Patient Portal</h1>
            <Link
              href='https://mycw34.eclinicalweb.com/portal3661/jsp/100mp/login_otp.jsp'
              passHref
            >
              <a target='_blank'>
                <button className='hover:wcyan/60 inline-flex items-center justify-center rounded-lg bg-wcyan px-5 py-3 text-center text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='ml-4 flex flex-col items-center justify-center text-center leading-none'>
                    <span className='mb-1 text-xs'>CLICK FOR THE</span>
                    <span className='title-font font-semibold'>
                      Patient Portal
                    </span>
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <h2 className='mt-6 mb-6 text-center font-sans text-3xl font-bold leading-none tracking-tight text-wcyan  md:mx-auto'>
          Patient Education
        </h2>
        <p className='mb-6  text-center font-sans text-lg font-bold leading-none tracking-tight text-gray-900 md:mx-auto'>
          Please click any of the images below to visit their website.
        </p>
        <Logo />
      </div>
    </>
  );
};

export default patients;
