import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/store'

// Define a type for the slice state
interface CartState {
    value: number;
    products: any[];
    cartItems: any[];
  }
  
  // Define the initial state using that type
  const initialState: CartState = {
    value: 0,
    products: [],
    cartItems: [],
  }

export const cartSlice = createSlice({
    name: 'cart', // Use a name that reflects the slice
    initialState,
    reducers: {
        GET_PRODUCTS:(state,action: PayloadAction<any>)=>{
           return {
                  ...state,
                  products: action.payload,
                };  
        },
      UPDATE_QUANTITY:(state,action: PayloadAction<any>)=>{
         const pIndex = state.cartItems.findIndex((item)=> item.productId === action.payload.productId )
         console.log("Is product", pIndex)
      
        if (pIndex>=0){
          if (action.payload.state === "inc") {
            state.cartItems[pIndex].qty = (
              Number(state.cartItems[pIndex].qty) + 1
            ).toString();
  
            // localStorage.setItem("cart", JSON.stringify(state.basket));
          }
           else if (action.payload.state === "dec") {
            state.cartItems[pIndex].qty = (
              Number(state.cartItems[pIndex].qty) - 1
            ).toString();
  
            // localStorage.setItem("cart", JSON.stringify(state.basket));
          }
      }},
      ADD_TO_CART: (state, action: PayloadAction<any>) => {
        // state.cart.push(action.payload);
        // return {
        //   ...state,
        //   basket: [...state.basket, action.item],
        //   openMessage: {
        //     type: "success",
        //     text: "Item added successfully!",
        //     bgColor: "green",
        //   },
        // };
        console.log("ADDED TO CART",action.payload)
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cartItems, action.payload])
        );
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };  
      },
       REMOVE_CART: (state, action: PayloadAction<any>) => {
        const removeProduct = state.cartItems.filter((item)=> item.productId !== action.payload)
        console.log("Remove Product",action.payload)
             
  return {
    ...state,
    cartItems: removeProduct,
  };
       

      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    },
  })
//   case "GET_PRODUCTS":
//     return {
//       ...state,
//       allProducts: action.payload,
//     };
  // Action creators are generated for each case reducer function
  export const {REMOVE_CART, UPDATE_QUANTITY, ADD_TO_CART, decrement, incrementByAmount,GET_PRODUCTS } = cartSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.cart.value;
  export const cartItems = (state: RootState) => state.cart.cartItems;
  export const allProducts = (state:RootState) => state.cart.products
  export default cartSlice.reducer