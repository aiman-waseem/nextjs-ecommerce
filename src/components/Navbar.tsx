"use client"
import { NAV_LINKS } from '@/lib/staticData'
import { Menu, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false)
  return (
    <nav className='container-fluid '>
      <div className='container'>
      <div className=' bg-red-200 px-lg-16 w-full h-[70px] shadow-md rounded-[1rem] mt-4 flex justify-between items-center'>
        
       <div className='flex '>
       <button className='lg:hidden pl-3'
       onClick={()=> setMobileDrawer(!mobileDrawer)}
       >
          {mobileDrawer ? <X/> : <Menu/> }
          </button>
        <div className='logo ' >
          <Image src="/assets/file.png"  alt='logo' width={100} height={100} />
        </div>
       </div>

        <div className='hidden  lg:flex'>
          <ul className='flex gap-20'>
           {NAV_LINKS.map((item)=> (
            <li>
              <Link   className='hover:text-neutral-500' href={item.url} > {item.title} </Link>
            </li>
           ) )}
          </ul>
        </div>
        <div className='pr-4'>
        <ShoppingCart/>
        </div>
      </div>
      </div>

      {mobileDrawer && (
  <div className=' justify-end flex flex-col items-center py-10 overflow-visible lg:hidden' >
      <ul className='flex flex-col items-center'>
    {NAV_LINKS.map((item, indx) => (
      <li key={indx} className='py-3'>
        <Link className=' hover:text-neutral-500' href={item.url}>{item.title}</Link>
      </li>
    ))}
  </ul>

  

  </div>
) }
       
    </nav>
  
  )
}

export default Navbar
