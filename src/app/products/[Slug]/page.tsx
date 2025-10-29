import Header1 from "@/components/header/Header1";
import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import products from "@/data/product-list";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ Slug: string }>;
};

const toUcWords = (slug: string) => {
    const lowerWords = ["and", "or", "of", "in", "on", "at", "for", "to", "by", "with", "from"];

    return slug
        .split("-")
        .map((word, index) => {
            const lower = word.toLowerCase();
            if (index !== 0 && lowerWords.includes(lower)) {
                return lower;
            }
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join(" ");
};

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        Slug: product.name.toLowerCase().replace(/\s+/g, '-')
    }));
}


// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const { Slug } = await params;
//     const productName = decodeURIComponent(Slug.toUpperCase().toLocaleUpperCase());
//     return {
//         title: `${toUcWords(productName)} | Trivana Textile`,
//     };
// }

const page = async ({ params }: Props) => {
    const { Slug } = await params;
    var product = products.find((product) => product.name === toUcWords(Slug));
    const productImageList = product?.imageList || [];

    if (!product) {
        redirect("/products");
    }

    return (
        <>
            <Header1 />
            <Breadcrumb
                title={toUcWords(Slug)}
                subtitle={`Product - ${toUcWords(Slug)}`}
                srcImage={product?.backgroundImage || "/assets/img/trivana/products/trivana-textile-products.webp"}
            />

            <div className="home6-blog-section project-grid-page pt-120 mb-120">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title five">
                                <h2>{toUcWords(Slug)}</h2>
                                <p dangerouslySetInnerHTML={{ __html: product.longDescription }} />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {productImageList.map((img, index) => (
                                <div key={index} className="blog-card2 three magnetic-item mb-40">
                                    <div className="blog-img">
                                        <Image width={640} height={510} src={img} alt={product?.name || ""} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer1 />
        </>
    );
};

export default page;
