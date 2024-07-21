"use client"
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { GET_PRODUCTS, UPDATE_QUANTITY } from '@/reducer/reducer'
import Image from 'next/image'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'


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
        <div key={indx} className='flex rounded shadow-sm mb-4 bg-gray-100' >
        <div className='  mx-2 p-3'>
        <div className=' mt-5 flex justify-center'>
                  {item?.productImage[0] &&
                     <Image
                     className=' cursor-pointer'
                     alt='img'
                     src={urlForImage(item?.productImage[0])}
                     width={100}
                     height={100}
                 />
                  }
                </div>
        </div>
        <div className='p-3' >
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
        <span className='justify-items-end text-red-600'> Remove </span>
      </div>
    
    ))
   
  )
}

export default CartCard