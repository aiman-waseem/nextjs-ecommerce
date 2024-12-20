"use client"
import CartCard from '@/components/CartCard'
import OrderSummary from '@/components/OrderSummary'
import React from 'react'
import { useAppSelector } from '../store/hooks'



const Cart = () => {
    const cartProducts = useAppSelector((state) => state.cart.cartItems)
  
  return (
    <div className='container'>
     {cartProducts.length > 0 ?
     (  <div className='  grid grid-cols-11   pt-[8rem] gap-4'>
      
       <div className='  col-span-7   '>
       
         <CartCard  />
       </div>
       {/* <div className='col-span-1'></div> */}
       <div className='col-span-3  ' >
         <OrderSummary/>
       </div>
  
 
     </div>) : (
      <div className="min-h-screen flex flex-col items-center justify-center ">
           <h1 className="text-4xl font-bold text-black">Cart Is Empty !</h1>
      </div>
     )
    }
    </div>
  )
}

export default Cart
