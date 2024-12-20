
// stripe: Used in your server-side API to create a checkout session.
// @stripe/stripe-js: Used in the client to redirect the user to the Stripe checkout.

import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "@stripe/stripe-js";
import { urlForImage } from "../../../../../sanity/lib/image";



// export default async function handler(req:NextRequest) {
//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [
//             { shipping_rate: 'shr_1MJIEoHbmXqvpyhdyi5WNQHl' },
//             { shipping_rate: 'shr_1MJIGgHbmXqvpyhdQCdPgK8F' }
//         ],
//         line_items: req.body.map((item) => {
//           const img = item.image[0].asset._ref;
//           const newImage = img.replace('image-', 'https://cdn.sanity.io/images/dow10h3v/production/').replace('-png', '.png');

//           return {
//             price_data: { 
//               currency: 'usd',
//               product_data: { 
//                 name: item.name,
//                 images: [newImage],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled:true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }
//         }),
//         success_url: `${req.headers.origin}/successPay`,
//         cancel_url: `${req.headers.origin}/cart`,
//       }
//       const session = await stripe.checkout.sessions.create(params);
      
//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// const stripe = require('stripe')(process.env.NEXT_SECRET_STRIPE_KEY);
// export const POST = async(request:NextRequest)=>{
//    const req = await request.json()
 
//    console.log("Request", req)
// }


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// console.log("Secret key",process.env.STRIPE_SECRET_KEY)
// export const POST = async (req: NextRequest) => {
//     console.log("This is api call")
//   try {
//     // Parse the body
//     const body = await req.json();
//      console.log("Body", body)
//     // Create Checkout Sessions from body params
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: body.map((item: any) => ({
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: item.productName, // Ensure this is coming from req.body
//           },
//           unit_amount: item.price * 100, // Stripe expects price in cents
//         },
//         quantity: item.qty,
//       })),
//       mode: 'payment',
//       success_url: `${req.headers.get('origin')}/?success=true`,
//       cancel_url: `${req.headers.get('origin')}/?canceled=true`,
//     });

//     return NextResponse.redirect(session.url, 303);
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
//   }
// };

export const POST = async (req: NextRequest) => {
  if (req.method === 'OPTIONS') {
    // Handle CORS preflight request
    return new NextResponse(null, {
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', // or specify a domain like 'http://localhost:3000'
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Parse the body
    const body = await req.json();
     console.log("Body", body)
    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
            images: [urlForImage(item.productImage)]
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      })),
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/paymentSuccess`, // Redirect to success page
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url }, {
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow the frontend origin
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, {
      status: err.statusCode || 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};