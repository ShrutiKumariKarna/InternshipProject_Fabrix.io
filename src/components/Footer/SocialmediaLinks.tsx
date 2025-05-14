import React from 'react'
import Image from 'next/image'
import { SocialMediaLinks as socialMediaData } from '@/staticData/AllStaticData' 

const SocialMediaLinks = () => {
  return (
    <div className="w-36 mt-8 flex items-center justify-between">
      {socialMediaData && socialMediaData.map(({ href, src, alt, width, height, bg }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full w-7 h-7 border border-[#00000033] ${bg} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}
        >
        <Image src={src} alt={alt} width={width} height={height} />
        </a>
      ))}
    </div>
  )
}

export default SocialMediaLinks
