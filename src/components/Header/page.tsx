import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import SearchBox from './SearchBox'
import Cart from './Cart'
import AuthComponent from './AuthComponent'
import TopBanner from './TopBanner'
import MobileNavToggle from './MobileNavToggle' 

const Header = () => {
  return (
    <div>
      <TopBanner />

      {/* Desktop Layout */}
      <div className="hidden lg:flex mx-24 my-5 h-[50px] gap-12 justify-center items-center">
        <Logo />
        <NavBar />
        <SearchBox />
        <div className='flex justify-center items-center gap-4'>
          <Cart />
          <AuthComponent />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden justify-between items-center px-4 py-4">
        <MobileNavToggle />
        <Logo />
        <div className="flex items-center gap-4">
          <Cart />
          <AuthComponent />
        </div>
      </div>
    </div>
  )
}

export default Header
