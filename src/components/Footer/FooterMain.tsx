import React from 'react'
import SocialMediaLinks from './SocialmediaLinks'
import Logo from '../Header/Logo'
import { footerData } from '@/staticData/AllStaticData'
import Link from 'next/link'

const FooterMain = () => {
  return (
    <div className='mx-5 lg:mx-24 flex flex-col lg:flex-row justify-between gap-10'>
      {/* Brand */}
      <div className='w-full lg:w-96 flex flex-col'>
        <Logo />
        <h2 className='text-sm text-textGray dark:text-white  font-light mt-5'>
          We offer clothing that reflects your unique style outfits you’ll feel great in, whether for him or her.
        </h2>
        <SocialMediaLinks />
      </div>

      {/* Links */}
      <div className='w-full grid sm:grid-cols-2 gap-y-8 gap-x-4 lg:flex lg:justify-between'>
        {footerData.map((group) => (
          <div key={group.section}>
            <h1 className='mb-5 text-xl font-semibold text-primary dark:text-white '>{group.section}</h1>
            <ul className='flex flex-col gap-3 list-none text-textGray font-medium'>
              {group.links.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className='tracking-wide hover:scale-105 block hover:text-primary dark:text-white  hover:underline hover:underline-offset-4 cursor-pointer transition-all duration-200'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterMain
