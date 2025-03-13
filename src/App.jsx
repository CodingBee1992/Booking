import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import AllHotels from './pages/AllHotels'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Booking/' element={ <Home />}/>
      <Route path='/Booking/AllHotels' element={ <AllHotels/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App