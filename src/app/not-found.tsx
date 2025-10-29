import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/header/Header1";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not Found | Trivana Textile",
};

const notfound = () => {
    return (
        <>
            <Header1 />
            <div className="error-page-wrapper">
                <div className="error-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="error-content text-center">
                                    <img src="/assets/img/innerpages/error-img.png" alt="" />
                                    <h2>Sorry! Page Not Found.</h2>
                                    <p>
                                        The page you are looking for was moved, removed, renamed or never existed. we are open for this constructions &amp;
                                        architecture.
                                    </p>
                                    <Link className="primary-btn1" href="/">
                                        <span>Take Me Home</span>
                                        <span>Take Me Home</span>
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
                </div>
            </div>
            <Footer1 />
        </>
    );
};

export default notfound;
