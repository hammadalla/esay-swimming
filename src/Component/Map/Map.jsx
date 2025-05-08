import React from 'react'
import './Map.css'

export default function Map() {
    return (
        <>
            <section className='mt-5' >
                <div className="container-fluid">
                    <div className="d-flex flex-column flex-md-row p-0">
                        {/* Google Map Section */}
                        <div className="map-container col-md-7 p-0">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.8942659700997!2d54.601011400000004!3d24.419740599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4618575dfb1d%3A0xd6259ac9a7060fd8!2sEasy%20Swim%20Academy!5e0!3m2!1sar!2seg!4v1746467587998!5m2!1sar!2seg"
                                allowFullScreen=""
                                loading="lazy"
                                className="w-100 h-100 border-0"
                            ></iframe>
                        </div>

                        {/* Form Section */}
                        <div className="col-md-5 d-flex align-items-center justify-content-center bg-light p-5 shadow" style={{marginBottom: "-50px" , borderBottomRightRadius: "30px" , borderBottomLeftRadius: "0px"}}>
                            <form className="w-100" style={{ maxWidth: '500px' }}>
                                <h2 className="mb-4 fw-bold text-primary">Fill in your details and we’ll get back to you within 24 hours</h2>

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>

                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Let us know your preferred time and any specific requirements"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <button type="submit" className="button-form w-100">
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
