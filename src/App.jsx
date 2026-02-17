import React from 'react'
import { fetchPhotos, fetchVideos } from './api/DataAPI'

const App = () => {
  return (
    <div>
      <button
      onClick={()=>{
        //  fetchPhotos('horse');
        fetchVideos('horse');
      }}
      >Get Data</button>
    </div>
  )
}

export default App