'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession, getSession } from 'next-auth/react';
import Router, { useRouter } from 'next/navigation';

// export const metadata = {
//     title: 'User Dashboard',
//     description: ''
// }
const page = () => {
    const {data:session, status} = useSession();

    const router = useRouter();

    if (status.ok) 
    {
        return <div className="p5">Loading</div>
    }
    else if (session) 
    {
        
        return (
          <main className='pt-5 pb-14 min-h-[90vh]'>
              <div className="container"> 
                  <div className="py-10 md:py-14 lg:py-20 px-8 lg:px-10 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url('/global/user-dashbard-image.webp')`,boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.75'}}>
                      <div className="flex flex-wrap justify-between items-center">
                          <h1 className="h2 text-white">Reservations</h1>
                          <Link href={'/user/reservation'} className='text-base md:text-lg px-5 py-2 sm:py-3 bg-brand text-white rounded-[4px] transition-all duration-200 hover:bg-[#b51c0e]'>Create Reservation</Link>
                      </div>
                  </div>
              </div>
      
              <div className="container mt-10">
                  <div className="p-8 text-center text-xl bg-white">
                      You have no reservations
                  </div>
      
                  <div className="grid grid-cols-1 gap-7 mt-10">
                      {/* <div className="shadow-lg bg-white px-3 py-4 rounded-md">
                          <div className="flex flex-wrap">
                              <div className="w-[25%]">
                                  <Image src={'/global/suv.webp'} width={300} height={200} alt='car thumbnail' />
                              </div>
                              <div className="w-[75%] pl-5">
                                  <p className="text-xl font-semibold">Shuvrodeb Roy</p>
                                  <div className="flex text-stone-500">
                                      shuvro@gmail.com, 8801831265758
                                  </div>
                                  <ul className='mt-2'>
                                      <li className='text-sm text-black'>
                                          <strong className='text-[12px] font-semibold text-slate-500'>Date:</strong> 23-09-2023
                                      </li>
                                      <li className='text-sm text-black'>
                                          <strong className='text-[12px] font-semibold text-slate-500'>Time:</strong> 04:30 pm
                                      </li>
                                      <li className='text-sm text-black'>
                                          <strong className='text-[12px] font-semibold text-slate-500'>Pickup:</strong> test address
                                      </li>
                                      <li className='text-sm text-black'>
                                          <strong className='text-[12px] font-semibold text-slate-500'>Dropoff:</strong> test address
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div> */}
                      <div className="shadow-lg bg-white px-3 py-4 rounded-md border">
                          <div className="flex flex-wrap items-center">
                              <div className="w-[25%]">
                                  <Image src={'/global/sedan.webp'} width={300} height={100} alt='car thumbnail' className='w-full h-32 object-cover object-center' />
                              </div>
                              <div className="w-[75%] pl-5 flex">
                                  <div className="w-[30%]"> 
                                      <p className="text-xl font-semibold">Shuvrodeb Roy</p>
                                      <div className=" text-stone-500">
                                          shuvro@gmail.com, <br /> 8801831265758
                                      </div>
                                  </div>
                                  <div className="w-[20%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Date
                                      </div>
                                      <p className="text-base font-semibold">23 July, 2023 <br /> 04:30 pm</p>
                                  </div>
                                  <div className="w-[50%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Address
                                      </div>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                  </div>
                                   
                              </div>
                          </div>
                      </div>
                      <div className="shadow-lg bg-white px-3 py-4 rounded-md border">
                          <div className="flex flex-wrap items-center">
                              <div className="w-[25%]">
                                  <Image src={'/global/sedan.webp'} width={300} height={100} alt='car thumbnail' className='w-full h-32 object-cover object-center' />
                              </div>
                              <div className="w-[75%] pl-5 flex">
                                  <div className="w-[30%]"> 
                                      <p className="text-xl font-semibold">Shuvrodeb Roy</p>
                                      <div className=" text-stone-500">
                                          shuvro@gmail.com, <br /> 8801831265758
                                      </div>
                                  </div>
                                  <div className="w-[20%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Date
                                      </div>
                                      <p className="text-base font-semibold">23 July, 2023 <br /> 04:30 pm</p>
                                  </div>
                                  <div className="w-[50%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Address
                                      </div>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                  </div>
                                   
                              </div>
                          </div>
                      </div>
                      <div className="shadow-lg bg-white px-3 py-4 rounded-md border">
                          <div className="flex flex-wrap items-center">
                              <div className="w-[25%]">
                                  <Image src={'/global/sedan.webp'} width={300} height={100} alt='car thumbnail' className='w-full h-32 object-cover object-center' />
                              </div>
                              <div className="w-[75%] pl-5 flex">
                                  <div className="w-[30%]"> 
                                      <p className="text-xl font-semibold">Shuvrodeb Roy</p>
                                      <div className=" text-stone-500">
                                          shuvro@gmail.com, <br /> 8801831265758
                                      </div>
                                  </div>
                                  <div className="w-[20%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Date
                                      </div>
                                      <p className="text-base font-semibold">23 July, 2023 <br /> 04:30 pm</p>
                                  </div>
                                  <div className="w-[50%]">  
                                      <div className=" text-stone-500 mb-3">
                                          Address
                                      </div>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                      <p className="text-sm font-semibold">1602 Heritage Road, Fresno, CA, California</p>
                                  </div>
                                   
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
        )
    } 
    else 
    {

        return router.push('/auth/login');
    }
}

export default page
