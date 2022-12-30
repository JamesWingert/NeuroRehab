import Link from 'next/link';
import * as React from 'react';

export default function notfoundpage() {
  return (
    <>

      <section className='container'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>{' '}
          <div className='mt-4 text-blue-600 underline underline-offset-2 md:text-lg'>
            <Link
              className='mt-4 text-blue-600 underline underline-offset-2 md:text-lg'
              href='/'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
