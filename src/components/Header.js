'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {

  const { data:session } = useSession();

  const [showMenu, setShowMenu] = useState(false);
    const [fixMenu, setFixMenu] = useState(false);

  useEffect(()=>{
    function stickyMenuHandler(){
        const scrollH = window.scrollY;
   
        if (scrollH > 500) {
            setFixMenu(true);
        } else {
            setFixMenu(false);
        }
    }
    window.addEventListener('scroll', stickyMenuHandler);
    stickyMenuHandler();
}, []);

  if (session) { 
    return (
      <nav className='py-3'>
        <div className="container flex justify-between items-center">
          <Link href={'/'} className='inline-block'>
            <Image src={'/auto-fast-logo.webp'} alt='logo' width={120} height={53} />
          </Link>
  
          <ul className="inline-flex">
             
            <li>
              <Link href={'/auth/login'} className='p-3'>Profile</Link>
            </li>
            <li>
              <button onClick={()=>signOut()} className='p-3'>Log out</button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  return (
    <nav className={`py-3 z-50 relative ${fixMenu ? 'sticky top-0 left-0 w-full bg-brand nav__sticky' : ''}`}>
      <div className="container flex justify-between items-center">
        <Link href={'/'} className='inline-block'>
          <Image src={'/auto-fast-logo.webp'} alt='logo' width={120} height={53} style={{filter: 'contrast(0) brightness(10)'}} />
        </Link>

        <ul className="inline-flex">
          <li>
            <Link href={'/'} className='p-3 text-white uppercase text-[15px] hover:text-yellow-500 hover:underline' style={{letterSpacing:'2px'}}>About Us</Link>
          </li>
          <li>
            <Link href={'/'} className='p-3 text-white uppercase text-[15px] hover:text-yellow-500 hover:underline' style={{letterSpacing:'2px'}}>Help</Link>
          </li>
          <li>
            <Link href={'/'} className='p-3 text-white uppercase text-[15px] hover:text-yellow-500 hover:underline' style={{letterSpacing:'2px'}}>Blogs</Link>
          </li> 
          <li>
            <Link href={'/login'} className='p-3 text-dark border border-white bg-white rounded-lg uppercase text-[15px] hover:text-white hover:bg-transparent' style={{letterSpacing:'2px'}}>Login</Link> 
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
