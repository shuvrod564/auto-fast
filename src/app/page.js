import Image from "next/image";
import Link from "next/link";
 
export const metadata = {
  title: 'Auto Fast Car Reservation App',
  description: ''
}

export default function Home() {
  return (
    <main className="">
        <div className="-mt-20">
          <div className="container-fluid relative rounded-xl overflow-hidden">
            <Image
              src="/banners/hero-banner-01.webp"
              width={1600} height={500}
              alt="banner"
              className="w-full h-screen object-cover object-center"
            />
            {/* <div className="absolute top-0 left-0 w-full h-full z-10" style={{background: 'linear-gradient(134deg, rgba(71, 71, 215, 0.57) 2.15%, rgba(8, 129, 92, 0.00) 100%)'}}></div>
            <div className="absolute top-0 left-0 w-full h-full z-20" style={{background: 'rgba(71, 71, 215, 0.84)',backgroundBlendMode: 'multiply'}}></div> */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-center">
              <div className="container"> 
                <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold inline-block py-2 text-white capitalize">
                  Find your next <br /> trip vehicles</h1>
              </div>
            </div>
          </div> 
        </div>


        <div className="py-10">
          <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
              <div className=" bg-no-repeat bg-cover bg-center relative px-6 pb-6 pt-10 md:pt-14 lg:pt-20" style={{ backgroundImage: `url("/info/info-01.webp")` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#3e3ecccf]"></div>
                <div className="relative z-20"> 
                  <h2 className="text-white text-xl sm:text-2xl md:text-2xl capitalize font-bold mb-2">Flexible rentals</h2>
                  <p className="text-white mb-3">Cancel or change most bookings for free up to 48 hours before pick-up</p>
                  <Link href={'/'} className="px-3 py-2 font-medium bg-[#8F47D7] text-white inline-block uppercase text-sm rounded-sm transition-all duration-200 hover:bg-red-700">Book Now</Link>
                </div>
              </div>
              
              <div className=" bg-no-repeat bg-cover bg-center relative px-6 pb-6 pt-10 md:pt-14 lg:pt-20" style={{ backgroundImage: `url("/info/info-02.webp")` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#3e3ecccf]"></div>
                <div className="relative z-20"> 
                  <h2 className="text-white text-xl sm:text-2xl md:text-2xl capitalize font-bold mb-2">No hidden fees</h2>
                  <p className="text-white mb-3 min-h-[3rem]">Know exactly what you're paying</p>
                  <Link href={'/'} className="px-3 py-2 font-medium bg-[#8F47D7] text-white inline-block uppercase text-sm rounded-sm transition-all duration-200 hover:bg-red-700">Book Now</Link>
                </div>
              </div>
              
              <div className=" bg-no-repeat bg-cover bg-center relative px-6 pb-6 pt-10 md:pt-14 lg:pt-20" style={{ backgroundImage: `url("/info/info-03.webp")` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-[#3e3ecccf]"></div>
                <div className="relative z-20"> 
                  <h2 className="text-white text-xl sm:text-2xl md:text-2xl capitalize font-bold mb-2">Price Match Guarantee</h2>
                  <p className={`text-white mb-3 `}>Found the same deal for less? We’ll match the price.</p>
                  <Link href={'/'} className="px-3 py-2 font-medium bg-[#8F47D7] text-white inline-block uppercase text-sm rounded-sm transition-all duration-200 hover:bg-red-700">Book Now</Link>
                </div>
              </div>
               
            </div>
          </div>
        </div>


        {/* How It Works */}
        <section className="py-8 sm:py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <div className="left_-content">
                <p className="text-base uppercase text-gray-950 font-medium mb-2">How it works</p>
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-4 text-black">Easiest way to reserve a car</h2>
                <Image src={'/info/how-it-works.webp'} alt="banner image" width={580} height={375} />
              </div>
              <div className="">
                <div className="flex mb-4 lg:mb-9">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-rose-600 text-white text-2xl font-bold">01</div>
                  <div className="w-[calc(100%-4.5rem)] ml-auto">
                    <h3 className="text-xl md:text-2xl font-medium text-[#333] mb-2">Choose Location</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio quidem excepturi sapiente, cum velit?</p>
                  </div>
                </div>
                <div className="flex mb-4 lg:mb-9">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-rose-600 text-white text-2xl font-bold">02</div>
                  <div className="w-[calc(100%-4.5rem)] ml-auto">
                    <h3 className="text-xl md:text-2xl font-medium text-[#333] mb-2">Pick your Preferred Car </h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio quidem excepturi sapiente, cum velit?</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-rose-600 text-white text-2xl font-bold">03</div>
                  <div className="w-[calc(100%-4.5rem)] ml-auto">
                    <h3 className="text-xl md:text-2xl font-medium text-[#333] mb-2">Book Schedule </h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio quidem excepturi sapiente, cum velit?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}

        {/* Payment Accepts */}
        <div className="py-8 md:py-12">
          <div className="container">
            <div className="bg-white p-8">
              <h2 className="text-center text-xl sm:text-2xl md:text-2xl lg:text-4xl capitalize font-semibold mb-5 sm:mb-8">AUTO FAST ACCEPTS</h2>

              <div className="grid lg:grid-cols-5 gap-3">
                <div className="shadow-md border border-gray-100 hover:shadow-lg">
                  <Image src={'/cards/mastercard.webp'} alt="card" width={190} height={95} />
                </div>
                <div className="shadow-md border border-gray-100 hover:shadow-lg">
                  <Image src={'/cards/visa.webp'} alt="card" width={190} height={95} />
                </div>
                <div className="shadow-md border border-gray-100 hover:shadow-lg">
                  <Image src={'/cards/jcb.webp'} alt="card" width={190} height={95} />
                </div>
                <div className="shadow-md border border-gray-100 hover:shadow-lg">
                  <Image src={'/cards/sepa.webp'} alt="card" width={190} height={95} />
                </div>
                <div className="shadow-md border border-gray-100 hover:shadow-lg">
                  <Image src={'/cards/yandex.webp'} alt="card" width={190} height={95} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Accepts */}

        {/* promo wrapper */}
        <div className="py-10">
          <div className="container">
            <div className="p-8 py-20 bg-zinc-800 bg-no-repeat bg-center relative" style={{ backgroundImage: `url('/info/promo-bg-image.webp')` }}>
              <div className="absolute top-0 left-0 w-full h-full bg-[#bc1317d4]"></div>
              <div className="relative z-10 text-center"> 
                <h2 className="text-3xl font-semibold mb-3 text-white">Create a new reservation for your next trip to Auto Fast</h2>
                <p className="text-xl text-white mb-10">Reservations must be made 24 hours in advance*</p>
                <Link href={'/'} className="inline-flex items-center py-4 px-6 bg-white text-black text-xl uppercase rounded-md border-2 border-white transition-all duration-300 hover:bg-gray-50 hover:text-black">
                  <Image src="/car.svg" width={60} height={24} alt="car" />
                  <span className="pl-3">Create Now </span>
                
                </Link>


              </div>
            </div>
          </div>
        </div>
        {/* promo wrapper */}

    </main>
  )
}
