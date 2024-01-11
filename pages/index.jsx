import React from 'react';
import { useRouter } from 'next/router';



export default function Home() {

  const router = useRouter()

  const handleClick = (page,e) => { 
    e.preventDefault()
    router.push(page)
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
              <h1 className="text-black text-2xl font-bold text-center">
                <div>Welcome</div>
                <div className="mt-2">Please Sign-In</div>
              </h1>

              </div>
            </li>
          
          { /* Input Fields */}
            <li>
              <div className="flex bg-white justify-center items-center">
                <ul>
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2" placeholder="Username" ></input>
                  </li>
                <br/>
                  <li>
                    <input className="text-black font-semibold outline-black border border-black rounded outline-1 pl-2" placeholder="Password"></input>
                  </li>
                </ul>
              </div>
            </li>

          { /* Buttons */ }
            <li>
              <div className="flex space-x-4 bg-white py-6 justify-center items-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleClick("/appHome", e)}>
                    Login
                  </button>
              </div>
              
              
              <h3 className="text-black font-semibold text-center text-md pt-5">
                <div className="pb-2">Need an Account?</div>
                <div className="">Click Register to Begin Your Chronicle</div>
              </h3>
              <div className="flex space-x-4 bg-white py-6 justify-center items-center">
                
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleClick("/register", e)}>
                  Register
                </button>
              
              </div>
            
            </li>
        </ul>
      </div>
      

    </>
  
  )
}
