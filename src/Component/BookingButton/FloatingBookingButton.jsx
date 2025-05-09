import { Link } from "react-router-dom";
import '../BookingButton/BookButton.css'
import { useEffect, useState } from "react";


function FloatingBookingButton() {
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
                to="/BokingForm" // غيّر الرابط حسب مسار صفحة الحجز عندك
                className="booking-button"
                title="Booking"
            >
                <i class="fa-regular fa-pen-to-square"></i>
            </Link>
        )
    );
}

export default FloatingBookingButton;
