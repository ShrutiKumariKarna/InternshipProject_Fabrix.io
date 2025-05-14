import React from 'react';
import { navBarData } from '@/staticData/AllStaticData';
import Link from 'next/link';
// import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/UI/dropdown-menu";
// import dropDownArrow from "../../../public/assets/images/dropdownIcon.svg";
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className='w-[400px] '>
      <ul className='flex items-center gap-6 list-none text-textGray dark:text-white font-medium'>
        {navBarData.map((item) => (
          <li key={item.id}>
            {/* Adding DropDown for shop */}
            {item.submenu ? (
              <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center justify-center gap-1 focus:outline-none '>
                  <span className='nav-hover-effect'>
                    {item.title}
                  </span>
                  <ChevronDown height={20} width={20} className='text-[#0000099]'/> 
                  {/* <Image
                    src={dropDownArrow}
                    alt="dropDownArrow"
                    height={20}
                    width={20}
                  /> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start' className='bg-white shadow-md border border-gray-200 dark:bg-black'>
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.id}>
                      <Link href={subItem.path}>{subItem.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={item.path} className='block nav-hover-effect'>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
