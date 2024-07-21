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
    name:"slug",
    title: 'slug',
    type:'slug',
    options:{
      source:'title'
  }
  },
  {
    name:"price",
    title:"Price",
    type:"number",
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
  // {
  //   name: 'availableSizes',
  //   title: 'Available Sizes',
  //   type: 'array',
  //   of: [{
  //     type: 'string',
  //     options: {
  //       list: [
  //         { title: 'Small', value: 'small' },
  //         { title: 'Medium', value: 'medium' },
  //         { title: 'Large', value: 'large' }
  //       ]
  //     }
  //   }],
  //   // No validation property makes this field optional
  // },
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