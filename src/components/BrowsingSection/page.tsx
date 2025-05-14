import React from 'react'
import Image from 'next/image'
import casualDress from "../../../public/assets/dressImages/casualDress.png"
import formalDress from "../../../public/assets/dressImages/formalDress.png"
import partyDress from "../../../public/assets/dressImages/partyDress.png"
import gymDress from "../../../public/assets/dressImages/gymDress.png"

const BrowsingSection = () => {
  return (
    <div className="bg-secondary rounded-2xl px-4 py-10 sm:px-8 lg:mx-24 my-16">
      <div className="flex flex-col items-center">
        <h1 className="mb-14 text-4xl sm:text-5xl text-primary font-black text-center">
          BROWSE BY DRESS STYLE
        </h1>

        {/* FirstRow  */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-center">
          <div className="h-[300px] w-full sm:w-[380px] lg:w-[460px] relative rounded-3xl overflow-hidden">
            <h1 className="text-4xl sm:text-5xl text-primary font-black absolute left-6 top-5 z-10">
              Casual
            </h1>
            <Image
              src={casualDress}
              alt="Casual Dress"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="h-[300px] w-full sm:w-[500px] lg:w-[800px] relative rounded-3xl overflow-hidden">
            <h1 className="text-4xl sm:text-5xl text-primary font-black absolute left-6 top-5 z-10">
              Formal
            </h1>
            <Image
              src={formalDress}
              alt="Formal Dress"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* SecondRow  */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="h-[300px] w-full sm:w-[500px] lg:w-[800px] relative rounded-3xl overflow-hidden">
            <h1 className="text-4xl sm:text-5xl text-primary font-black absolute left-6 top-5 z-10">
              Party
            </h1>
            <Image
              src={partyDress}
              alt="Party Dress"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="h-[300px] w-full sm:w-[380px] lg:w-[460px] relative rounded-3xl overflow-hidden">
            <h1 className="text-4xl sm:text-5xl text-primary font-black absolute left-6 top-5 z-10">
              Gym
            </h1>
            <Image
              src={gymDress}
              alt="Gym Dress"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowsingSection


// import React from 'react'
// import Image, { StaticImageData } from 'next/image'
// import casualDress from "../../../public/assets/dressImages/casualDress.png"
// import formalDress from "../../../public/assets/dressImages/formalDress.png"
// import partyDress from "../../../public/assets/dressImages/partyDress.png"
// import gymDress from "../../../public/assets/dressImages/gymDress.png"

// const DressCard = ({src, alt, label,width}: {src: StaticImageData, alt: string, label: string, width: string}) => (
//   <div className={`w-[${width}] h-[300px] relative overflow-hidden rounded-3xl`}>
//     <h1 className='text-5xl text-primary font-black absolute left-6 top-5 z-10'>{label}</h1>
//     <Image src={src} alt={alt} fill className='object-cover rounded-3xl'/>
//   </div>
// )

// const BrowsingSection = () => {
//   return (
//     <div className='mx-24 my-16 bg-secondary rounded-2xl '>
//       <div className='py-4 flex flex-col'>
//         <h1 className='mb-14 mx-auto text-5xl text-primary font-black'>BROWSE BY DRESS STYLE</h1>

//         <div className='flex gap-3 mb-3 mx-auto'>
//           <DressCard src={casualDress} alt="Casual Dress" label="Casual" width="460px" />
//           <DressCard src={formalDress} alt="Formal Dress" label="Formal" width="800px" />
//         </div>

//         <div className='flex gap-3 mb-3 mx-auto'>
//           <DressCard src={partyDress} alt="Party Dress" label="Party" width="800px" />
//           <DressCard src={gymDress} alt="Gym Dress" label="Gym" width="460px" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BrowsingSection
