
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

export const getAllProductsData = async (setProducts) =>{
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

