import React from 'react'
import axios from "axios"
import { IProduct } from '@/lib/ProductData'
import { ADD_TO_CART, REMOVE_CART } from '@/reducer/reducer'
import { AppDispatch } from '@/app/store/store'

export interface ICart {
         productId: string,
        productName: string,
        productCategory: string,
        price: number,
        productImage:string,
        qty:number,
    }
    
export async function addToCart (cartObj:ICart,dispatch:AppDispatch){
 
    try {
       const res = await  axios.post (`/api/cart`,cartObj)
       console.log("response", res)
       dispatch(ADD_TO_CART(cartObj));
 

    } catch (error) {
        console.log("Error from addCart endpoint", error)
    }

}

// export async function deleteCart (productId:string,dispatch){
//     try {
//        const res = await  axios.delete (`/api/cart/delete`,productId)
//        console.log("response", res)
//        dispatch(  REMOVE_CART(productId));
//     } catch (error) {
//         console.log("Error from addCart endpoint", error)
//     }
// }

export async function deleteCart(productId: string, dispatch:AppDispatch ) {
    console.log("API DELETE PRODUCT ID",productId)
    try {
      const res = await axios.delete(`/api/cart/delete?productId=${productId}`)
      console.log("delete response", res);
      dispatch(REMOVE_CART(productId));
    } catch (error) {
    console.log("API DELETE PRODUCT ID",productId)

      console.log("Error from deleteCart endpoint", error);
    }
  }
  


// export async function updateAddress(
//     details,
//     encodedToken,
//     addressId,
//     setLoader,
//     router,
//     setEmailError
//   ) {
//     try {
//       await axios.post(
//         `${base_url}/api/v1/web/address/update/${addressId}`,
//         details,
//         {
//           headers: {
//             Authorization: "BAREAR " + encodedToken,
//           },
//         }
//       );
//       setLoader(false);
//       router.push("/dashboard/contact");
//     } catch (e) {
//       console.log(e);
//       if (e.response.data.msg.includes("Email")) {
//         setEmailError(e.response.data.msg);
//       }
//       setLoader(false);
//     }
//   }