import FooterTop from "@/components/factory-homepage/FooterTop";
import Header1 from "@/components/header/Header1";
import Link from "next/link";
import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import products from "@/data/product-list";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Trivana Textile",
};

const page = () => {
    return (
        <>
            <Header1 />
            <Breadcrumb title="Products" subtitle="Products Category" srcImage="/assets/img/trivana/products/trivana-textile-products.webp" />

            <div className="project-grid-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 wow animate fadeInDown rounded-4"
                                data-wow-delay={`${200 + index * 100}ms`}
                                data-wow-duration="1500ms"
                            >
                                <Link href={product.link}>
                                    <div className="project-card magnetic-item rounded-4">
                                        <div className="project-img">
                                            <Image width={960} height={470} src={product.image} alt={product.name} />
                                        </div>
                                        <div className="project-content-wrap">
                                            <div className="project-content">
                                                <h2 className="text-white">{product.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    );
};

export default page;
