import Link from 'next/link';
import * as React from 'react';

import Seo from '@/components/Seo';

export default function cs() {
  return (
    <>
      <Seo />

      <section className='container'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 text-3xl'>
            Thank you, your form has been submitted successfully! We look
            forward to seeing you.
          </h1>
          <div className='mt-4 text-blue-600 underline underline-offset-2 md:text-lg'>
            <Link href='/'>Back to home.</Link>
          </div>
        </div>
      </section>
    </>
  );
}
