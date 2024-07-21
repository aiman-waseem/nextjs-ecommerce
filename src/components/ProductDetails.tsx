// "use client"
// import { getSingleProduct, IProduct } from '@/lib/ProductData'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import { urlForImage } from '../../sanity/lib/image'

// const ProductDetails = ({params}:{params: {category:string, slug:string}}) => {
//     const [product, setProduct] = useState<IProduct[]>({})
//     useEffect(()=>{
//         getSingleProduct(params.slug,setProduct )
//     },[])
//     console.log("object", product)
//   return (
//     <div className='container pt-20'>
//         {product.map((item)=> {
//             return(
           
//        <div className='  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center '>
              
//         <div className='bg-purple-400 p-3 mt-5 flex justify-center'>
//                <Image
//                   className='min-h-[266px]  cursor-pointer'
//                   alt='img'
//                   src={urlForImage(item.prodImg[0])}
//                   width={250}
//                   height={100}
//                 //   onClick={() => handleProductClick(productCategory, item.slug)}
//                 />
//         </div>
                  
//             <div className='bg-red-400 p-3'></div>      
             
//         </div>

//             )
//         })}
     
//     </div>
//   )
// }

// export default ProductDetails

"use client"
import { getSingleProduct, IProduct } from '@/lib/ProductData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { urlForImage } from '../../sanity/lib/image'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { ADD_TO_CART } from '@/reducer/reducer'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '@/app/store/hooks'

const ProductDetails = ({params}:{params: {category:string, slug:string}}) => {
    const [product, setProduct] = useState<IProduct|null>(null)
 const [quantity, setQuantity]= useState(1)
 const dispatch = useAppDispatch()
    useEffect(()=>{
        getSingleProduct(params.slug, setProduct)
    },[])

    console.log("object", product)

    // if (!product) {
    //     return <div>Loading...</div>
    // }
   const handleAddToCart = () =>{
    const addCart = {
           productId: product?._id,
          productName: product?.title,
          productCategory: product?.category,
          price:product?.price,
          productImage:product?.prodImg,
          qty: quantity,
        }
        dispatch(ADD_TO_CART(addCart))
      
   }

    return (
        <div className='container pt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center'>
                <div className=' mt-5 flex justify-center'>
                  {product?.prodImg[0] &&
                     <Image
                     className='min-h-[266px] cursor-pointer'
                     alt='img'
                     src={urlForImage(product?.prodImg[0])}
                     width={350}
                     height={200}
                 />
                  }
                </div>
                <div className=' mt-5  pt-2'>
                    <h1 className='text-3xl font-bold tracking-wider'>{product?.title}</h1>
                    {/* <p className='text-lg font-semibold'>{product?.price}</p> */}

                    {/* SELECT SIZE */}
                    <div className='pt-8' >
                    <p className='text-xl font-bold '> SELECT SIZE</p>
                    <ul  className=' text-xl text-gray-400 flex space-x-12 pt-2 font-bold'>
                       <li>S</li>
                       <li>M</li>
                       <li>L</li>
                       <li>XL</li>

                    </ul>
                </div>
                  {/* Quantity */}
                <div className='pt-8 flex items-center space-x-5'>
                    <p className='text-[1.22rem] font-bold'> Quantity:</p>
                     <div className='space-x-4 text-lg font-medium'>
                        <span
                        className='cursor-pointer'
                          onClick={()=> {quantity>1 && setQuantity(quantity-1)}}
                        > -</span>
                        <span>{quantity} </span>
                        <span className='cursor-pointer' onClick={()=>setQuantity(quantity+1)}> + </span>
                     </div>
                </div>

                   
                <h2 className='font-extrabold text-2xl pt-7'> {product?.price ? product.price * quantity : 'Loading...'}</h2>

                <div className='pt-7'>
                <Button className='bg-black rounded space-x-2  text-white p-4' variant={'default'}
                 onClick={handleAddToCart}
                >
                    <ShoppingCart size={19} />
                    <span className='px-1 tracking-wide capitalize text-[1rem]'>
                    Add to Cart
                    </span>
                    </Button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDetails
