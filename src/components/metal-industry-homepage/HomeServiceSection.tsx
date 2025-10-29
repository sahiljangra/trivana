import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeServiceSection = () => {
    return (
        <div className="home4-service-section mb-120">
            <div className="container-fluid">
                <div className="section-title three text-center white mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h2>[Our Services]</h2>
                </div>
                <ul className="service-wrapper">
                    <li className="single-service wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="service-img-and-title-area">
                            <div className="service-img">
                                <Image width={450} height={255} src="/assets/img/home4/service-img1.jpg" alt="" />
                            </div>
                            <div className="title-area">
                                <ul>
                                    <li><Link href="/service/style3">Metal</Link></li>
                                    <li><Link href="/service/style3">Chemical</Link></li>
                                    <li><Link href="/service/style3">Automotive</Link></li>
                                </ul>
                                <h2><Link href="/service/details">Workforce Training &amp; Control</Link></h2>
                            </div>
                        </div>
                        <div className="service-content">
                            <p>Sed nisl eros, condimentum nec risus sit amet, finibus congi. Fusen fringilla est libero, sed tempus urna feugiat eu. Curabit eu feugiat ligu Suspendisse nectoraba.</p>
                            <Link href="/service/details" className="details-btn">
                                <span>View Details</span>
                                <div className="icon">
                                    <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                            <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="single-service wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="service-img-and-title-area">
                            <div className="service-img">
                                <Image width={450} height={255} src="/assets/img/home4/service-img2.jpg" alt="" />
                            </div>
                            <div className="title-area">
                                <ul>
                                    <li><Link href="/service/style3">Mining</Link></li>
                                    <li><Link href="/service/style3">Chemical</Link></li>
                                    <li><Link href="/service/style3">Energy</Link></li>
                                </ul>
                                <h2><Link href="/service/details">Metal Casting and Foundry</Link></h2>
                            </div>
                        </div>
                        <div className="service-content">
                            <p>Sed nisl eros, condimentum nec risus sit amet, finibus congi. Fusen fringilla est libero, sed tempus urna feugiat eu. Curabit eu feugiat ligu Suspendisse nectoraba.</p>
                            <Link href="/service/details" className="details-btn">
                                <span>View Details</span>
                                <div className="icon">
                                    <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                            <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="single-service wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="service-img-and-title-area">
                            <div className="service-img">
                                <Image width={450} height={255} src="/assets/img/home4/service-img3.jpg" alt="" />
                            </div>
                            <div className="title-area">
                                <ul>
                                    <li><Link href="/service/style3">Mining</Link></li>
                                    <li><Link href="/service/style3">Metal</Link></li>
                                    <li><Link href="/service/style3">Energy</Link></li>
                                </ul>
                                <h2><Link href="/service/details">Metal Fabrication and Welding Assen</Link></h2>
                            </div>
                        </div>
                        <div className="service-content">
                            <p>Sed nisl eros, condimentum nec risus sit amet, finibus congi. Fusen fringilla est libero, sed tempus urna feugiat eu. Curabit eu feugiat ligu Suspendisse nectoraba.</p>
                            <Link href="/service/details" className="details-btn">
                                <span>View Details</span>
                                <div className="icon">
                                    <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                            <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="row pt-50 bounce_up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link className="primary-btn2 two white" href="/service/style3">
                            <span>View All Services</span>
                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeServiceSection
