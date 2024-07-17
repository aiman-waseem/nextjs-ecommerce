
  import ProductDetails from '@/components/ProductDetails';
import React from 'react'
import { category } from '../../../../sanity/category';
  
  const page = ({params}:{params: {category:string, slug:"string"}}) => {
    console.log("PARAMS", params)
    return(
    
       <>
         
            {/* <h1 className='font-extrabold'> {params.category}{params.slug} </h1> */}
            <ProductDetails params={params} />
       </>
      
   
    )
    

  }
  
  export default page
  