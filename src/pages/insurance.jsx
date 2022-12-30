import { Cloudinary } from '@cloudinary/url-gen';

import Banner from '@/components/layout/Banner';
import Seo from '@/components/Seo';
export const Insurances = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/insuranceBanner_ljpfam');
  return (
    <>
      <Seo />
      <Banner pageName='Insurances' imageURL={myImage} />
      <div>
        <div className='max-w-screen  mx-auto py-8 sm:max-w-6xl 2xl:max-w-[1700px]'>
          <div className='mb-10 text-center text-4xl text-wcyan'>
            Contracted Insurance Information
            <p className='mt-2 text-xl text-slate-800'>
              If you do not see your insurance listed, please still feel free to
              reach out. We are always happy to see what we can do!
            </p>
          </div>
          <table className='mb-20 w-full bg-white text-left  shadow'>
            <thead>
              <tr className='border-b border-gray-300 '>
                <th className='mx-auto w-1/3 py-5 text-xl text-gray-800 sm:pl-10 '>
                  Insurance
                </th>
                <th className='w-1/3 py-5 text-xl text-gray-800'>Contracted</th>
                <th className='w-1/3 py-5 text-center text-xl text-gray-800'>
                  Not Contracted
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Aetna
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  HMO/PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  Banner Choice Plus, Axel, Select Network, HMO Prime
                </td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md  mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Arizona Foundation
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  Schaller Anderson EPO
                </td>
              </tr>
              <tr>
                <td className='text-md  mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  BCBS
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  HMO/PPO
                </td>
                <td className='text-md py-5  text-center text-gray-800 sm:text-lg'>
                  Advantage. Allegiance, Secure Select, HMO, Blue High
                  Performance, Everyday Maricopa Focus
                </td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Cigna
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  HMO/PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  Local Plus
                </td>
              </tr>
              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  PHCS/Great West/ HNA
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Health Net
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  HMO/PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>

              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Humana
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  HMO/PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Medicaid/AHCCCS
                </td>
                <td className='text-md py-5  text-gray-800 sm:text-lg'>
                  Bridgeway/Bridgeway Adv., Care 1st/ One care, Health
                  Choice/Health Choice Generations, Health Net AHCCCS, Mercy
                  Care/Mercy Care Advv, UHC Community Plan (APIPA, Personal Care
                  Plus), Phoenix Health Plan/Abrazo
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>
              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Medicare
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  Accepted
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  Railroad Medicare
                </td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Pacificare
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  PPO/HMO, Lifeprint, Phoenix Direct Network
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>
              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  TriWest/TriCare
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  Accepted
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>
              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  United Healthcare
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  PPO
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  UHC Banner, AZ Compass, UHC Exchanged Market
                </td>
              </tr>
              <tr>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Workman's Compensation
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'>
                  Requires approval from adjustor
                </td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'></td>
              </tr>

              <tr className='bg-gray-200 '>
                <td className='text-md mx-auto py-5 text-gray-800  sm:pl-10 sm:text-lg'>
                  Miscellaneous Non-Contracted Plans
                </td>
                <td className='text-md mx-auto py-5  text-gray-800 sm:text-lg'></td>
                <td className='text-md mx-auto py-5  text-center text-gray-800 sm:text-lg'>
                  Oscar Health, Bright Health, Devoted Health, Molina HMO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Insurances;
