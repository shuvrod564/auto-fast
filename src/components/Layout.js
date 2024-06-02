import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { usePathname } from 'next/navigation';

function Layout({children}) {

      // console.log(session);
  const routerpath = usePathname();
  console.log(routerpath);

  if(routerpath === '/login' || routerpath === '/signup') {
    return (
      <> 
       
          {children} 
      </>
    )
  }

  return (
    <>
         <Header />
          {children}
          <Footer />
    </>
  )
}

export default Layout