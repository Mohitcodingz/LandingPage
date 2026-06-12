import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ReviewSection from './components/reviewSection/ReviewSection'
import Process from './components/process/Process'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home' 
import Apply from './components/apply/Apply'
import AboutUs from './components/aboutUs/AboutUs'
import Contact from './components/contact/Contact'
import PopularCourse from './components/popularCourse/PopularCourse'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/PopularCourse' element={<PopularCourse />} />
          <Route path='/Apply' element={<Apply />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}