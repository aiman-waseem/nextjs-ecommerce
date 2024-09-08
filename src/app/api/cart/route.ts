import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuid} from "uuid"
import { cookies} from "next/headers";

export const GET = async(request:NextRequest)=>{
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({res})
  } catch (error) {
    return NextResponse.json({message: "Something went Wrong"})
  }
}

export const POST = async(request:NextRequest)=>{


    // Cookies ---> storage of browser
    // mjhe hr user ki unique id generate kr k browser me save krwani hai.Har browser k alag cookies hain
    const req = await request.json()
    const uid = uuid()
    const Cookies = cookies()
    const userId = cookies().get("user_id")?.value
    if (!cookies().has("user_id")){
        Cookies.set("user_id", uid)

    }
    // if(!userId){
    // Cookies.set("user_id", uid)
    // }

    try {
      const res = await db.insert(cartTable).values({
        // user_id: cookies().get("user_id")?.value as string ,
        user_id: userId  ,

        productId: req.productId,
        productName: req.productName,
        productCategory:req.productCategory,
        price: req.price,
        productImage:req.productImage,
        qty:req.qty,
        
    
      }).returning();
      // returning because jo prod data add kr rhe wo return me jaye
      return NextResponse.json({res})
    } catch (error) {
    return NextResponse.json({message: "Something went Wrong", error: error})
      
    }
  }