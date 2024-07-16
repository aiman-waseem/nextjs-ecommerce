import React from 'react'
import HomeStyle from "@/style/home.module.css"

const Promotion = () => {
  return (
    <div className='mt-12 mb-[100px]'>
        {/* Heading */}
      <div className='text-center mb-10 '>
        <h1 className='text-black scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl'>
            Our Promotions
        </h1>
       <div className='p-0 m-0 flex justify-center mt-1'>
       <hr className='w-16 h-1 rounded-full bg-pink-400 inline-flex '/>
       </div>

       <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-[2rem]'>
        <div className={`  min-h-[20rem] p-3  ${HomeStyle.promo1}`}>
         <div className='hero '>
         <div className='hero-overlay  h-[20rem] bg-opacity-60'></div>
          <div className='hero-content  text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-5xl  z-1 font-bold '>Get upto 60% off</h1>
            </div>
          </div>
        </div>
         </div>
        <div className={` min-h-[20rem]   ${HomeStyle.promo2}`}></div>
        <div className={` min-h-[20rem] p-3 ${HomeStyle.promo1}`}></div>


       </div>
     
      </div>
    </div>
  )
}

export default Promotion
