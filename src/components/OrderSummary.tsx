import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import React from 'react'
import { Button } from './ui/button';

const OrderSummary = () => {
  const cartProducts = useAppSelector((state)=> state.cart.cartItems)

const dispatch = useAppDispatch()
  // Calculate the total quantity
  const totalPrice = cartProducts.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      {cartProducts.length > 0 && (
        <div className="bg-red-200 p-3 mt-5 rounded">
          <p>Order Summary</p>
          {cartProducts.map((item) => (
          <div className="flex justify-between">
            <div className="flex-grow">
            <p>{item.qty}X {item.productName}</p>
              {/* <p>Quantity</p>
              <p>Subtotal</p> */}
            </div>

              {/* Map through cart items and display subtotal */}
             
                <div key={item.id}>
                  
                  <p>${item.qty * item.price}</p>
                </div>
                </div>
              ))}
            
          
          
          {/* Total Quantity */}
          <div className="ml-auto text-right mt-3">
            <p>Total Price: ${totalPrice}</p>
          </div>

          <Button className='hover:bg-black hover:text-white rounded-sm m-5' variant={'outline'}>Proceed to Checkout</Button>
          </div>
       
      )}
    </>
  )};

export default OrderSummary
