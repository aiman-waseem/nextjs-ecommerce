"use client"
import { getAllProductsData, IProduct } from '@/lib/ProductData'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import { useAppSelector } from '../store/hooks'


// params is an object with key category of type string
const Category = ({params}:{params:{category:string}}) => {
    const [products, setProducts] = useState<IProduct[]>([])

    //getting product data from reducer
    const allProducts = useAppSelector((state) => state.cart.products) 

    // useEffect(() => {
    //     getAllProductsData(setProducts)
    //   }, [])

 const filterCategory = allProducts.filter(item => item.category.productCategory.toLowerCase() === params.category.toLowerCase())
  console.log("Params",params)
    //   console.log(" FILTER Products from category page", filterCategory)
  return (
    <div className='container'>
      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pt-20 gap-10 justify-center'>
        {filterCategory.map((item) => {
          const { productCategory } = item.category;
          return (
            <div key={item.slug} className='mt-5 p-3 rounded-xl shadow-lg'>
              <Link href={`/${productCategory}/${item.slug}`}>
                <Image
                  className='min-h-[266px]  cursor-pointer'
                  alt='img'
                  src={urlForImage(item.prodImg[0])}
                  width={250}
                  height={100}
                //   onClick={() => handleProductClick(productCategory, item.slug)}
                />
              </Link>
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

export default Category
