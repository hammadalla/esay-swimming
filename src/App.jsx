
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../src/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import OurStaff from './pages/OurStaff'
import Programes from './pages/Programes'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Programdetails from './pages/programdetails'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <MainLayout />, children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "ourstaff", element: <OurStaff /> },
        { path: "programes", element: <Programes /> },
        { path: "Programdetails", element: <Programdetails /> },
        { path: "gallery", element: <Gallery /> },
        { path: "contact", element: <Contact /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
