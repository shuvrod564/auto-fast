'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

const Header = () => {

  const routerpath = usePathname();

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
    <nav className={`py-3 z-50 relative ${fixMenu ? 'sticky top-0 left-0 w-full bg-brand nav__sticky' : ''} ${routerpath === '/user/reservation' && 'sticky top-0 left-0 w-full bg-white nav__sticky'}`}>
      <div className="container flex justify-between items-center">
        <Link href={'/'} className='inline-block'>
          <Image 
            src={'/auto-fast-logo.webp'} 
            alt='logo'  width={120} height={53}  
            style={{filter:  routerpath === '/user/reservation' ? '' :  ' contrast(0) brightness(10)'}} 
          />
        </Link>

        <ul className="hidden lg:inline-flex gap-x-6">
          <li>
            <Link href={'/'} className={`p-3 uppercase hover:underline text-[15px] ${routerpath === '/user/reservation' ? ' text-slate-900 hover:text-yellow-500' :  'text-white hover:text-yellow-500'}`} style={{letterSpacing:'2px'}}>About Us</Link>
          </li>
          <li>
            <Link href={'/'} className={`p-3 uppercase hover:underline text-[15px] ${routerpath === '/user/reservation' ? ' text-slate-900 hover:text-yellow-500' :  'text-white hover:text-yellow-500'}`} style={{letterSpacing:'2px'}}>Help</Link>
          </li>
          <li>
            <Link href={'/'} className={`p-3 uppercase hover:underline text-[15px] ${routerpath === '/user/reservation' ? ' text-slate-900 hover:text-yellow-500' :  'text-white hover:text-yellow-500'}`} style={{letterSpacing:'2px'}}>Blogs</Link>
          </li> 
          <li>
            <Link href={'/login'} className={`p-3 text-dark border rounded-lg uppercase text-[15px] ${routerpath === '/user/reservation' ? ' border-red-400 bg-red-400 text-white hover:text-white hover:bg-red-800 hover:border-red-800' : 'border-white bg-white hover:text-white hover:bg-transparent'}`} style={{letterSpacing:'2px'}}>Login</Link> 
          </li>
        </ul>
        <button className="text-3xl lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8m0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8"></path></svg>
        </button>
      </div>
    </nav>
  )
}

export default Header
