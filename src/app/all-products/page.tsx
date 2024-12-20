// "use client"
// import React, { useEffect, useState } from 'react'
// import { client } from '../../../sanity/lib/client'
// import { IProduct,  getAllProductsData } from '@/lib/ProductData'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import Image from 'next/image'
// import { urlForImage } from '../../../sanity/lib/image'
// import { ShoppingCart } from 'lucide-react';
// import { useRouter } from 'next/navigation'

// const AllProducts =   () => {
//   const router = useRouter()
//   const [products, setProducts] = useState<IProduct[]>([])
//   useEffect(()=>{
//     getAllProductsData(setProducts)
//   },[])
//     // const allProductData: Product[] = await getAllProductsData()
//     console.log("Client side prod dat", products)

//     // console.log( "Client data", allProductData)
//     const handleProductClick = (category:string,productName:string) =>{
//       router.push(`${category}/${productName}`)
//     }
//   return (
//     <div className='container'>
//       <div className='grid grid-cols-2 lg:grid-cols-[auto,auto,auto,auto] md:grid-cols-3 pt-20 gap-10 justify-center '>
//       {products.map((item)=>(
//        const { productCategory } = item.category;
//       return(
//                 <div key={item.slug} className='mt-5  p-3  rounded-xl shadow-lg'>
//                 {/* <div className='flex flex-col justify-center align-center'> */}
//                 <div>
//               <Image
//                 // style={{
//                 //   height: "230px",
//                 //   position: "relative",
//                 //   cursor: "pointer",
//                 //   boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.1)",
//                 //   objectFit: "contain",
//                 // }}
//               className='min-h-[266px] object-fit' alt='img'  src={urlForImage(item.prodImg[0])} width={250} height={100} 
//               onClick={() => handleProductClick(productCategory, item.slug)}
//               />
//                 </div>
//                 <div className='pt-2 flex justify-between items-center'>
//                 <div>
//                 <h2 className=' text-base capitalize font-medium'> {item.title} </h2>
//                 <h3 className='font-bold'> {item.price} </h3>
//                 </div>
//                 <div
//                 style={{
//                   width: "32px",
//                   height: "32px",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                 }}
//                 className=' flex justify-center items-center border border-black'
//                 >
//                   <ShoppingCart size={18}/>
//                 </div>
//                 </div>
            

//           </div>
//    )
//   ))}
  
 
//     </div>
//     </div>
   
  
//   )
// }

// export default AllProducts


"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import { IProduct, getAllProductsData } from '@/lib/ProductData'

import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import { LoaderCircle, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ADD_TO_CART } from '@/reducer/reducer'
import { addToCart } from '@/endpoints/cart'

// The `state` arg is correctly typed as `RootState` already

const AllProducts = () => {
  const router = useRouter()
  const allProducts = useAppSelector((state) => state.cart.products)
  const cartProducts = useAppSelector((state)=> state.cart.cartItems)
  const [prodId, setProdId] = useState("")
  const [loader, setLoader] = useState(false)
const dispatch = useAppDispatch()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAllProductsData(setProducts,dispatch)
    

  }, [])
    console.log("Products from reducer", allProducts)
    console.log("cart products from sll prod", cartProducts)
  const handleProductClick = (category:string, productName:string) => {
    router.push(`/${category}/${productName}`)
  }
// const handleCart=(product:IProduct, prodId:string)=>{
 
//   // if item already in cartitem then  update(add) quantity of that product only 
//   const addCart = {
//     productId: product?._id,
//     productName: product?.title,
//     productCategory: product?.category?.productCategory,
//     price:product?.price,
//     productImage:product?.prodImg[0],
//     qty:1,
//   }
  
//   addToCart(addCart)
//   console.log(addCart)
//   dispatch(ADD_TO_CART(addCart))

// }
// const handleCart=(product:IProduct)=>{
 
// const productInCart =  cartProducts.find((item)=> item.productId === product?._id  )

// console.log("Product In cart", productInCart)


//     const addCart = {
//     productId: product?._id,
//     productName: product?.title,
//     productCategory: product?.category?.productCategory,
//     price:product?.price,
//     productImage:product?.prodImg[0],
//     qty: productInCart? productInCart.qty+1:1  ,
//   }
//   addToCart(addCart)
//   console.log(addCart)
//   dispatch(ADD_TO_CART(addCart))

  

// }
const handleCart = (product: IProduct, prodId: string) => {
  const productInCart = cartProducts.find(item => item.productId === product._id);

  const addCart = 
  productInCart
    ? { ...productInCart, qty: productInCart.qty + 1 } // Update quantity if product already in cart
    : {
        productId: product?._id,
        productName: product?.title,
        productCategory: product?.category?.productCategory,
        price: product?.price,
        productImage: product?.prodImg[0],
        qty: 1, // Add new product with quantity 1
      };
    addToCart(addCart,dispatch, setLoader)
  // dispatch(ADD_TO_CART(addCart));
};



  return (
    <div className='container'>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pt-20 gap-10 justify-center'>
        {allProducts.map((item) => {
          const { productCategory } = item.category;
          return (
            // <div key={item.slug} className='mt-5 p-3 rounded-xl shadow-lg'>
            //   <div className='bg-warning p-0 m-0 flex justify-content-center'>
              
            //       <Image
            //       className='min-h-[266px]  cursor-pointer'
            //       alt='img'
            //       src={urlForImage(item.prodImg[0])}
            //       width={250}
            //       height={100}
            //       onClick={() => handleProductClick(productCategory, item.slug)}
            //     />
              
            //   </div>
            //   <div className='pt-2  flex justify-between items-center'>
            //     <div>
            //       <h2 className='text-base capitalize font-medium'>{item.title}</h2>
            //       <h3 className='font-bold'>{item.price}</h3>
            //     </div>
            //     <div
            //       style={{
            //         width: "32px",
            //         height: "32px",
            //         borderRadius: "8px",
            //         cursor: "pointer",
            //       }}
            //       className='flex justify-center items-center border border-black'
            //       // onClick={()=> dispatch(ADD_TO_CART({
            //       //   payload: 
            //       // }))}
            //       onClick={()=> {handleCart(item,item._id);  }}
            //     >
            //       <ShoppingCart size={18} />
            //     </div>
            //   </div>
            // </div>
            <div key={item.slug} className='mt-5 p-3 rounded-xl shadow-lg overflow-hidden'> {/* Added overflow-hidden */}
  <div className=' p-0 m-0 flex justify-center'> {/* Changed justify-content-center to justify-center */}
    <Image
      className='min-h-[266px] cursor-pointer' 
      alt='img' 
      src={urlForImage(item.prodImg[0])} 
      width={250} 
      height={100} 
      onClick={() => handleProductClick(productCategory, item.slug)} 
    />
  </div>
  <div className='pt-2 flex justify-between items-center'>
    <div>
      <h2 className='text-base capitalize font-medium'>{item.title}</h2>
      <h3 className='font-bold'>${item.price}</h3>
    </div>
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      className='flex justify-center items-center border border-black'
      onClick={() => { handleCart(item, item._id); }}
    >
        {/* { loader? <LoaderCircle/> :  <ShoppingCart size={18} />} */}
        <ShoppingCart size={18} />
    </div>
  </div>
</div>

          )
        })}
      </div>
    </div>
  )
}

export default AllProducts


