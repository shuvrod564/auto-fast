'use client'

import { signIn } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginForm = () => {
 
    const router = useRouter()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailerr, setEmailerr] = useState('');
    const [passworderr, setPassworderr] = useState('');

    // worng credential state
    const [credentialerror, setCredentialerror] = useState('');


    const submitLoginForm = async (event)=>{
        event.preventDefault();

        // email validation
        if (email==='') {
            setEmailerr('Email cannot be blank.')
        }  else {
            setEmailerr('') 
        } 
        // password validation
        if (password==='') {
            setPassworderr('Password cannot be blank.')
        } else {
            setPassworderr('') 
        }

        // try {
        //   const result = await signIn('credentials', {
        //     redirect: false,
        //     email,
        //     password,
        //   })
          
        //   if (result) {
        //     // console.log(login);
        //     router.push('/user')
        //   } 

        // } catch (error) {
        //   console.log('login error:-', error)
        // }

        // if(res.ok) {
        //   router.push('/user'); 
        // } else {
        //   setCredentialerror('Worng Credential!')
        // }
 
    }



  return (
    <form onSubmit={submitLoginForm}>
      <h1 className="h2 mb-5">Log in</h1>
      <div className="mb-4">
        <label htmlFor="user_name" className='block text-base sm:text-lg font-sans font-semibold mb-2'>User Name</label>
        <input 
            type="text" className='form-control' id='user_name' 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
        />
        { emailerr && <p className='text-sm text-red-600 pt-1'>{emailerr}</p> }
      </div>
      <div className="mb-6">
        <label htmlFor="password" className='block text-base sm:text-lg font-sans font-semibold mb-2'>Password</label>
        <input 
            type="text" className='form-control' id='password' 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
        />
        { passworderr && <p className='text-sm text-red-600 pt-1'>{passworderr}</p> }
      </div>
      {
        credentialerror ?? <div className='text-red-500 p-8 text-center '>{credentialerror}</div>
      }
      <div className="flex justify-between">
        <button type='submit' className="text-base px-5 py-2 bg-[#1976D2] text-white rounded-[4px] transition-all duration-200 hover:bg-[#135ca5]">Log In</button>
        <Link href={'/'} className="text-base px-5 py-2 border border-[#1976D2] text-[#1976D2] rounded-[4px] transition-all duration-200 hover:bg-[#1976D2] hover:text-white">Sign Up</Link>
      </div>

        <div className="text-center relative mt-10 mb-9">
            <div className="w-full h-[1px] bg-slate-300 absolute top-4 left-0 z-0"></div>
            <span className="bg-white p-2 text-slate-400 text-xl relative z-10">or</span> 
        </div>

        <div className="text-center"> 
            <button type='button' className="text-base px-5 py-3 bg-[#1976D2] text-white rounded-lg transition-all duration-200 hover:bg-[#135ca5]">
                Continue with Google
            </button>
        </div>

    </form>
  )
}

export default LoginForm
