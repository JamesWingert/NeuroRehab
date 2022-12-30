import {
  LocationMarkerIcon,
  MailIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Insurances', href: '/insurance', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Patients', href: '/patients', current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Footer = () => {
  const router = useRouter();

  <svg
    className='w-fill absolute right-32 top-0  -mt-5 h-6 text-[#E8FAFC] sm:-mt-10  sm:h-14'
    preserveAspectRatio='none'
    viewBox='100 100 1540 54'
  >
    <path
      fill='currentColor'
      d='M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z'
    />
  </svg>;

  return (
    <div className='relative bg-[#F7FDFE] '>
      <div className='mx-auto max-w-7xl pt-8 text-center  '>
        <div className='custom-shape-divider-bottom-1647011816 w-fill absolute right-32 top-0  z-10 -mt-5 h-6 sm:-mt-10  sm:h-14 '>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 250'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='shape-fill '
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='shape-fill '
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='shape-fill '
            ></path>
          </svg>
        </div>

        <div className='mb-8 grid justify-center space-y-5 sm:grid-flow-col sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
          <div className='sm:col-span-2'>
            <Link href='/' passHref>
              <a
                aria-label='Go home'
                title='Company'
                className='inline-flex items-center'
              >
                <Image src='/logo.png' alt='logo' height={55} width={300} />
              </a>
            </Link>
            <div className='mt-5  font-bold tracking-wide text-[#191716] '>
              Hours:
            </div>
            <div className='tracking-wide text-[#191716] '>
              {' '}
              Monday - Friday 8:00 AM to 5:00 PM{' '}
            </div>
            <div className='text-l mt-5 font-bold tracking-wide text-[#191716]  '>
              Closed for lunch:
            </div>
            <div className='text-base tracking-wide  text-[#191716] '>
              {' '}
              Monday - Friday 12:00 PM to 1:00 PM{' '}
            </div>{' '}
            <div className='mt-4 items-center justify-center space-y-3 text-center'>
              <dt className='sr-only'>Phone number</dt>
              <div className='flex items-center justify-center text-center'>
                <Link href='tel:4809676888' passHref>
                  <a>
                    <PhoneIcon
                      className='h-6 w-6 flex-shrink-0 items-center justify-center text-center text-wcyan'
                      aria-hidden='true'
                    />
                  </a>
                </Link>
                <span className='ml-1 items-center justify-center self-center text-center'>
                  <Link href='tel:4809676888' passHref>
                    <a className='flex items-center justify-center text-center '>
                      <span className='font-bold  text-[#191716] '>
                        Phone: &nbsp;
                      </span>
                      <span className='text-base text-[#191716] '>
                        (480) 967-6888
                      </span>
                    </a>
                  </Link>
                </span>
              </div>
              <div className='flex justify-center'>
                <NewspaperIcon
                  className='h-6 w-6 flex-shrink-0 text-wcyan'
                  aria-hidden='true'
                />
                <div className='ml-1 flex'>
                  <span className='text-base font-bold text-[#191716]'>
                    Fax: &nbsp;
                  </span>{' '}
                  <span className='text-base  text-[#191716]'>
                    (480) 967-6887
                  </span>
                </div>{' '}
              </div>{' '}
              <div className='items-center justify-center text-center'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex items-center justify-center text-center'>
                  <span className='flex items-center justify-center text-center text-base font-bold text-[#191716]'>
                    <MailIcon
                      className='mr-1 h-6 w-6 flex-shrink-0 text-wcyan'
                      aria-hidden='true'
                    />{' '}
                    Email: &nbsp;
                  </span>{' '}
                  <span className='text-base text-[#191716] '>
                    HHedgpeth@neurologyandsleep.com
                  </span>
                </dd>
              </div>
            </div>
            <div className='mt-6 flex items-center justify-center'>
              <Link href='/appointment' passHref>
                <button
                  type='button'
                  className='text-md rounded-full border border-wcyan bg-wcyan px-5 py-2.5 text-center font-medium text-white hover:border hover:border-wcyan hover:bg-wcyan/70 '
                >
                  REQUEST APPOINTMENT
                </button>
              </Link>
            </div>
          </div>
          <div className='mx-auto hidden justify-center text-center lg:col-span-1 lg:grid  '>
            <div className='lg:grid lg:grid-rows-6 lg:justify-center'>
              <p className='text-lg font-bold tracking-wider text-[#191716] '>
                Navigate:
              </p>
              <div className='row-span-6 text-base '>
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name} passHref>
                    <a
                      className={classNames(
                        'text-lg font-bold tracking-wider',
                        router.route === item.href
                          ? 'text-wcyan underline decoration-wcyan underline-offset-4'
                          : // text-gray-900  border-gray-900
                            '  text-[#191716]   hover:text-wcyan'
                        // border-transparent
                      )}
                      aria-current={
                        router.route === item.href ? 'page' : undefined
                      }
                    >
                      <div className='mb-3'>{item.name}</div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='items-center justify-center text-center sm:space-y-11 '>
            <p className='text-lg font-bold tracking-wider  text-[#191716]'>
              Locations:
            </p>
            <dl className='text-base font-bold tracking-wide text-[#191716] '>
              <div className='mt-2 '>
                <dt className='sr-only'>Postal address</dt>
                <dd className='flex justify-center text-center'>
                  <LocationMarkerIcon
                    className='h-6 w-6 flex-shrink-0 text-wcyan '
                    aria-hidden='true'
                  />
                  <span className='mb-3 items-center text-center'>
                    2919 S. Ellsworth Rd.<br></br> Suite 135 <br />
                    Mesa, AZ 85212
                  </span>
                </dd>
                <dt className='sr-only'>Postal address</dt>
                <dd className='flex justify-center text-center'>
                  <LocationMarkerIcon
                    className='h-6 w-6 flex-shrink-0 text-wcyan'
                    aria-hidden='true'
                  />
                  <span className='mb-3 items-center text-center'>
                    2152 S. Vineyard Dr.<br></br>Suite 131
                    <br /> Mesa, AZ 85210
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className='flex items-center justify-center gap-3 text-center sm:col-start-4 sm:flex-col sm:justify-start  lg:col-start-5'>
            <div className='mt-1 flex items-center '>
              <Link href='/patients' passHref>
                <button
                  type='button'
                  className='text-,d rounded-full border border-wcyan bg-wcyan px-5 py-2.5 text-center font-medium text-white hover:border hover:border-wcyan hover:bg-wcyan/70  '
                >
                  PATIENTS
                </button>
              </Link>
            </div>
            <div className='mt-1 flex items-center md:justify-center'>
              <Link href='/medprof' passHref>
                <button
                  type='button'
                  className='text-md rounded-full border border-wcyan bg-wcyan px-5 py-2.5 text-center font-medium text-white hover:border hover:border-wcyan hover:bg-wcyan/70  '
                >
                  PROVIDERS
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col  justify-between border-t border-wcyan pt-5 pb-2 md:flex-row lg:-mb-10 '>
          <p className='pb-2 text-sm text-gray-600'>
            © Copyright 2022 Neurology And Sleep Medicine Associates. All rights
            reserved.
          </p>

          <span className='mb-2 text-sm text-gray-600 '>
            Site made by &nbsp;
            <span className='text-sm text-wcyan'>
              <Link href='https://www.wingertproject.com' passHref>
                James Wingert
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
