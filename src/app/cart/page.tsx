import CartCard from '@/components/CartCard'
import OrderSummary from '@/components/OrderSummary'
import React from 'react'


const page = () => {
  return (
    <div className='container '>
      <div className='grid grid-cols-5 pt-20 gap-4'>
      <div className=' mt-5 p-3 rounded col-span-3'>
        <CartCard/>
      </div>
      <div className='bg-red-200 p-3 mt-5 rounded col-span-2'>
        <OrderSummary/>
      </div>
    </div>
    </div>
  )
}

export default page
