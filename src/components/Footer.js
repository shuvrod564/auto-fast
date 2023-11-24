import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black pb-5 pt-6'>
      <div className="container flex flex-wrap items-center justify-between">
        <Link href={'/'} className='inline-block'>
            <Image src={'/auto-fast-logo.webp'} width={150} height={40} alt='logo' style={{filter: 'contrast(0) brightness(10)'}} />
        </Link>
        <ul className="inline-flex">
            <li className='mr-4 md:mr-5'><Link href={'/'} className='text-white'>Privacy Policy</Link></li>
            <li><Link href={'/terms'} className='text-white'>Terms & Conditions</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
