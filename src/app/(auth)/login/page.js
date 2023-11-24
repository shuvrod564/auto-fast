 
import LoginForm from '@components/components/LoginForm'
import React from 'react' 
 

export const metadata  = {
  title: 'Log In',
  description: 'Auto Fast - Login'
}

const Login = () => {
  
  
  return (
    <main className='py-6 min-h-screen flex items-center'>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 items-center bg-white rounded-xl overflow-hidden">
          <div className="bg-no-repeat bg-center bg-cover p-10 min-h-[calc(100vh-8rem)] rounded-xl" style={{ backgroundImage: `url('/global/auth-bg-image.webp')` }}>

          </div>
          <div className="form__wrapper p-10">
            <div className="max-w-[450px] mx-auto"> 
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
