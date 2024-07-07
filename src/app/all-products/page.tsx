"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import { IProduct,  getAllProductsData } from '@/lib/ProductData'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'

const AllProducts =   () => {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(()=>{
    getAllProductsData(setProducts)
  },[])
    // const allProductData: Product[] = await getAllProductsData()
    console.log("Client side prod dat", products)

    // console.log( "Client data", allProductData)
  return (
    <div className='container'>
      <div className='grid lg:grid-cols-[auto,auto,auto] md:grid-cols-3 gap-32 justify-center '>
      {products.map((item)=>(
              //    <Card className='bg-purple-200 my-3'>
              //    <CardHeader>
              //     <Image alt='img' src={urlForImage(item.prodImg[0])} width={200} height={300} />
              //      {/* <CardTitle>Card Title</CardTitle> */}
              //      <CardDescription>Card Description</CardDescription>
              //    </CardHeader>
              //    <CardContent>
              //      <p>Card Content</p>
              //    </CardContent>
              //    <CardFooter>
              //      <p>Card Footer</p>
              //    </CardFooter>
              //  </Card>
            
                <div className='mt-20  p-3'>
                  <Image className='max-h-[150px] object-fit' alt='img'  src={urlForImage(item.prodImg[0])} width={200} height={300} />
                    <h2> {item.title} </h2>
                    <h3> {item.price} </h3>

              </div>
            
      ))}
  
 
    </div>
    </div>
   
  
  )
}

export default AllProducts
