import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setActiveTab, setQuery } from '../features/resultSlice';

const NavBar = () => {
    const tabs = ['photos','videos'];
    // Query input state 
    const [searchText, setSearchText] = useState('');
    // Action dispatcher 
    const dispatch = useDispatch();
    const active = useSelector((state)=>state.search.activeTab);

    // Handling search input 
    const searchHandler = (e)=>{
        e.preventDefault();
        dispatch(setQuery(searchText));
        // console.log(`Searched text is : ${searchText}`);
        
    }
    // console.log(useSelector((state)=>state.search.query));

  return (
    <div className='flex flex-col justify-start items-start px-3 py-3 w-screen 
    lg:flex-row lg:justify-between lg:items-center lg:px-6 lg:py-5 
    bg-white shadow-sm'>

        <div className='flex justify-between items-center w-full lg:w-1/3 py-2'>
            
            <img 
            src="/pixora_text.png" 
            alt="Pixora Logo" 
            className='w-36 cursor-pointer transition-transform duration-200 hover:scale-105'/>

            <div className='flex gap-2 lg:gap-6 items-center py-2'>
                
                {tabs.map((item,idx)=>{
                    return <button 
                    onClick={()=>{
                        dispatch(setActiveTab(item))
                    }}
                    key={idx} 
                    className={`${active==item?'bg-purple-600 text-white':'bg-white'} px-5 py-2 rounded-lg 
                    font-medium shadow-sm border border-gray-200 
                    hover:shadow-md 
                    transition-all duration-200 active:scale-95 capitalize transition 1s`}>
                        {item}
                    </button>
                })}
            </div>
        </div>

        <form 
        onSubmit={(e)=>{
            searchHandler(e)
        }} 
        className='w-full flex justify-end gap-3 px-2 mt-4 
        lg:w-3/5 lg:mt-0'>

            <input 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            type="text" 
            placeholder='Search for anything...'
            className='outline-none border border-gray-300 
            focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
            px-4 py-3 w-full rounded-xl 
            transition-all duration-200'
            />

            <button 
            className='bg-gradient-to-r from-blue-950 via-purple-700 to-purple-500 
            px-6 py-3 rounded-xl 
            active:scale-95 text-white font-semibold text-lg 
            shadow-md hover:shadow-lg 
            transition-all duration-200'>
                Search
            </button>

        </form>

    </div>

  )
}

export default NavBar