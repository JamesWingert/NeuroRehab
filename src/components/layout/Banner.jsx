/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { AdvancedImage } from '@cloudinary/react';
import Link from 'next/link';
import React from 'react';

export default function Banner({ pageName, imageURL }) {
  return (
    <div className=' mt-[6.5rem]'>
      <div className='relative'>
        <div
          className='relative inset-0  z-10 bg-white'
          style={{
            height: '41vh',
          }}
        >
          <AdvancedImage
            cldImg={imageURL}
            alt=''
            className='absolute h-full w-full object-cover'
          />

          <div className='relative h-[41vh] items-center  justify-center bg-black bg-opacity-50 px-4 pt-1 sm:px-6'>
            <h1 className='mt-16 text-center text-6xl font-extrabold tracking-tight text-white sm:mt-20 sm:text-7xl '>
              {pageName}
            </h1>

            <div className='pt-12 sm:pt-20' />

            <div className='mx-auto flex max-w-sm  justify-center sm:max-w-none '>
              <div className=' justify-center space-y-4 px-10 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-7 sm:space-y-0'>
                <Link href='/appointment' passHref>
                  <button className='  duration-450  flex items-center justify-center rounded-xl border  border-white bg-wcyan px-4 py-3 text-center text-base font-bold text-white shadow-sm   transition  hover:bg-[#07363D]'>
                    REQUEST APPOINTMENT
                  </button>
                </Link>
                <Link href='/patients' passHref>
                  <button className='duration-450  flex items-center  justify-center rounded-xl border border-wcyan bg-white px-9 py-3 text-base font-bold text-wcyan  shadow-sm transition hover:text-[#1b464d] '>
                    NEW PATIENT FORM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
