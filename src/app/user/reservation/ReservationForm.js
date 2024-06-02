'use client'
import React, { useState } from 'react'
import Select from 'react-select'

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
function ReservationForm() {
    const [reservation, setReservation] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [passengers, setPassengers] = useState('');
    const [luggage, setLuggage] = useState('');
 

    return (
        <div className="p-8 shadow bg-white rounded-lg overflow-hidden">
            <form lassName='flex flex-wrap -mx-2'>
                <div className="lg:w-[50%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="what_type_reservation" className='block mb-1 text-[#444]'>What type of reservation?</label>
                    <Select options={reservationType} value={reservation} onChange={(event) => setReservation(event)} />
                </div>
                <div className="lg:w-[50%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="what_type_reservation" className='block mb-1 text-[#444]'>What vehicle?</label>
                    <Select options={vechileType} value={vehicle} onChange={(event) => setVehicle(event)} />
                </div>
                <div className="lg:w-[25%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="passengers" className='block mb-1 text-[#444]'>Passengers</label>
                    <Select options={passengersSelect} value={passengers} onChange={(event) => setPassengers(event)} />
                </div>
                <div className="lg:w-[25%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Luggage</label>
                    <Select options={luggageSelect} value={luggage} onChange={(event) => setLuggage(event)} />
                </div>
                <div className="lg:w-[25%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Time and date of your trip</label>
                    <input type="date" className='form-control' />
                </div>
                <div className="lg:w-[25%] sm:w-1/2 w-full px-2 mt-5">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Time and date of your trip</label>
                    <input type="time" className='form-control' />
                </div>

                <div className="w-full px-2 mt-5">
                    <p className='text-lg font-semibold mt-4'>Where do you want to go?</p>
                </div>
                <div className="w-full px-2 mt-3">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Pickup</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="w-full px-2 mt-3">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Dropoff</label>
                    <input type="text" className='form-control' />
                </div>

                <div className="w-full px-2 mt-5">
                    <p className='text-lg md:text-xl font-semibold mt-4'>Passenger Details</p>
                </div>
                <div className="lg:w-[33%] sm:w-1/2 w-full px-2 mt-3">
                    <label htmlFor="luggage" className='block mb-1 text-[#444]'>Name</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="lg:w-[33%] sm:w-1/2 w-full px-2 mt-3">
                    <label htmlFor="email" className='block mb-1 text-[#444]'>Email</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="lg:w-[33%] sm:w-1/2 w-full px-2 mt-3">
                    <label htmlFor="email" className='block mb-1 text-[#444]'>Phone</label>
                    <input type="text" className='form-control' />
                </div>
                <div className="w-full px-2 mt-3">
                    <label htmlFor="addional_infomation" className='block mb-1 text-[#444]'>Addional infomation</label>
                    <textarea name="addional_infomation" id="addional_infomation" cols="30" rows="4" className='form-control'></textarea>
                </div>
                <div className="text-center w-full px-2 mt-6">
                    <button className="text-base uppercase px-8 py-2 bg-brand text-white rounded-[4px] transition-all duration-200 hover:bg-[#135ca5]">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReservationForm