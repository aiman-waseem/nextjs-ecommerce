import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import React from 'react'
import { Button } from './ui/button';
import getStripe from '../lib/getStripe';
import toast from 'react-hot-toast';
import axios from 'axios';

const OrderSummary = () => {
  const cartProducts = useAppSelector((state)=> state.cart.cartItems)
  console.log("Cart Product in Summary", cartProducts)
const dispatch = useAppDispatch()
  // Calculate the total quantity
  const totalPrice = cartProducts.reduce((acc, item) => acc + item.qty * item.price, 0);

//    const handleCheckout = async () => {
//   try {
//     const stripe = await getStripe();

//     const response = await fetch('/api/stripe', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(cartProducts),
//     });

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }

//     const data = await response.json();

//     toast.loading('Redirecting...');

//     await stripe.redirectToCheckout({ sessionId: data.id });
//   } catch (error) {
//     console.error('Checkout error:', error);
//     toast.error('Checkout failed. Please try again.');
//   }
// };

// export async function addToCart (cartObj:ICart,dispatch){
//     try {
//        const res = await  axios.post (`/api/cart`,cartObj)
//        console.log("response", res)
//        dispatch(ADD_TO_CART(cartObj));
//     } catch (error) {
//         console.log("Error from addCart endpoint", error)
//     }
// }

const handleCheckout = async () => {
 
  try {
     console.log("This is handle Checkout froom try", cartProducts)
    const stripe = await getStripe(); // Load Stripe.js
      console.log("STRipe get", stripe)
    // Call your backend to create the Checkout session
   const response = await  axios.post (`/api/cart/stripe`,cartProducts)
     console.log("Stripe Response", response)
    // Handle any errors from the API response
    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status} ${response.statusText}`);
    // }

       if (response.data.url) {
      toast.loading('Redirecting...');
      window.location.href = response.data.url; // Use the full URL for redirect
    } else {
      throw new Error('No Stripe Checkout URL found');
    }
   
  } catch (error) {
    console.error('Checkout error:', error);
    toast.error('Checkout failed. Please try again.');
  }
};

  // console.log("Stripe key",process.env.NEXT_PUBLIC_STRIPE_KEY)
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

          <Button className='hover:bg-black hover:text-white rounded-sm m-5' variant={'outline'}
           onClick={handleCheckout}
          >Proceed to Checkout</Button>
          </div>
       
      )}
    </>
  )};

export default OrderSummary
