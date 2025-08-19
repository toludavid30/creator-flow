import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layOut Components/Navbar'
import Footer from './layOut Components/Footer'
import Landing from './landingPage/Landing';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App