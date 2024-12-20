"use client"
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { GET_PRODUCTS, REMOVE_CART, UPDATE_QUANTITY } from '@/reducer/reducer'
import Image from 'next/image'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import { addToCart, deleteCart } from '@/endpoints/cart'
import { Trash2 } from 'lucide-react'

const CartCard = () => {
  const cartProducts = useAppSelector((state) => state.cart.cartItems)
  const dispatch = useAppDispatch()
  console.log("Cart Products", cartProducts)

  const handleQuantity = (productId: string, state: string) => {
    console.log(productId, state)
    if (state === "inc") {
      dispatch(UPDATE_QUANTITY({ productId, state }))
    } else if (state === "dec") {
      dispatch(UPDATE_QUANTITY({ productId, state }))
    }
  }

  return (
    <>
    {cartProducts.length > 0 && 
      <h2 className='font-extrabold text-3xl '>Shopping Cart</h2>
      
    }
      {cartProducts.map((item, indx) => (
        <div key={indx} className='p-3 rounded'>
          <div className='flex rounded shadow-md gap-x-5 relative'>
            <div className='flex justify-center rounded'>
              {item?.productImage &&
                <Image
                  className='rounded cursor-pointer'
                  alt='img'
                  src={urlForImage(item?.productImage)}
                  width={180}
                  height={190}
                />
              }
            </div>

            <div className='    mx-4'>
              <h3 className=' text-2xl'>{item.productName}</h3>
              {/* <p className='text-xl '>
                <span className='font-semibold'> Qty: </span>
                {item.qty}
              </p> */}
              <p className='text-xl  font-semibold py-3'> Delivery Estimation </p>
              <p className='text-xl text-yellow-400 font-semibold ' > 5 Working Days </p>


              <p className=' absolute bottom-2 font-bold pt-2 text-2xl'> ${item.qty * item.price} </p>

             
            </div>


          
            <div className='flex flex-col justify-between bg-yellow-400'>
            <div
              className=' absolute top-2 right-2  text-red-600 cursor-pointer'
              onClick={() => { deleteCart(item.productId, dispatch) }}
              // onClick={()=>dispatch(REMOVE_CART(item.productId))}
            >
               <Trash2/>
            </div>
           
                <div className=' absolute bottom-2 right-2 text-xl space-x-4  border-solid border-2 border-black p-2 rounded font-medium'>
                  <span
                    className='cursor-pointer'
                    onClick={() => { item.qty > 1 && handleQuantity(item.productId, "dec") }}
                  > -</span>
                  <span>{item.qty} </span>
                  <span className='cursor-pointer ' onClick={() => handleQuantity(item.productId, "inc")} > + </span>
                
              </div>
            </div>
            
          
          </div>
        </div>
      ))}
    </>
  )
}

export default CartCard
