"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
import Image from "next/image";

interface HomePageAboutSectionProps {
    pt?: string; // optional prop
}
const HomePageAboutSection: React.FC<HomePageAboutSectionProps> = ({ pt = "" }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <>
            <div className={`home1-about-section mb-120 ${pt}`} id="scroll-section">
                <div className="container">
                    <div className="about-top-area mb-50">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-xl-12 col-lg-12 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="about-title-area">
                                    <div className="section-title">
                                        <span>About Our Story</span>
                                        <h2>Our Story of Manufacturing Excellence Built on.</h2>
                                    </div>
                                    <div className="mt-5">
                                        <div className="about-content">
                                            <p>
                                                Trivana Textile is a Canada-based textile manufacturing company specializing in luxury towel collections and a
                                                broad range of handcrafted textile products, including braided rugs, throws, baskets, placemats, and more.
                                                Established with a vision of blending traditional artistry with modern excellence, Trivana Textile proudly
                                                represents a rich legacy of craftsmanship inspired weaving traditions.
                                            </p>
                                            <h6 className="mt-4">Our Story</h6>
                                            <p>
                                                The origin of Trivana Textile traces back to a small town, where a young girl grew up watching her mother weave
                                                durries for home use a craft deeply embedded in the daily lives of women in her village. Fascinated by the
                                                intricate designs and the timeless art of weaving, she nurtured a dream to take this heritage to the world
                                                stage.
                                                <br></br>Driven by passion and perseverance, she makes a start up in Canada and turned her humble vision into
                                                reality. With dedication, savings, and the support of her family she founded Trivana Textile, now a growing name
                                                in North America’s textile industry.
                                            </p>
                                            <h6 className="mt-4">Our operations</h6>
                                            <p>
                                                Trivana Textile manufactures premium towel collections in Canada, emphasizing durability, softness, and
                                                sustainable quality. In parallel, we collaborate with a trusted network of artisans, for whom textile making is
                                                a generational craft. Together, we bring to life products that embody tradition, precision, and global appeal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-md-7 gy-6">
                        <div className="col-lg-7 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6>Our Vision & Mission</h6>
                                        <p>
                                            Our vision is to blend heritage craftsmanship with modern design, producing sustainable and high quality textiles
                                            that honor artistry across continents. By manufacturing towels in Canada, we infuse each product with local
                                            ingenuity and quality, celebrating global techniques while adding a distinct Canadian character.
                                            <br></br>
                                            <br></br>To uphold excellence in every fabric we produce and empower artisans by embracing ethical sourcing,
                                            timeless design, and uncompromised quality.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <h6>Our Motto</h6>
                                        <p>Fabricating Excellence in Canada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="about-img magnetic-item">
                                <Image width={750} height={580} src="/assets/img/trivana/about-us/trivana-textile-about-us-2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageAboutSection;
