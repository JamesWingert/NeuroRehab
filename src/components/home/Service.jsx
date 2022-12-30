import { CheckIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Divider from '../layout/Dividers';

import neuro from '/public/neuroserve1223.jpeg';
import physical from '/public/physical.jpg';
import insomnia from '/public/sleepserv1223.jpeg';

//TODO make component, DRY

const Service = () => {
  return (
    <div className='bg-white'>
      <section className='mx-auto max-w-6xl px-8  py-8'>
        {' '}
        <div className='mb-5 text-center'>
          <Divider sectionName='Our Services' />
        </div>
        <div className='mb-24 grid grid-cols-1 items-center gap-y-10 gap-x-10 rounded-2xl border border-wcyan/20 bg-slate-50 p-2 shadow-xl md:grid-cols-2 md:gap-y-32 md:gap-x-24 md:p-5'>
          <div className=''>
            <h2 className='mb-4 text-center font-equinox text-3xl font-semibold tracking-tight text-wcyan sm:text-left md:text-4xl md:leading-tight'>
              Neurology
            </h2>
            <ul className='mb-5 text-center text-base text-gray-600 sm:text-left md:text-lg'>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan' />
                Headache, migraine
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan' /> Pain in neck, back,
                and extremities
              </li>{' '}
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Memory problems,
                Alzheimer’s
              </li>{' '}
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Stroke, transient
                ischemic attack
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Dizziness, balance problems
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Multiple
                sclerosis, tremors
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Seizures
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Epilepsy, passing
                out, blackouts
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Parkinson’s
                disease
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Restless leg
                syndrome
              </li>
            </ul>
            <Link href='/services' passHref>
              <button className='rounded-full border border-wcyan bg-wcyan py-2 px-4 font-bold text-white hover:border hover:border-wcyan hover:bg-wcyan/70 '>
                Learn More
              </button>
            </Link>
          </div>
          <div className=' flex h-full w-full flex-col items-center'>
            <div className='md:h-140 relative h-96  w-full '>
              <Image
                src={neuro}
                className='rounded-2xl'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className='mb-24 grid grid-cols-1 flex-col-reverse items-center gap-y-10 gap-x-10 rounded-2xl border border-wcyan/20 bg-slate-50 p-2 shadow-xl md:grid-cols-2 md:gap-y-32 md:gap-x-24 md:p-5'>
          <div className='order-none md:order-2  '>
            <h2 className='mb-4 text-center font-equinox text-3xl font-semibold tracking-tight text-wcyan sm:text-left md:text-4xl md:leading-tight'>
              Sleep Medicine
            </h2>
            <ul className='mb-5 text-center text-base text-gray-600 sm:text-left md:text-lg '>
              <li className='flex items-center text-center '>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Obstructive sleep apnea; snoring
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Excessive daytime
                sleepiness
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Narcolepsy
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Frequent awakening, insomnia
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Sleep walking,
                sleep talking
              </li>
            </ul>
            <Link href='/services' passHref>
              <button className='rounded-full border border-wcyan bg-wcyan py-2 px-4 font-bold text-white hover:border hover:border-wcyan hover:bg-wcyan/70 '>
                Learn More
              </button>
            </Link>
          </div>
          <div className=' flex h-full w-full flex-col items-center'>
            <div className='md:h-140 relative h-96  w-full '>
              <Image
                src={insomnia}
                className='rounded-2xl'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
        <div className='mb-24 grid grid-cols-1 items-center gap-y-10 gap-x-10 rounded-2xl border border-wcyan/20 bg-slate-50 p-2 shadow-xl md:grid-cols-2 md:gap-y-32 md:gap-x-24 md:p-5 '>
          <div>
            <h2 className='mb-4 text-center font-equinox text-3xl font-semibold tracking-tight text-wcyan sm:text-left md:text-4xl md:leading-tight'>
              Neuro rehabilitation
            </h2>
            <ul className='mb-5 text-center text-base text-gray-600 sm:text-left md:text-lg'>
              {' '}
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Balance problems
              </li>{' '}
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Pain in neck,
                back, and extremities
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Parkinson’s disease
              </li>
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' /> Dizziness, vertigo
              </li>{' '}
              <li className='flex items-center text-center'>
                <CheckIcon className='h-5 w-5 text-wcyan ' />
                Post stroke rehab
              </li>
            </ul>
            <Link href='/services' passHref>
              <button className='rounded-full border border-wcyan bg-wcyan py-2 px-4 font-bold text-white hover:border hover:border-wcyan hover:bg-wcyan/70 '>
                Learn More
              </button>
            </Link>
          </div>
          <div className=' flex h-full w-full flex-col items-center'>
            <div className='md:h-140 relative h-96  w-full '>
              <Image
                src={physical}
                className='rounded-2xl'
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </div>
            {/* md:h-52 md:w-48 h-96  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
