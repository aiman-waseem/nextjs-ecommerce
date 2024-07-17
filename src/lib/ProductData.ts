
import React from 'react'
import { client } from '../../sanity/lib/client'
import { category } from '../../sanity/category'

//  *[_type == "product"]{title,price,description,category,"prodImg": productImage[0].asset._ref}
//*[_type == "product"&& title == 'Black jacket']{title,price,description,category,"prodImg":productImage[].asset._ref}
// *[_type == "product"&& title == 'Black jacket']{title,price,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}

export interface IProduct {
    title: string;
    price: string;
    description: string;
    category: {
      productCategory: string;
    };
    prodImg: any;
    slug:string
  }

// setProduct is a setter function 
// (parameter: Type, ...) => ReturnType (general syntax of func)
// setProduct is a function which take parameter named product of type IProduct and return type is void 
type ISetProduct = (product: IProduct[])=> void 
type ISetSingleProduct = (product: IProduct)=> void 


export const getAllProductsData = async (setProducts:ISetProduct) =>{
    const query = `*[_type == "product"]{title,price,"slug":slug.current,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}`
    try {
        const data = await client.fetch(query)
        console.log("Get All Product Data", data)
        setProducts(data)
        return data;
    } catch (error) {
        console.log("Product Error", error)
    }
}

export const getSingleProduct = async (slug:string,setProduct:ISetSingleProduct ) =>{
    const query = `*[_type == "product" && slug.current == '${slug}']{title,price,"slug":slug.current,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}`
     try {
      const res = await client.fetch(query)
      setProduct(res[0])  // extracting object from array, setting object in state instead of array
      console.log("Slug data", res[0])
     } catch (error) {
      console.log(error)
     }
}


