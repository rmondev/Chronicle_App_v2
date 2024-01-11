import React from 'react'
import MainNav from '@/components/MainNav'


export default function AppHome (){
    return(
        <>
           
            <MainNav/>

            <div className='flex min-h-screen justify-center items-center bg-white'>
                <ul>
                    
                        { /* Welcome Banner */ }
                        <li>
                            <div className="flex bg-white justify-center items-center py-6">
                                <img className="h-15 w-80 rounded-full" src={'banner-chronicle.png'} alt="" />
                            </div>
                        </li>
                        
                        { /* Home Text */}
                        <li>
                            <div className="flex bg-white justify-center items-center py-6">
                                <h1>Home</h1>
                            </div>
                        </li>


                    
                </ul>
            </div>
        </>
    )
}