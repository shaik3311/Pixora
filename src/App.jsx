import React from 'react'
import { fetchPhotos, fetchVideos } from './api/DataAPI'
import NavBar from './components/NavBar'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ResultGrid/>
    </div>
  )
}

export default App