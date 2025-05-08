import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/NavBar/Navbar'
import WhatsAppButton from './Component/whatsappButton/WhatsappButton'
import Footer from './Component/Footer/Footer'
import CustomCursor from './Component/CustomCursor/CustomCursor'

export default function MainLayout() {
    return (
        <div>
            <WhatsAppButton />
            <CustomCursor />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
