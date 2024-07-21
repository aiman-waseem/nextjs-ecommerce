"use client"
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { GET_PRODUCTS, UPDATE_QUANTITY } from '@/reducer/reducer'
import React from 'react'


const CartCard = () => {
  const cartProducts = useAppSelector((state)=> state.cart.cartItems)

const dispatch = useAppDispatch()
  console.log("Cart Products", cartProducts)

  const handleQuantity = (productId:string,state:string) =>{
    console.log(productId, state)
     if (state === "inc"){
        dispatch(UPDATE_QUANTITY({productId,state}))
     }
  }
  return (
    cartProducts.map((item,indx)=>(
        <div key={indx} className='flex jus mb-4 bg-blue-300' >
        <div className=' bg-yellow-200  mx-2 p-3'>Image</div>
        <div className='' >
           <h3 className='font-semibold text-base'> {item.productName} </h3>
           <p> ${item.price} </p>
           <p> quantity: {item.qty} </p>

           <div className='pt-8 flex items-center space-x-5'>
                    
                     <div className='space-x-4 text-lg font-medium'>
                        <span
                        className='cursor-pointer'
                        //   onClick={()=> {quantity>1 && setQuantity(quantity-1)}}
                        > -</span>
                        <span>{item.qty} </span>
                        <span className='cursor-pointer' onClick={()=> handleQuantity(item.productId,"inc")} > + </span>
                     </div>
                </div>
        </div>
        <span className='justify-items-end'> Remove </span>
      </div>
    
    ))
   
  )
}

export default CartCard
