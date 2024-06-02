import React from 'react' 
import ReservationForm from './ReservationForm';

export const metadata = {
    title: 'Create a reservation',
    description: 'Create a reservation for car.'
}


const page = () => {
   
  return (
    <main className='py-10 md:py-14 lg:py-20'>
        <div className="container"> 
            <div className="py-10 md:py-14 lg:py-20 px-8 lg:px-10 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url('/global/user-dashbard-image.webp')`,boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.75'}}>
                <h1 className="h2 text-white text-center">Create Reservations</h1>  
            </div>
        </div>

        <div className="container">
            <ReservationForm />
            
        </div>
        

    </main>
  )
}

export default page
