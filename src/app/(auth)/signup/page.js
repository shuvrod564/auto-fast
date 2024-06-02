 
import SignupForm from '@components/components/shared/SignupForm'
import React from 'react' 
 

export const metadata  = {
  title: 'Sign up',
  description: 'Auto Fast - Sign Up'
}

const Login = () => {
  
  
  return (
    <main className='py-6 min-h-screen flex items-center'>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-xl overflow-hidden">
          <div className="bg-no-repeat bg-center bg-cover p-10 rounded-xl hidden lg:block" style={{ backgroundImage: `url('/global/auth-bg-image.webp')` }}>

          </div>
          <div className="form__wrapper sm:p-10 p-6">
            <div className="max-w-[450px] mx-auto py-5 sm:py-12 lg:py-0"> 
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
