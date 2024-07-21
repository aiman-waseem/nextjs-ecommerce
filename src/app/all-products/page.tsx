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
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ADD_TO_CART } from '@/reducer/reducer'

// The `state` arg is correctly typed as `RootState` already

const AllProducts = () => {
  const router = useRouter()
  const allProducts = useAppSelector((state) => state.cart.products)
const dispatch = useAppDispatch()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAllProductsData(setProducts,dispatch)
    

  }, [])
    console.log("Products from reducer", allProducts)
  const handleProductClick = (category:string, productName:string) => {
    router.push(`/${category}/${productName}`)
  }
const handleCart=(product:IProduct)=>{
  const addCart = {
    productId: product?._id,
    productName: product?.title,
    productCategory: product?.category,
    price:product?.price,
    productImage:product?.prodImg,
    qty:1,
  }
  dispatch(ADD_TO_CART(addCart))
}
  return (
    <div className='container'>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pt-20 gap-10 justify-center'>
        {allProducts.map((item) => {
          const { productCategory } = item.category;
          return (
            <div key={item.slug} className='mt-5 p-3 rounded-xl shadow-lg'>
              <div>
                <Image
                  className='min-h-[266px]  cursor-pointer'
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
                  <h3 className='font-bold'>{item.price}</h3>
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  className='flex justify-center items-center border border-black'
                  // onClick={()=> dispatch(ADD_TO_CART({
                  //   payload: 
                  // }))}
                  onClick={()=> handleCart(item)}
                >
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


