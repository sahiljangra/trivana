import Image from 'next/image'
import React from 'react'

const HomeAboutSection:React.FC = () => {
    return (
        <div className="home4-about-section mb-120">
            <div className="container">
                <div className="about-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <span>[Our Success]</span>
                    <h2>Our Metal captures the true nature of <span>buildings. Watch house is a slow take on instant gratification.</span></h2>
                </div>
                <div className="row gy-lg-5 gy-4">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-img magnetic-item">
                            <Image width={610} height={670} src="/assets/img/home4/about-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-content">
                            <p>We understand your needs and deliver digital marketing through unique selling One proposition. Our team of experts is passionate about helping you SEO company. Foi Choose us and experience the difference! Looking for something different?  We are challenge the status quo with innovative solutions and a [company culture problem adjective] approach.  Let us show you how we can help you achieve desired that to outcome in a way you won't expect. Here are some title options based on the wayn phrase "ready to build together.</p>
                            <ul>
                                <li>
                                    <h6>WHO WE ARE</h6>
                                    <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce. Advantage of thes limited-time offers &amp; start.</p>
                                </li>
                                <li>
                                    <h6>OUR MISSION</h6>
                                    <p>Sed nisl eros, condimentum nec risussit amet finibus cons sem fusce. Advantage of thes limited-time offers &amp; start.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeAboutSection
