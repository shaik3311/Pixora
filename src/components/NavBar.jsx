import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-col justify-start items-start  px-2 py-2 w-screen lg:flex-row lg:justify-between lg:items-center lg:px-3 lg:py-5'>
        <div className='flex justify-between w-full lg:w-1/3'>
            <img 
            src="/pixora_text.png" 
            alt="" 
            className='w-36'/>
            <div className='flex gap-1 lg:gap-10 items-center'>
                <button className='bg-white px-5 py-2 rounded active:scale-98'>Photos</button>
                <button className='bg-white px-5 py-2 rounded active:scale-98'>Videos</button>
            </div>
        </div>
        <div className='w-full flex gap-3 px-2 mt-5 lg:w-1/2'>
            <input 
            type="text" 
            placeholder='Search for anything........'
            className='outline-none border-1 border-b-gray-500 px-2 py-3 w-full rounded-xl'
             />
            <button 
            className='bg-gradient-to-r from-blue-950 to-purple-600 px-5 py-2 rounded-lg active:scale-95 text-white font-semibold text-xl'>
                Search
            </button>
        </div>
    </div>
  )
}

export default NavBar