import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from './Header';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Insurances', href: '/insurance', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();

  return (
    <Disclosure
      as='nav'
      className='-mb-.5 z-50 w-full border-b border-wcyan bg-white '
    >
      {({ open }) => (
        <>
          <Header />
          <div className='mx-auto max-w-screen-2xl lg:mx-auto '>
            <div className='h-18 relative flex items-center justify-between'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#465b69] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-10 w-10' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-10 w-10' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 sm:justify-start md:items-stretch '>
                <div className='flex flex-shrink-0 items-center '>
                  <div className='block w-auto p-3 '>
                    <Link href='/' passHref>
                      <Image
                        src='/RehabLogo.png'
                        alt='logo'
                        height={65}
                        width={360}
                        className='hover:cursor-pointer'
                      />
                    </Link>
                  </div>
                </div>
                <div className='md:my-auto md:mx-auto md:flex-1 '>
                  <div className='hidden lg:ml-6 lg:block '>
                    <div className='flex items-center justify-end space-x-4'>
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name} passHref>
                          <a
                            className={classNames(
                              ' font-heavy px-1 text-xl',
                              router.route === item.href
                                ? 'border-b border-wcyan text-wcyan'
                                : ' text-gray-600  hover:border-b hover:border-wcyan hover:text-wcyan'
                            )}
                            aria-current={
                              router.route === item.href ? 'page' : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden '>
            <div className='space-y-1 px-2 pt-2 pb-3 '>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    router.route === item.href
                      ? 'bg-[#465b69]/90 text-white'
                      : 'bg-wcyan hover:bg-wcyan/80 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={router.route === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
