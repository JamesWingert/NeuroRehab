/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prefer-const */
import { Cloudinary } from '@cloudinary/url-gen';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

import Banner from '@/components/layout/Banner';
import Divider from '@/components/layout/Dividers';
import Seo from '@/components/Seo';

export default function Appointment() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [voicemail, setVoicemail] = useState('');
  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState('Appointment Request');
  const [insurname, setInsurname] = useState('');
  const [insurnum, setInsurnum] = useState('');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Submit');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleMaleChange = () => {
    setGender('male');
  };
  const handleFemaleChange = () => {
    setGender('female');
  };
  const handleNoneChange = () => {
    setGender('none');
  };
  const handleYesChange = () => {
    setVoicemail('yes');
  };
  const handleNoChange = () => {
    setVoicemail('no');
  };

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (first.length <= 0) {
      tempErrors['first'] = true;
      isValid = false;
    }
    if (last.length <= 0) {
      tempErrors['last'] = true;
      isValid = false;
    }
    if (insurname.length <= 0) {
      tempErrors['insurname'] = true;
      isValid = false;
    }
    if (insurnum.length <= 0) {
      tempErrors['insurnum'] = true;
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
        first: first,
        last: last,
        gender: gender,
        insurname: insurname,
        insurnum: insurnum,
        email: email,
        phone: phone,
        voicemail: voicemail,
        subject: subject,
      };
      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_APPOINTMENT}`,
          templateParams,
          `${process.env.NEXT_PUBLIC_USER_ID}`
        )
        .then(
          (response) => {
            // console.log(response.text);
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Submit');

            setFirst('');
            setLast('');
            setEmail('');
            setPhone('');
            setGender('');
            setInsurname('');
            setInsurnum('');
            setVoicemail('');
          },
          (error) => {
            // console.log(error.text);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText('Submit');

            setFirst('');
            setLast('');
            setEmail('');
            setPhone('');
            setGender('');
            setInsurname('');
            setInsurnum('');
            setVoicemail('');
            return;
          }
        );
    }
    // console.log(
    //   first,
    //   last,
    //   email,
    //   phone,
    //   gender,
    //   insurname,
    //   insurnum,
    //   voicemail
    // );
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/servebanner_bmunho');
  return (
    <>
      <Seo />
      <Banner pageName='Book an Appointment' imageURL={myImage} />
      <div>
        <Divider sectionName='Request an Appointment' />

        <div className='container'>
          <form id='submit' onSubmit={handleSubmit}>
            <input type='hidden' name='_subject' value='New Appointment' />
            <div className='bg-white '>
              <div className=' mx-auto mt-10  rounded bg-white px-4'>
                <div className='border-b border-gray-300 py-5 xl:w-full'>
                  <div className='mx-auto flex w-11/12 items-center xl:mx-0 xl:w-full'>
                    <p className='text-lg font-bold  text-gray-800'>
                      To Request an Appointment Online with Neurology and Sleep
                      Medicine Associates, please use the form below, and our
                      scheduling coordinator will contact you by phone within
                      the next 48 hours (not including weekends or holidays) to
                      find an appointment that best meets your needs.
                    </p>
                  </div>
                  <p className='text-center text-red-600'>
                    If you are experiencing a medical emergency, please call
                    911.
                  </p>
                </div>
                <div className='mx-auto pt-4'>
                  <div className='items-center'>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='first'
                        className='pb-2 text-sm font-bold text-gray-800 '
                      >
                        First name
                      </label>
                      <input
                        type='text'
                        id='first'
                        name='first'
                        autoComplete='name'
                        placeholder='First Name'
                        className='rounded border  border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none '
                        value={first}
                        onChange={(e) => {
                          setFirst(e.target.value);
                        }}
                      />
                      {errors?.first && (
                        <p className='text-red-500'>
                          First name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='last'
                        className='pb-2 text-sm font-bold text-gray-800 '
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        id='last'
                        name='last'
                        className='rounded border  border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none '
                        placeholder='Last Name'
                        value={last}
                        onChange={(e) => {
                          setLast(e.target.value);
                        }}
                      />
                      {errors?.last && (
                        <p className='text-red-500'>
                          Last name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='gender'
                        className='pb-2 text-sm font-bold text-gray-800 '
                      >
                        Gender
                      </label>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='gender'
                            name='gender'
                            type='radio'
                            // checked="male"
                            className='h-4 w-4 border-gray-300 text-wcyan focus:ring-wcyan'
                            value={gender === 'male'}
                            onChange={handleMaleChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className='text-red-500'>
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor='gender'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Male
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='gender'
                            name='gender'
                            type='radio'
                            // checked="female"
                            className='h-4 w-4 border-gray-300 text-wcyan focus:ring-wcyan'
                            value={gender === 'female'}
                            onChange={handleFemaleChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className='text-red-500'>
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor='gender'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Female
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='gender'
                            name='gender'
                            type='radio'
                            // checked="none"
                            className='h-4 w-4 border-gray-300 text-wcyan focus:ring-wcyan'
                            value={gender === 'none'}
                            onChange={handleNoneChange}
                            // onChange={(e) => {
                            //   setGender(e.target.value);
                            // }}
                          />{' '}
                          {errors?.gender && (
                            <p className='text-red-500'>
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor='gender'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Rather not say
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='Insurance Name'
                        className='pb-2 text-sm font-bold text-gray-800 '
                      >
                        Name of Primary Insurance
                      </label>
                      <input
                        type='text'
                        id='insurname'
                        name='insurname'
                        className='rounded border  border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none '
                        placeholder='Name of insurance'
                        value={insurname}
                        onChange={(e) => {
                          setInsurname(e.target.value);
                        }}
                      />
                      {errors?.insurname && (
                        <p className='text-red-500'>
                          Insurance name cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='Insurance Number'
                        className='pb-2 text-sm font-bold text-gray-800  '
                      >
                        Insurance ID Number
                      </label>
                      <input
                        type='text'
                        id='insurnum'
                        name='Insurance ID'
                        className='rounded border   border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none  '
                        placeholder='Insurance ID'
                        value={insurnum}
                        onChange={(e) => {
                          setInsurnum(e.target.value);
                        }}
                      />
                      {errors?.insurnum && (
                        <p className='text-red-500'>
                          Insurance ID cannot be empty.
                        </p>
                      )}
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='email'
                        className='pb-2 text-sm font-bold text-gray-800  '
                      >
                        Email
                      </label>
                      <input
                        type='text'
                        id='email'
                        name='email'
                        className='rounded border   border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none  '
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
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='number'
                        className='pb-2 text-sm font-bold text-gray-800  '
                      >
                        Best Contact Number
                      </label>
                      <input
                        type='tel'
                        id='number'
                        name='number'
                        className='rounded border   border-gray-300 bg-transparent py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 shadow-sm focus:border-wcyan focus:outline-none  '
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />{' '}
                      {errors?.phone && (
                        <p className='text-red-500'>Phone cannot be empty.</p>
                      )}
                    </div>
                    <div className='mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4'>
                      <label
                        htmlFor='voicemail'
                        className='pb-2 text-sm font-bold text-gray-800  '
                      >
                        Is it okay to leave a voicemail at above phone number?
                      </label>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='voicemail'
                            name='voicemail'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-wcyan focus:ring-wcyan'
                            value={voicemail === 'yes'}
                            onChange={handleYesChange}
                            // onChange={(e) => {
                            //   setVoicemail(e.target.value);
                            // }}
                          />{' '}
                          {errors?.voicemail && (
                            <p className='text-red-500'>
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor='voicemail'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            Yes
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='voicemail'
                            name='voicemail'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-wcyan focus:ring-wcyan'
                            value={voicemail === 'no'}
                            onChange={handleNoChange}
                            // onChange={(e) => {
                            //   setVoicemail(e.target.value);
                            // }}
                          />{' '}
                          {errors?.voicemail && (
                            <p className='text-red-500'>
                              Please select an option
                            </p>
                          )}
                          <label
                            htmlFor='voicemail'
                            className='ml-3 block text-sm font-medium text-gray-700'
                          >
                            No{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    You will be contacted before an appointment is offered. If
                    you would like to provide any additional information to the
                    scheduling coordinator, please do so when you are contacted
                    via telephone.
                  </div>
                </div>
              </div>

              <div className='mx-auto mb-20 w-11/12 xl:w-full'>
                <div className='w-full flex-col items-center justify-start bg-white  py-4 sm:px-0'>
                  <button
                    type='submit'
                    className='mt-8 flex flex-row  items-center rounded-md border border-wcyan bg-wcyan px-10 py-2 text-lg font-bold text-white hover:border hover:border-wcyan hover:bg-wcyan/70'
                  >
                    {buttonText}
                  </button>
                  <div className='text-left'>
                    {showSuccessMessage && (
                      <p className='my-2 max-w-lg text-lg font-semibold text-green-500'>
                        Thank you!
                        <br /> Your message has been delivered and an
                        appointment specialist will reach out as soon as
                        possible.
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
