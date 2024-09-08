import React from 'react'
import axios from "axios"
import { IProduct } from '@/lib/ProductData'
import { ADD_TO_CART } from '@/reducer/reducer'

export interface ICart {
         productId: string,
        productName: string,
        productCategory: string,
        price: number,
        productImage:string,
        qty:number,
    }
    
export async function addToCart (cartObj:ICart,dispatch){
    try {
       const res = await  axios.post (`/api/cart`,cartObj)
       console.log("response", res)
       dispatch(ADD_TO_CART(cartObj));
    } catch (error) {
        console.log("Error from addCart endpoint", error)
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