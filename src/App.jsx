import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import MainLayout from '../src/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import OurStaff from './pages/OurStaff'
import Programes from './pages/Programes'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Programdetails from './pages/Programdetails'
import BookingForm from './pages/BokinForm'
import NotFoundPage from './pages/NotFoundPage'
import Store from './pages/Store'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ourstaff" element={<OurStaff />} />
        <Route path="programes" element={<Programes />} />
        <Route path="Programdetails" element={<Programdetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="BokingForm" element={<BookingForm />} />
        <Route path="store" element={<Store />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    {
      basename: '/react', // 👈 هنا بنحدد المسار الفرعي للمشروع
    }
  )

  return <RouterProvider router={router} />
} 
