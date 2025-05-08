import React, { useEffect, useState } from 'react';
import './CustomCusror.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    // ذيل يتبع الموضع الحقيقي بتأخير
    useEffect(() => {
        const interval = setInterval(() => {
            setTrailingPosition((prev) => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.1,
                    y: prev.y + dy * 0.1,
                };
            });
        }, 16); // تقريبًا 60fps

        return () => clearInterval(interval);
    }, [position]);

    return (
        <>
            <div
                className="cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className="cursor-border"
                style={{
                    left: `${trailingPosition.x}px`,
                    top: `${trailingPosition.y}px`,
                }}
            />
        </>
    );
}
