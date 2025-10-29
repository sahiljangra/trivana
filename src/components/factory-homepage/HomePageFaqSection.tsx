"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "react-bootstrap";

const FaqSection: React.FC= () => {
  return (
    <div className="home1-faq-section mb-120">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-70">
          <div
            className="col-lg-6 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title">
              <span>Answer your questions</span>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
            <Link className="primary-btn1 transparent" href="/contact">
              <span>Talk Any Question</span>
              <span>Talk Any Question</span>
              <svg
                className="arrow"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                  <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5 d-lg-flex d-none justify-content-lg-center">
            <div className="faq-img magnetic-item">
              <Image
                width={334}
                height={450}
                src="/assets/img/home1/faq-img.jpg"
                alt="FAQ Illustration"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq-wrap">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    01. Do you provide design and Industry services?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we provide comprehensive design and industry services
                    tailored to meet your needs. Our team of experts delivers
                    innovative solutions in design, development, and
                    implementation, ensuring high-quality results and client
                    satisfaction.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    02. Is Matrik suitable for my business?
                  </Accordion.Header>
                  <Accordion.Body>
                    Discover if Matrik is the right fit for your business by
                    exploring its tailored solutions for various industries and
                    unique needs.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    03. What is your typical project timeline?
                  </Accordion.Header>
                  <Accordion.Body>
                    Discover the typical project timeline for our construction
                    services, outlining each phase from planning to completion,
                    ensuring timely and efficient project delivery.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    04. How do you handle permits and inspections?
                  </Accordion.Header>
                  <Accordion.Body>
                    We handle all necessary permits and inspections for your
                    project, ensuring full compliance with local regulations and
                    smooth progress throughout the construction process.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    05. How do you handle waste disposal and recycling?
                  </Accordion.Header>
                  <Accordion.Body>
                    At our construction sites, we prioritize responsible waste
                    disposal and recycling by adhering to local regulations,
                    implementing sustainable practices, and partnering with
                    certified waste management services to minimize
                    environmental impact.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    06. How do you ensure buildings are structurally safe?
                  </Accordion.Header>
                  <Accordion.Body>
                    Learn how we prioritize safety in construction by following
                    strict structural guidelines and using high-quality
                    materials to ensure buildings are secure and reliable.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
