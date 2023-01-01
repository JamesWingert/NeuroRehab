import { Cloudinary } from '@cloudinary/url-gen';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import Banner from '@/components/layout/Banner';
import Seo from '@/components/Seo';

import Chandler from '../components/maps/Chandler';
import Mesa from '../components/maps/Mesa';

const posts = [
  {
    title: '2152 S. Vineyard Drive',
    title2: 'Suite 131',
    title3: 'Mesa, AZ 85210',
    href: 'https://www.google.com/maps/place/2152+S+Vineyard+STE+131,+Mesa,+AZ+85210/@33.3747457,-111.8446123,17z/data=!4m13!1m7!3m6!1s0x872ba83cac3b3b05:0x3fb01aef26b66062!2s2152+S+Vineyard+STE+131,+Mesa,+AZ+85210!3b1!8m2!3d33.3747457!4d-111.8446123!3m4!1s0x872ba83cac3b3b05:0x3fb01aef26b66062!8m2!3d33.3747457!4d-111.8446123',
    id: 2,
    category: { name: 'Mesa, AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Directions',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    con: <Mesa></Mesa>,
  },
  {
    title: '2919 S. Ellsworth Road',
    title2: 'Suite 135',
    title3: 'Mesa, AZ 85212',
    href: 'https://www.google.com/maps/place/2919+S+Ellsworth+Rd+%23135,+Mesa,+AZ+85212/@33.3620994,-111.6371875,17z/data=!3m1!4b1!4m5!3m4!1s0x872bb18e61a89343:0xbe659bbab6bcbf35!8m2!3d33.3620994!4d-111.6349988',
    id: 1,
    category: { name: 'Mesa,AZ' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Directions',
    imageUrl: '/home/jimmy/Documents/NeurologySite/public/directions.png',
    con: <Chandler></Chandler>,
  },
];

export default function locations() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'jameswingert',
    },
  });
  const myImage = cld.image('v1651729614/locationbanner_zrd8yb');
  return (
    <div>
      <Seo />
      <Banner pageName='Locations' imageURL={myImage} />

      <div className='container'>
        <div className=' mx-auto mb-20'>
          <div className='mx-auto  mt-12  grid max-w-2xl gap-14  text-center  md:max-w-md lg:max-w-none lg:grid-cols-2 '>
            {posts.map((post) => (
              <div
                key={post.title}
                className='flex flex-col overflow-hidden rounded-lg border-2 border-wcyan/40 bg-white shadow-xl '
              >
                <div className='mb-32 h-48 w-full flex-shrink-0 bg-white '>
                  {post.con}
                </div>
                <div className='mx-auto mb-4 flex flex-1 flex-col justify-between '>
                  <div className='flex-1'>
                    <p className='flex items-center justify-center gap-2 text-xl font-medium text-wcyan '>
                      <LocationMarkerIcon
                        className='h-6 w-6 flex-shrink-0 text-wcyan'
                        aria-hidden='true'
                      />
                      {post.category.name}
                    </p>
                    <p className='mt-2 block'>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title}
                      </p>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title2}
                      </p>
                      <p className='text-2xl font-semibold text-gray-700'>
                        {post.title3}
                      </p>
                    </p>
                    <div className='mt-6 flex justify-center'>
                      <div className='flex-shrink-0'></div>
                      <div className='w-full'>
                        <Link href={post.href}>
                          <a
                            target='_blank'
                            className='flex items-center justify-center rounded-xl border border-wcyan bg-white px-4 py-3 text-base font-bold text-wcyan shadow-sm hover:text-wcyan/60'
                          >
                            <time dateTime={post.date}>{post.date}</time>
                          </a>
                        </Link>
                      </div>
                    </div>{' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
