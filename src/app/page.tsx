import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/header/Header1";
import HomeBanner from "@/components/textile-homepage/HomeBanner";
import HomeContactSection from "@/components/textile-homepage/HomeContactSection";
import HomeServiceSection from "@/components/textile-homepage/HomeServiceSection";

import HomeVideoSection from "@/components/textile-homepage/HomeVideoSection";

const TextilePage = () => {
    return (
        <>
            <Header1 />
            <HomeBanner />
            <HomeServiceSection />
            {/* <HomeAboutSection /> */}
            {/* <HomeProjectSection /> */}
            <HomeVideoSection />
            {/* <HomeProductSection /> */}
            {/* <HomeProcessSection /> */}
            {/* <HomeBlogSection /> */}
            {/* <HomeTestimonialSection /> */}
            <HomeContactSection />
            <Footer1 />
        </>
    );
};

export default TextilePage;
