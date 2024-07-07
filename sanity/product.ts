import { title } from "process";
import { defineField } from "sanity";

export const products = {
    name:"product",
    type:"document",
    title:"Product",
    fields:[{
        name:"title",  //jb ham data fetch krte to json format me data aata hai (name ki value as a key use hoti hai)
        title:"Title", 
        type:"string"
    },
  {
    name:"description",
    title: 'Product description',
    type:'string',
  },
  {
    name:"price",
    title:"Price",
    type:"string",
  },
  {
    name:"productImage",
    title:"Product Image",
    type:"array",
    of:[{
      name:"image",
      title:"Product Image",
      type:"image",
    }]
  },
  defineField({
    name:"category",
    type:"reference",
    title:"Product category",
    to:[{type:"category"}]
  })
]
}

//product [{
// title: jacket,
//  }]