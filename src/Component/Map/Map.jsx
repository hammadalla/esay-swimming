import React from 'react'

export default function Map() {
    return (
        <>
            <section className='mt-5'>
                <div className="container-fluid">
                    <div className="d-flex flex-column flex-md-row p-0">
                        {/* Google Map Section */}
                        <div className="map-container col-md-7 p-0">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19807.893157799504!2d-0.1277587!3d51.5073506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb3d6ebf6a5%3A0xc96a0f7f4b1d8d9c!2sLondon!5e0!3m2!1sen!2suk!4v1683139347536!5m2!1sen!2suk"
                                allowFullScreen=""
                                loading="lazy"
                                className="w-100 h-100 border-0"
                            ></iframe>
                        </div>

                        {/* Form Section */}
                        <div className="col-md-5 d-flex align-items-center justify-content-center bg-white p-5">
                            <form className="w-100" style={{ maxWidth: '500px' }}>
                                <h2 className="mb-4 fw-bold text-dark">Book An Appointment</h2>

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Write message...."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Send
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
