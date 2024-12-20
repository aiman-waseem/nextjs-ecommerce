"use client"
import { useAppSelector } from '@/app/store/hooks'
import { NAV_LINKS } from '@/lib/staticData'
import { Menu, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)
 console.log("CART ITEMS", cartItems.length)
  const [mobileDrawer, setMobileDrawer] = useState(false)
  return (
    <>
      {/* <div className='container mx-auto'>
      <div className='  bg-red-200 max-w-screen-lg z-40 lg:w-full w-full  fixed h-[70px] shadow-md rounded-[1rem] mt-4 flex justify-between items-center mx-auto px-4 '>
      
       <div className='flex items-center'>
       <button className='lg:hidden pl-3'
       onClick={()=> setMobileDrawer(!mobileDrawer)}
       >
          {mobileDrawer ? <X/> : <Menu/> }
          </button>
        <div className='logo' >
          <Image src="/assets/file.png"  alt='logo' width={100} height={100} />
        </div>
       </div>

        <div className='hidden  lg:flex flex-grow justify-center'>
          <ul className='flex gap-20'>
           {NAV_LINKS.map((item,indx)=> (
            <li key={indx}>
              <Link   className='hover:text-neutral-500' href={item.url} > {item.title} </Link>
            </li>
           ) )}
          </ul>
        </div>
        <Link href="/cart" className='pr-4'>
        <span><ShoppingCart/> {cartItems.length} </span>
        </Link >
      </div>
      </div> */}

<div className="mx-2 w-full fixed top-0 left-0 z-40">
  <div className="bg-red-200  mx-14 h-[70px] shadow-md rounded-[1rem] mt-4 flex justify-between items-center px-4">
    <div className="flex items-center">
      <button className="lg:hidden pl-3" onClick={() => setMobileDrawer(!mobileDrawer)}>
        {mobileDrawer ? <X /> : <Menu />}
      </button>
      <div className="logo">
        <Image src="/assets/file.png" alt="logo" width={100} height={100} />
      </div>
    </div>

    <div className="hidden lg:flex flex-grow justify-center">
      <ul className="flex gap-20">
        {NAV_LINKS.map((item, index) => (
          <li key={index}>
            <Link className="hover:text-neutral-500" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* <Link href="/cart" className="pr-4">
      <span>
        <ShoppingCart /> {cartItems.length}
      </span>
    </Link> */}
    <Link href="/cart" className="relative pr-4">
  <span className="relative">
    <ShoppingCart  size={30} />
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {cartItems.length}
      </span>
    )}
  </span>
</Link>
  </div>
</div>


      {mobileDrawer && (
  // <div className=' justify-end z-1 flex flex-col items-center py-10 overflow-visible lg:hidden' >
  <div className='fixed top-[90px] w-full bg-white shadow-lg lg:hidden z-40'>
      <ul className='flex flex-col items-center'>
    {NAV_LINKS.map((item, indx) => (
      <li key={indx} className='py-3'>
        <Link className=' hover:text-neutral-500' href={item.url}>{item.title}</Link>
      </li>
    ))}
  </ul>

  

  </div>
) }
       
       </>
  
  )
}

export default Navbar
