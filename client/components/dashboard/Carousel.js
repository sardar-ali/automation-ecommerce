import React from "react";
import Link from 'next/link'

const Carousel = () => {

    return (
        <div className="container-fluid mb-3">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <div
                        id="header-carousel"
                        className="carousel slide carousel-fade mb-30 mb-lg-0"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#header-carousel"
                                data-slide-to={0}
                                className="active"
                            />
                            <li data-target="#header-carousel" data-slide-to={1} />
                            <li data-target="#header-carousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div
                                className="carousel-item position-relative active"
                                style={{ height: 430 }}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="https://electricgatemasters.net/wp-content/uploads/2021/04/b1.jpg"
                                    // src="img/carousel-1.jpg"
                                    style={{ objectFit: "cover" }}
                                    alt="parking gate barrier"
                                />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h2 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                            Parking Gate
                                        </h2>
                                        {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                            Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                            duo stet amet amet ndiam elitr ipsum diam
                                        </p> */}
                                        {/* <a
                                            className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                            href="#"
                                        >
                                            Shop Now
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="carousel-item position-relative"
                                style={{ height: 430 }}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    // src="img/carousel-2.jpg"
                                    src="https://ak1.picdn.net/shutterstock/videos/1009889021/thumb/1.jpg"
                                    style={{ objectFit: "cover" }}
                                    alt="gate barrier"
                                />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h2 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                            Gate Barrier
                                        </h2>
                                        {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                            Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                            duo stet amet amet ndiam elitr ipsum diam
                                        </p> */}
                                        {/* <a
                                            className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                            href="#"
                                        >
                                            Shop Now
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="carousel-item position-relative"
                                style={{ height: 430 }}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    // src="img/carousel-3.jpg"
                                    src="http://hiphensolutions.com/wp-content/uploads/2015/11/20141223165101_53407.jpg"
                                    style={{ objectFit: "cover" }}
                                    alt="toll gate"


                                />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h2 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                            Toll Gate
                                        </h2>
                                        {/* <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                            Lorem rebum magna amet lorem magna erat diam stet. Sadips
                                            duo stet amet amet ndiam elitr ipsum diam
                                        </p> */}
                                        {/* <a
                                            className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                            href="#"
                                        >
                                            Shop Now
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 cursor-pointer">
                    <Link href="/services">
                        <div className="product-offer mb-30" style={{ height: 430 }}>
                            <img
                                className="img-fluid"
                                // src="https://tse4.mm.bing.net/th?id=OIP.6wuh1TB1YF5uYctqql0UcQHaE9&pid=Api&P=0&h=180"
                                src="img/services2.jpg"
                                alt="maintenance and services" />
                            <div className="offer-text">
                                {/* <h6 className="text-white text-uppercase">Save 20%</h6> */}
                                <h5 className="text-white mb-3">KEEP YOUR PROPERTY SECURE</h5>
                                {/* <a href="" className="btn btn-primary">
                                Shop Now
                            </a> */}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Carousel;