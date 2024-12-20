import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col  mt-[3rem]   p-6'>
      <div className='container-fluid'>
        <div className='container'>
        <div className='grid grid-cols-4  '>
        <div className='logo  ' >
          <Image src="/assets/file.png"  alt='logo' width={100} height={100} />
          <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='icon-container flex gap-1 pt-3'>
         <div><Facebook /></div>
         <div><Twitter /></div>
         <div> <Linkedin/> </div>
       </div>
        </div>
       

         <div className=' footer-section'> 
           <strong className='text-lg'> Company </strong> 
            {["About","Terms Of Use","Privacy policy","How it Works?","Contact Us"].map((item,indx)=>(
              <Link key={indx} href="#" className='py-2'> {item} </Link>
            ))} 
         </div>
         <div className=' footer-section'>
         <strong className='text-lg'> Support </strong>  
         {["Support Carrer","24h Service","Quick Chat"].map((item,index)=>(
              <Link key={index} href="#" className='py-2'> {item} </Link>
            ))} 
         </div>
         <div className=' footer-section'>
         <strong className='text-lg'> Contact </strong>
         {["Whatsapp","24h Service"].map((item,index)=>(
              <Link key={index} href="#" className='py-2'> {item} </Link>
            ))}    
         </div>
        
       
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
