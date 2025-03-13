import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import AllHotels from './pages/AllHotels'
import HotelPage from './pages/HotelPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Booking/' element={ <Home />}/>
      <Route path='/Booking/AllHotels' element={ <AllHotels/>}/>
      <Route path='/Booking/HotelPage/:id' element={ <HotelPage/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}

export default App