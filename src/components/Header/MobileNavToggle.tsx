import React from 'react'
import { Menu } from 'lucide-react'

const MobileNavToggle = () => {
  return (
    <button className="focus:outline-none">
      <Menu className="w-6 h-6" />
    </button>
  )
}

export default MobileNavToggle
