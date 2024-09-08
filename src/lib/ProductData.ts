
import React from 'react'
import { client } from '../../sanity/lib/client'
import { category } from '../../sanity/category'
import {  GET_PRODUCTS  } from '@/reducer/reducer'
import { useAppDispatch } from '@/app/store/hooks';

//  *[_type == "product"]{title,price,description,category,"prodImg": productImage[0].asset._ref}
//*[_type == "product"&& title == 'Black jacket']{title,price,description,category,"prodImg":productImage[].asset._ref}
// *[_type == "product"&& title == 'Black jacket']{title,price,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}

export interface IProduct {
  _id: string,
    title: string;
    price: number;
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


export const getAllProductsData = async (setProducts:ISetProduct,dispatch:any ) =>{
// const dispatch = useAppDispatch()

    const query = `*[_type == "product"]{_id,title,price,"slug":slug.current,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}`
    try {
        const data = await client.fetch(query)
        console.log("Get All Product Data", data)
        // setProducts(data)
        if (data){
          dispatch(GET_PRODUCTS(data))
        }
        return data;
    } catch (error) {
        console.log("Product Error", error)
    }
}
// dispatch({
//   type: "GET_PRODUCTS",
//   payload: response.data.data,
// });
export const getSingleProduct = async (slug:string,setProduct:ISetSingleProduct ) =>{
    const query = `*[_type == "product" && slug.current == '${slug}']{_id,title,price,"slug":slug.current,description,"category":category->{productCategory},"prodImg":productImage[].asset._ref}`
     try {
      const res = await client.fetch(query)
      setProduct(res[0])  // extracting object from array, setting object in state instead of array
      console.log("Slug data", res[0])
     } catch (error) {
      console.log(error)
     }
}


