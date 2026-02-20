import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from '../api/DataAPI';
import { setError, setLoading, setResults } from '../features/resultSlice';
import Card from './card';

const ResultGrid = () => {
    const {query,activeTab,results,error,loading} = useSelector((store)=>store.search);
    const dispatch = useDispatch();
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {

        if (!query || query.trim() === "") {
            return;
        }

        const fetchData = async () => {
            console.log("Effect running");
            console.log("ActiveTab:", activeTab);
            console.log("Query:", query);
            let data = []
            try{
                dispatch(setError(false));
                dispatch(setLoading(true));
                if (activeTab === 'photos') {
                    data = await fetchPhotos(query);
                    // console.log(data);
                }

                if (activeTab === 'videos') {
                    data = await fetchVideos(query);
                    // console.log(data);
                }
            }catch(error){
                dispatch(setError(true));
                dispatch(setLoading(false));
                setErrorMsg(error.message);
            }
            dispatch(setResults(data));
            dispatch(setLoading(false));
        };

        fetchData();

    }, [query, activeTab]);

    // console.log(results);
    

    if(!query){
        return <h1 id='message'>Search for any results</h1>
    }else if(error){
        return <h1 id='message'>{errorMsg}</h1>
    }else if(loading){
        return <h1 id='message'>Loading.....</h1>
    }else if(results.length==0){
        return <h1 id='message'>No Results Found</h1>
    }
  




  return (
    <div className='flex flex-wrap justify-start mt-10 lg:gap-4 gap-1 px-3 lg:px-50 m-auto'>
        {results.map((item,idx)=>{
            return <Card key={idx} item={item} tab={activeTab}/>
        })}
    </div>
  )
}

export default ResultGrid