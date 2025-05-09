import React from 'react'
import BannerImage from '../assets/images/home-slid1.jpg'
import img1 from '../assets/images/prand1.png'
import img2 from '../assets/images/prand2.png'
import img3 from '../assets/images/prand3.png'
import img4 from '../assets/images/prand4.png'
import TitleShape from '../assets/images/title_left.svg';
export default function Store() {

    const brands = [
        {
            name: 'Nike',
            image: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png',
            link: 'https://www.nike.com',
        },
        {
            name: 'Puma',
            image: img1,
            link: 'https://www.puma.com',
        },
        {
            name: 'Reebok',
            image: img2,
            link: 'https://www.reebok.com',
        },
        {
            name: 'Asics',
            image: img3,
            link: 'https://www.asics.com',
        },
        {
            name: 'Fila',
            image: img4,
            link: 'https://www.fila.com',
        },
        {
            name: 'Nike',
            image: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png',
            link: 'https://www.nike.com',
        },
        {
            name: 'Puma',
            image: img1,
            link: 'https://www.puma.com',
        },
        {
            name: 'Reebok',
            image: img2,
            link: 'https://www.reebok.com',
        },
        {
            name: 'Asics',
            image: img3,
            link: 'https://www.asics.com',
        },
        {
            name: 'Fila',
            image: img4,
            link: 'https://www.fila.com',
        },
        {
            name: 'Nike',
            image: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png',
            link: 'https://www.nike.com',
        },
        {
            name: 'Puma',
            image: img1,
            link: 'https://www.puma.com',
        },
        {
            name: 'Reebok',
            image: img2,
            link: 'https://www.reebok.com',
        },
        {
            name: 'Asics',
            image: img3,
            link: 'https://www.asics.com',
        },
        {
            name: 'Fila',
            image: img4,
            link: 'https://www.fila.com',
        },
        {
            name: 'Reebok',
            image: img2,
            link: 'https://www.reebok.com',
        },
    ];

    return (
        <>

            <section className='bannerImage'>
                <img src={BannerImage} alt="" />
                <div className="Banner-Layer">
                    <h1 className='fw-bold text-white fs-1'>Store</h1>
                    <p className='text-white fw-medium'>Home <i className="fa-solid fa-angle-right"></i> Store</p>
                    {[...Array(10)].map((_, index) => (
                        <span className={`bubble bubble-${index}`} key={index}></span>
                    ))}
                </div>
            </section>

            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={TitleShape} className="TitleShape" alt="" />
                            <h4 className="text-center mb-0 text-primary">Store</h4>
                        </div>
                    </div>
                    {brands.map((brand, index) => (
                        <div className="col-6 col-sm-4 col-md-3" key={index}>
                            <a
                                href={brand.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                <div className="card card-logo-hover border-0 rounded-3  h-100 shadow-sm">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="card-img-top p-3"
                                        style={{ height: '120px', objectFit: 'contain' }}
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
