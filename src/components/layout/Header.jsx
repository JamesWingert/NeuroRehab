import Link from 'next/link';
//fff3de 
const Header = () => {
  return (
    <nav className='sticky flex-row'>
      <div className='mx-auto flex justify-center bg-[#fef5e3] sm:px-2 md:flex-row md:items-center md:px-10 lg:mx-auto  lg:justify-evenly'>
        
        <div className='my-2 flex'>
          <Link href='tel:4809676888' passHref>
            <button className='font-md flex items-center justify-center space-x-2 rounded-lg px-5 text-lg  font-semibold text-[#6e8b9c] hover:border-[#5582a6] hover:text-[#5582a6]   hover:outline '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>

              <Link href='tel:4809676888' passHref>
                <a className='hidden text-gray-600 lg:flex'>
                  Phone: (480) 967-6888
                </a>
              </Link>
              <Link href='tel:4809676888' passHref>
                <a className='hidden text-gray-600 md:flex lg:hidden '>Phone</a>
              </Link>
            </button>
          </Link>
          <Link href='/contact' passHref>
            <button className='font-md flex items-center justify-center space-x-2  rounded-lg border-black px-5 text-lg font-semibold text-[#6e8b9c] hover:border-[#5582a6] hover:text-[#5582a6] hover:outline '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              <Link href='/contact' passHref>
                <a className='hidden text-gray-600 lg:flex '>
                  Fax: (480) 967-6887
                </a>
              </Link>
            </button>
          </Link>
          <Link href='/contact' passHref>
            <button className='font-md flex items-center justify-center space-x-2    rounded-lg border-black px-5 text-lg font-semibold text-[#6e8b9c]  hover:border-[#5582a6] hover:text-[#5582a6] hover:outline '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <Link href='/contact' passHref>
                <a className='hidden text-gray-600 md:flex '>
                  M-F 8:00 AM-5:00 PM
                </a>
              </Link>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
