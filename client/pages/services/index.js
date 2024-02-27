import React from 'react'

function service() {

    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                <h3 className="mx-auto text-info" style={{ textAlign: "center" }}> Installation  & Maintenance Services</h3>
                <div className='service-container' style={{ display: "flex", alignItems: "flex-start", margin: "1rem 0" }}>
                    <img className="w-30 h-30" src="img/services.jpg" alt="Maintenance and services" />
                    <div>
                        <li>We are provides comprehensive installation, Maintenance and Services for all kinds of Automatic Doors</li>
                        <li>Sliding Gate motors</li>
                        <li>Swing Gate motors,</li>
                        <li>Gate Barriers</li>
                        <li>Garage Door motors</li>
                        <li>Gate Operators</li>
                        <li>Sectional Overhead Garage Doors</li>
                        <li>Security Bollards</li>
                        <li>Parking Management Systems</li>
                        <li> The scope of service shall include preventive,
                            corrective and emergency maintenance and repair services.</li>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default service