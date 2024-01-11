import React from 'react';
import { useRouter } from 'next/router';



export default function Home() {

  const router = useRouter()

  const handleClick = (e) => { 
    e.preventDefault()
    //temporarily route to /home
    router.push('/appHome')
  }

  return (
    <>
      <div className='flex min-h-screen justify-center items-center bg-white'>
        <ul>
          
          { /* Welcome Banner */ }
            <li>
              <div className="flex bg-white justify-center items-center py-6">
                <img className="h-15 w-80 rounded-full" src={'banner-chronicle.png'} alt="" />
              </div>
            </li>
          
          { /* Welcome Text */ }
            <li>
              <div className="flex bg-white justify-center items-center py-6">
              <h1 className="text-3xl font-bold text-center">
                
                <div className="mt-2">
                    Create an <span className='text-green-500'>Account</span>
                    </div>
                
              </h1>

              </div>
            </li>
          
          { /* Input Fields */}
            <li>
              <div className="flex bg-white justify-center items-center">
                <ul>
                  
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="First Name" ></input>
                  </li>
                
                <br/>
                  
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="Last Name"></input>
                  </li>

                <br/>

                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="Email" ></input>
                  </li>
                
                <br/>
                  
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="Username"></input>
                  </li>

                <br/>

                <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="Password" ></input>
                  </li>
                
                <br/>
                  
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2 w-60" placeholder="Confirm Password"></input>
                  </li>

                </ul>
              </div>
            </li>

          { /* Buttons */ }
            <li>
              <div className="flex space-x-4 bg-white py-6 justify-center items-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Register
                  </button>
              </div>
              
              
              <div className="text-black font-semibold text-center text-md pt-5">
                <h3 className="pb-2">Already have an account? </h3>
                
              </div>

              <div className="text-green-500 font-semibold text-center text-md pt-1">
                    <h3>Log In</h3>
                </div>
              
            
            </li>
        </ul>
      </div>
      

    </>
  
  )
}
