import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './src/Component/Navbar/Navbar'
import WhatsAppButton from './src/Component/whatsappButton/WhatsappButton'
import Footer from './src/Component/Footer/Footer'

export default function MainLayout() {
    return (
        <div>
            <WhatsAppButton />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
