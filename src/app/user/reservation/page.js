'use client'
import React, { useState } from 'react'
import Select from 'react-select'

export const metadata = {
    title: 'Create a reservation',
    description: 'Create a reservation for car.'
}

const reservationType = [
    { value: 'Custom Trip', label: 'Custom Trip' },
    { value: 'Airport Pickup', label: 'Airport Pickup' },
    { value: 'Airport Drop Off', label: 'Airport Drop Off' },
    { value: 'Hourly Job', label: 'Hourly Job' },
]
const vechileType = [
    { value: 'Sedan', label: 'Sedan' },
    { value: 'SUV', label: 'SUV' },
]
const passengersSelect = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
]
const luggageSelect = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
]

const page = () => {
    const [reservation, setReservation] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [passengers, setPassengers] = useState('');
    const [luggage, setLuggage] = useState('');

    const handleReservationForm =(e)=>{
        e.preventDefault();
    }
  return (
    <main className='pt-5 pb-10'>
        <div className="container"> 
            <div className="py-10 md:py-14 lg:py-20 px-8 lg:px-10 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url('/global/user-dashbard-image.webp')`,boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.75'}}>
                <h1 className="h2 text-white text-center">Create Reservations</h1>  
            </div>
        </div>

        <div className="container">
            <div className="p-8 shadow bg-white">
                <form onSubmit={handleReservationForm} className='flex flex-wrap -mx-2'>
                    <div className="lg:w-[50%] px-2 mt-5">
                        <label htmlFor="what_type_reservation" className='block mb-1 text-[#444]'>What type of reservation?</label> 
                        <Select  options={reservationType} value={reservation} onChange={(event)=>setReservation(event)} />
                    </div>
                    <div className="lg:w-[50%] px-2 mt-5">
                        <label htmlFor="what_type_reservation" className='block mb-1 text-[#444]'>What vehicle?</label> 
                        <Select  options={vechileType} value={vehicle} onChange={(event)=>setVehicle(event)} />
                    </div>
                    <div className="lg:w-[25%] px-2 mt-5">
                        <label htmlFor="passengers" className='block mb-1 text-[#444]'>Passengers</label> 
                        <Select options={passengersSelect} value={passengers} onChange={(event)=>setPassengers(event)} />
                    </div>
                    <div className="lg:w-[25%] px-2 mt-5">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Luggage</label> 
                        <Select options={luggageSelect} value={luggage} onChange={(event)=>setLuggage(event)} />
                    </div>
                    <div className="lg:w-[25%] px-2 mt-5">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Time and date of your trip</label> 
                        <input type="date" className='form-control' />
                    </div>
                    <div className="lg:w-[25%] px-2 mt-5">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Time and date of your trip</label> 
                        <input type="time" className='form-control' />
                    </div>
                    
                    <div className="lg:w-[100%] px-2 mt-5">
                        <p className='text-lg font-semibold mt-4'>Where do you want to go?</p>
                    </div>
                    <div className="lg:w-[100%] px-2 mt-3">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Pickup</label> 
                        <input type="text" className='form-control' />
                    </div>
                    <div className="lg:w-[100%] px-2 mt-3">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Dropoff</label> 
                        <input type="text" className='form-control' />
                    </div>

                    <div className="lg:w-[100%] px-2 mt-5">
                        <p className='text-lg md:text-xl font-semibold mt-4'>Passenger Details</p>
                    </div>
                    <div className="lg:w-[40%] px-2 mt-3">
                        <label htmlFor="luggage" className='block mb-1 text-[#444]'>Name</label> 
                        <input type="text" className='form-control' />
                    </div>
                    <div className="lg:w-[30%] px-2 mt-3">
                        <label htmlFor="email" className='block mb-1 text-[#444]'>Email</label> 
                        <input type="text" className='form-control' />
                    </div>
                    <div className="lg:w-[30%] px-2 mt-3">
                        <label htmlFor="email" className='block mb-1 text-[#444]'>Phone</label> 
                        <input type="text" className='form-control' />
                    </div>
                    <div className="lg:w-[100%] px-2 mt-3">
                        <label htmlFor="addional_infomation" className='block mb-1 text-[#444]'>Addional infomation</label> 
                        <textarea name="addional_infomation" id="addional_infomation" cols="30" rows="4" className='form-control'></textarea>
                    </div>
                    <div className="text-center lg:w-[100%] px-2 mt-6">
                        <button className="text-base uppercase px-8 py-2 bg-brand text-white rounded-[4px] transition-all duration-200 hover:bg-[#135ca5]">Submit</button>
                    </div>
                </form>

            </div>
        </div>
        

    </main>
  )
}

export default page
