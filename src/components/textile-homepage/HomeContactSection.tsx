import ContactUsForm from "../form/ContactUsForm";

const HomeContactSection = () => {   

    return (
        <div className="home5-contact-section mb-120">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="section-title four mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z" />
                                    <path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z" />
                                </svg>
                                Help &amp; Support
                            </span>
                            <h2>Get In Touch With Us.</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-lg-end wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="contact-form-wrap three">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactSection;
