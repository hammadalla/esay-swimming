import React, { useState, useEffect } from 'react';
import '../whatsappButton/WhatsappByutton.css';
import { Link } from 'react-router-dom';

export default function WhatsAppButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100); // يظهر بعد التمرير بـ 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        showButton && (
            <Link
                to={"https://wa.me/971585971721"} // ← ضع رقم واتسابك هنا
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </Link>
        )
    );
}
