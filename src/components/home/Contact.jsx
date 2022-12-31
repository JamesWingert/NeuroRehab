import emailjs from '@emailjs/browser';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';

import Divider from '../layout/Dividers';

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
          () => {
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Submit');
            // Reset form fields
            setFullname('');
            setEmail('');
            setPhone('');
            setMessage('');
          },
          () => {
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
  };
  return (
    <div className='bg-white'>
      <Divider sectionName='How did we do?' />
      <div className='container max-w-6xl pb-24 '>
        <div className='relative rounded-2xl bg-[#fff3de]/30 shadow-2xl'>
          <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
            <div className=' py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12'>
              <div className='mx-auto max-w-lg'>
                <h2 className='text-3xl font-extrabold tracking-tight text-wcyan sm:text-3xl'>
                  Get in touch
                </h2>
                <p className='mt-3 text-lg leading-6 text-gray-700'>
                  Suggestion? <br />
                  Good Experience? <br />
                  Bad Experience? <br />
                  <br />
                  This contact form will route directly to our Office Manager,
                  so please use it to let us know how we are doing and how we
                  can improve. <br />
                  <br /> We value all forms of feedback and can't wait to hear
                  from you!
                </p>
                <dl className='mt-8 text-base text-gray-700'>
                  <div className='mt-6'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd className='flex'>
                      <PhoneIcon
                        className='h-6 w-6 flex-shrink-0 text-wcyan'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>+1 (480) 967-6888</span>
                    </dd>
                  </div>
                  <div className='mt-3'>
                    <dt className='sr-only'>Email</dt>
                    <dd className='flex'>
                      <MailIcon
                        className='h-6 w-6 flex-shrink-0 text-wcyan'
                        aria-hidden='true'
                      />
                      <span className='ml-3 text-gray-700'>
                        HHedgpeth@neurologyandsleep.com
                      </span>
                    </dd>
                  </div>
                </dl>
                <p className='mt-6 text-base text-gray-700'>
                  Looking for basic contact form and info? <br />
                  <Link href='/contact' passHref>
                    <a className='font-medium text-wcyan underline'>
                      View normal contact
                    </a>
                  </Link>
                  <br />
                </p>
              </div>
            </div>

            <div className='rounded-2xl bg-white  py-12 px-4 sm:px-6 lg:col-span-3  lg:px-8 xl:pl-12'>
              <div className='mx-auto max-w-lg lg:max-w-none'>
                <form
                  onSubmit={handleSubmit}
                  className='grid grid-cols-1 gap-y-6'
                >
                  <div>
                    {' '}
                    <input
                      type='hidden'
                      name='_subject'
                      value='Feedback Form'
                    />
                    <label htmlFor='fullname' className='sr-only'>
                      Full name
                    </label>
                    <input
                      type='text'
                      name='fullname'
                      id='fullname'
                      autoComplete='name'
                      className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-wcyan focus:ring-wcyan'
                      placeholder='Full name'
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                    {errors?.fullname && (
                      <p className='text-red-500'>Fullname cannot be empty.</p>
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
                      className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-wcyan focus:ring-wcyan'
                      placeholder='Email'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />{' '}
                    {errors?.email && (
                      <p className='text-red-500'>Email cannot be empty.</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor='phone' className='sr-only'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-wcyan focus:ring-wcyan'
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
                      rows={8}
                      className='block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-wcyan focus:ring-wcyan'
                      placeholder='Message'
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />{' '}
                    {errors?.message && (
                      <p className='text-red-500'>Message cannot be empty.</p>
                    )}
                  </div>
                  <div className='flex gap-4'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-wcyan py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-wcyan/80 focus:outline-none focus:ring-2 focus:ring-wcyan/60 focus:ring-offset-2'
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
                  </div>{' '}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
