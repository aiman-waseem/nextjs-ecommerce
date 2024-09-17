"use client"
import CartCard from '@/components/CartCard'
import OrderSummary from '@/components/OrderSummary'
import React from 'react'



const page = () => {
  
  return (
    <div className='container mx-8 '>
      <div className='  grid grid-cols-12  pt-20 gap-4'>
      <div className='  col-span-6'>
        <CartCard  />
      </div>
      <div className='col-span-3 ' >
        <OrderSummary/>
      </div>
    </div>
    </div>
  )
}

export default page
