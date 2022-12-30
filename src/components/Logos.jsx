import Image from 'next/image';
import Link from 'next/link';

import ah from '/public/logos/ah.png';
import alz from '/public/logos/alz.png';
import ep from '/public/logos/ep2.png';
import ms from '/public/logos/ms.jpeg';
import pk from '/public/logos/pk.png';

export default function Logo() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-full cursor-pointer'>
              <Link href='https://alz.org' passHref>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={alz}
                  alt='Tuple'
                />
              </Link>
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-full cursor-pointer'>
              <Link href='https://americanheadachesociety.org' passHref>
                <Image layout='fill' src={ah} objectFit='contain' alt='Tuple' />
              </Link>
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-full cursor-pointer'>
              <Link href='https://epilepsy.com' passHref>
                <Image layout='fill' src={ep} objectFit='cover' alt='Tuple' />
              </Link>
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <div className='relative h-12 w-full cursor-pointer'>
              <Link href='https://nationalmssociety.org' passHref>
                <Image layout='fill' src={ms} objectFit='cover' alt='Tuple' />
              </Link>
            </div>
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <div className='relative h-12 w-full cursor-pointer'>
              <Link href='https://parkinson.org' passHref>
                <Image layout='fill' src={pk} objectFit='contain' alt='Tuple' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
