import React from 'react'
import FilterSection from './FilterSection'
import CardContainer from './CardContainer'

const Arrivals = () => {    
  return (
    <div className='mx-4 sm:mx-10 lg:mx-24 mb-5 flex gap-5'>
      
      {/* This section is hidden on small screens, shown on lg and up */}
      <div className="hidden lg:block">
        <FilterSection />
      </div>

      <div className="flex-1">
        <CardContainer />
      </div>
      
    </div>
  )
}

export default Arrivals
