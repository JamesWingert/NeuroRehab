/* eslint-disable unused-imports/no-unused-vars */
import { Cloudinary } from '@cloudinary/url-gen';
import emailjs from '@emailjs/browser';
import {
  LocationMarkerIcon,
  MailIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';

import Banner from '@/components/layout/Banner';
import Seo from '@/components/Seo';

export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState('Contact Form');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Submit');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors['phone'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');

      let templateParams = {
        fullname: fullname,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };
      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_CONTACT}`,
          templateParams,
          `${process.env.NEXT_PUBLIC_USER_ID}`
        )
        .then(
          (response) => {
            // console.log(response.text);
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Submit');
            // Reset form fields
            setFullname('');
            setEmail('');
            setPhone('');
            setMessage('');
          },
          (error) => {
            // console.log(error.text);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText('Submit');
            setFullname('');
            setEmail('');
            setPhone('');
            setMessage('');
            return;
          }
        );
    }
    // console.log(fullname, email, phone, message);
  };
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/contactBanner_wzhdfp');
  return (
    <div>
      <Seo />
      <Banner pageName='Evaluation Request' imageURL={myImage} />
      <div className='container max-w-6xl pt-4 pb-24 sm:pt-12'>
        <div className=' mt-14 lg:grid lg:grid-cols-5'>
          <div
            className=' rounded-2xl py-1 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-10 xl:px-8'
            style={{
              //   backgroundImage: `url(${bgmap.src})`,
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
              border: '1px solid #c6a25e',
            }}
          >
            <div className='mx-auto max-w-lg px-2'>
              <h1 className='text-center text-xl font-extrabold tracking-tight text-[#c6a25e]'>
                For a free assessment, please give us a call or submit this form
                and we will contact you as soon as possible. Thank you!
              </h1>
              <dl className='mt-6 text-base  text-wcyan  '>
                <div className='mt-4'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex cursor-pointer sm:justify-center sm:md:justify-start md:justify-start'>
                    <PhoneIcon
                      className='h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />
                    <Link href='tel:+14809676888' passHref>
                      <span className='ml-3 mb-2 text-lg font-bold'>
                        +1 (480) 967-6888
                      </span>
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className='sr-only'>Postal address</dt>
                  <dd className='flex sm:justify-center md:justify-start'>
                    <LocationMarkerIcon
                      className='h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />
                    <span className='ml-3 mb-3 font-bold'>
                      2919 S. Ellsworth Road
                      <br></br>Suite 135 <br></br>Mesa, AZ 85212
                    </span>
                  </dd>
                  <dt className='sr-only'>Postal address</dt>
                  <dd className='flex sm:justify-center md:justify-start'>
                    <LocationMarkerIcon
                      className='h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />
                    <span className='ml-3 mb-3 font-bold'>
                      2152 S. Vineyard Road
                      <br></br>Suite 131 <br></br>Mesa, AZ 85210
                    </span>
                  </dd>
                  <dt className='sr-only'>Postal address</dt>
                  <dd className='flex sm:justify-center md:justify-start'></dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex sm:justify-center md:justify-start'>
                    <NewspaperIcon
                      className='h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />
                    <span className='mb-3 ml-3 font-bold'>
                      +1 (480) 967-6887
                    </span>
                  </dd>
                </div>
                <div className='mt-3 '>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex sm:justify-center md:justify-start'>
                    <MailIcon
                      className='h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />
                    <span className='ml-3 mb-32 font-bold text-wcyan md:mb-20'>
                      HHedgpeth@neurologyandsleep.com
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className='rounded-2xl bg-[#6f8c9e] py-16 sm:px-6 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12'>
            {/* [#5692B7]/60 */}
            <div className='mx-auto max-w-lg py-10 lg:max-w-none'>
              <form
                onSubmit={handleSubmit}
                className='mx-4 grid grid-cols-1 gap-y-6 sm:mx-0 '
              >
                <div>
                  <input type='hidden' name='_subject' value='Contact Form' />
                  <label htmlFor='fullname' className='sr-only'>
                    Full name
                  </label>
                  <input
                    type='text'
                    name='fullname'
                    id='fullname'
                    autoComplete='name'
                    className='block w-full rounded-md border-gray-300 py-3  px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500'
                    placeholder='Full name'
                    value={fullname}
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                  {errors?.fullname && (
                    <p className='text-red-500'>Full name cannot be empty.</p>
                  )}
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors?.email && (
                    <p className='text-red-500'>Email cannot be empty.</p>
                  )}
                </div>
                <div>
                  <label htmlFor='phone' className='sr-only'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500'
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {errors?.phone && (
                    <p className='text-red-500'>Phone cannot be empty.</p>
                  )}
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-cyan-500 focus:ring-cyan-500'
                    placeholder='Summary of concern'
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  {errors?.message && (
                    <p className='text-red-500'>Message cannot be empty.</p>
                  )}
                </div>
                <div>
                  <div className='flex flex-col items-center justify-between text-white'>
                    NOTE: DO NOT USE THIS FORM FOR ANY QUESTIONS RELATED TO
                    PATIENT CARE, PLEASE CALL OUR OFFICE AT (480) 967-6888. IF
                    YOU HAVE A MEDICAL EMERGENCY, PLEASE CALL 911.
                    <button
                      type='submit'
                      className='mt-8 flex flex-row  items-center rounded-md border border-white bg-wcyan px-10 py-2 text-lg font-bold text-white hover:border  hover:bg-white hover:text-wcyan'
                    >
                      {buttonText}
                    </button>
                    <div className='text-left'>
                      {showSuccessMessage && (
                        <p className='my-2 text-lg font-semibold text-green-500'>
                          Thank you! Your Message has been delivered.
                        </p>
                      )}
                      {showFailureMessage && (
                        <p className='text-red-500'>
                          Oops! Something went wrong, please try again.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
