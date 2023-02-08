/* eslint-disable @next/next/no-img-element */
import { Cloudinary } from '@cloudinary/url-gen';
import icon1 from 'public/backpain.png';
import icon4 from 'public/np.png';
import icon5 from 'public/op.png';
import icon2 from 'public/pt.png';
import icon7 from 'public/spine.png';
import icon6 from 'public/symptom.png';
import React from 'react';

import Banner from '@/components/layout/Banner';
import Seo from '@/components/Seo';

const features = [
  {
    name: 'Migraine',
    description:
      'Migraine relief through the practice of massages, vestibular therapy, postural correction, and many other treatements.',
    icon: `${icon4.src}`,
  },
  {
    name: 'Neck and Back Pain - Radiculopathy',
    description:
      'Radiculopathy is a condition that occurs when a nerve in the spine is compressed or irritated. Treatment includes physical therapy, massage, and other modalities.',
    icon: `${icon1.src}`,
  },
  {
    name: 'Parkinson’s Disease',
    description:
      'Parkinson’s disease is a progressive disorder of the nervous system that affects movement. Our team of experts will work with you to develop a treatment plan that will help you manage your symptoms and improve your quality of life.',
    icon: `${icon5.src}`,
  },
  {
    name: 'Balance Issues',
    description:
      'Balance issues can be caused by a variety of factors, including vestibular disorders, neurological disorders, and other conditions.',
    icon: `${icon2.src}`,
  },
  {
    name: 'Vertigo - Vestibular Therapy',
    description:
      'Vertigo is a sensation of spinning or whirling that can be caused by a variety of factors, including inner ear disorders, neurological disorders, and other conditions.',
    icon: `${icon6.src}`,
  },
  {
    name: 'Spine Therapy',
    description:
      'Spine therapy is a specialized service that focuses on rehabilitating injuries, diseases, and disorders that affect the spine. These disorders are often debilitating and affect the individual’s quality of life in a major way. ',
    icon: `${icon7.src}`,
  },
];

const services = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/servebanner_bmunho');
  return (
    <>
      <Seo />
      <Banner pageName='Services' imageURL={myImage} />
      <div>
        <div className='container'>
          <div className='mb-20 rounded-3xl border-2 border-wcyan'>
            <div className='mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24'>
              <p className='mt-4 max-w-6xl text-center text-lg text-slate-600'>
                Neurological rehabilitation is a specialized service that
                focuses on rehabilitating injuries, diseases, and disorders that
                affect the nervous system. These disorders are often
                debilitating and affect the individual’s quality of life in a
                major way. Our experienced team works together to evaluate your
                condition. Our advanced diagnostic services utilize
                state-of-the-art medical technology, providing referring
                physicians and patients with the opportunity to receive fast,
                accurate results so that appropriate treatments can begin as
                quickly as possible.
              </p>
              <div className=' mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className='h-30 w-30 flex items-center justify-center rounded-md '>
                        <img
                          className='h-30 w-30 text-slate-600'
                          aria-hidden='true'
                          src={feature.icon}
                          alt='service'
                        />
                      </span>
                    </div>
                    <div className='mt-6'>
                      <h3 className='text-center text-lg font-medium text-wcyan underline underline-offset-4'>
                        {feature.name}
                      </h3>
                      <p className='mt-2 text-base text-slate-600'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
