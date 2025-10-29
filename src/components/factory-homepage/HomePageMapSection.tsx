"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const HomePageMapSection: React.FC = () => {
  const addressListRef = useRef<HTMLUListElement | null>(null);
  const mapListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const addressItems = addressListRef.current?.querySelectorAll<HTMLLIElement>("li");
    const mapItems = mapListRef.current?.querySelectorAll<HTMLLIElement>("li");

    if (!addressItems || !mapItems) return;

    const handleMouseEnter = (index: number) => {
      mapItems.forEach((li) => li.classList.remove("active"));
      mapItems[index].classList.add("active");
    };

    addressItems.forEach((item, index) => {
      const listener = () => handleMouseEnter(index);
      item.addEventListener("mouseenter", listener);

      // Store listener reference for cleanup
      (item as any)._listener = listener;
    });

    return () => {
      addressItems.forEach((item) => {
        const listener = (item as any)._listener as EventListener | undefined;
        if (listener) {
          item.removeEventListener("mouseenter", listener);
        }
      });
    };
  }, []);
    return (
        <>
            <div className="home1-map-section mb-120">
                <div className="address-wrapper">
                    <h2>Our Factory Locations</h2>
                    <div className="address-area">
                        <ul className="address-list" ref={addressListRef}>
                            <li className="single-address">
                                <div className="content">
                                    <span>NEW YORK</span>
                                    <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                                </div>
                                <svg className="vector" width={96} height={21} viewBox="0 0 96 21" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17C0 19.2091 1.79086 21 4 21C6.20914 21 8 19.2091 8 17C8 14.7909 6.20914 13 4 13C1.79086 13 0 14.7909 0 17ZM95.2874 10.4452C95.67 10.2865 95.8515 9.84768 95.6928 9.46508L93.1066 3.23018C92.9479 2.84757 92.509 2.66606 92.1264 2.82477C91.7438 2.98347 91.5623 3.42229 91.721 3.80489L94.0199 9.34703L88.4777 11.6459C88.0951 11.8046 87.9136 12.2434 88.0723 12.626C88.231 13.0086 88.6699 13.1901 89.0525 13.0314L95.2874 10.4452ZM4 17.75C20.5519 17.75 31.0581 15.8359 38.3869 13.3026C45.7178 10.7686 49.8449 7.6167 53.5398 5.28006C55.3872 4.11177 57.1134 3.15365 59.0971 2.53065C61.0739 1.90979 63.3403 1.61157 66.2653 1.81185C72.1491 2.21471 80.6511 4.62889 94.7133 10.4455L95.2867 9.05938C81.2079 3.23598 72.5127 0.73609 66.3678 0.315351C63.2784 0.103827 60.8227 0.416431 58.6476 1.09957C56.4793 1.78057 54.624 2.81964 52.7381 4.0123C48.9664 6.39753 45.0205 9.42253 37.8968 11.8849C30.771 14.3481 20.441 16.25 4 16.25L4 17.75Z" />
                                </svg>
                            </li>
                            <li className="single-address">
                                <div className="content">
                                    <span>WASHINGTON DC</span>
                                    <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                                </div>
                                <svg className="vector" width={96} height={21} viewBox="0 0 96 21" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17C0 19.2091 1.79086 21 4 21C6.20914 21 8 19.2091 8 17C8 14.7909 6.20914 13 4 13C1.79086 13 0 14.7909 0 17ZM95.2874 10.4452C95.67 10.2865 95.8515 9.84768 95.6928 9.46508L93.1066 3.23018C92.9479 2.84757 92.509 2.66606 92.1264 2.82477C91.7438 2.98347 91.5623 3.42229 91.721 3.80489L94.0199 9.34703L88.4777 11.6459C88.0951 11.8046 87.9136 12.2434 88.0723 12.626C88.231 13.0086 88.6699 13.1901 89.0525 13.0314L95.2874 10.4452ZM4 17.75C20.5519 17.75 31.0581 15.8359 38.3869 13.3026C45.7178 10.7686 49.8449 7.6167 53.5398 5.28006C55.3872 4.11177 57.1134 3.15365 59.0971 2.53065C61.0739 1.90979 63.3403 1.61157 66.2653 1.81185C72.1491 2.21471 80.6511 4.62889 94.7133 10.4455L95.2867 9.05938C81.2079 3.23598 72.5127 0.73609 66.3678 0.315351C63.2784 0.103827 60.8227 0.416431 58.6476 1.09957C56.4793 1.78057 54.624 2.81964 52.7381 4.0123C48.9664 6.39753 45.0205 9.42253 37.8968 11.8849C30.771 14.3481 20.441 16.25 4 16.25L4 17.75Z" />
                                </svg>
                            </li>
                            <li className="single-address">
                                <div className="content">
                                    <span>New Jersey</span>
                                    <a href="#">8204 Glen Ridge DriveEndicott, NY 13760</a>
                                </div>
                                <svg className="vector" width={96} height={21} viewBox="0 0 96 21" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17C0 19.2091 1.79086 21 4 21C6.20914 21 8 19.2091 8 17C8 14.7909 6.20914 13 4 13C1.79086 13 0 14.7909 0 17ZM95.2874 10.4452C95.67 10.2865 95.8515 9.84768 95.6928 9.46508L93.1066 3.23018C92.9479 2.84757 92.509 2.66606 92.1264 2.82477C91.7438 2.98347 91.5623 3.42229 91.721 3.80489L94.0199 9.34703L88.4777 11.6459C88.0951 11.8046 87.9136 12.2434 88.0723 12.626C88.231 13.0086 88.6699 13.1901 89.0525 13.0314L95.2874 10.4452ZM4 17.75C20.5519 17.75 31.0581 15.8359 38.3869 13.3026C45.7178 10.7686 49.8449 7.6167 53.5398 5.28006C55.3872 4.11177 57.1134 3.15365 59.0971 2.53065C61.0739 1.90979 63.3403 1.61157 66.2653 1.81185C72.1491 2.21471 80.6511 4.62889 94.7133 10.4455L95.2867 9.05938C81.2079 3.23598 72.5127 0.73609 66.3678 0.315351C63.2784 0.103827 60.8227 0.416431 58.6476 1.09957C56.4793 1.78057 54.624 2.81964 52.7381 4.0123C48.9664 6.39753 45.0205 9.42253 37.8968 11.8849C30.771 14.3481 20.441 16.25 4 16.25L4 17.75Z" />
                                </svg>
                            </li>
                        </ul>
                        <Link href="/contact" className="location-btn">View All Factory Location</Link>
                    </div>
                </div>
                <ul className="map-list" ref={mapListRef}>
                    <li className="active">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002786632!2d-74.14431287431229!3d40.697284634966785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1741770418248!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </li>
                    <li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308095436!2d-77.09697652886626!3d38.89385915497123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sbd!4v1741770512263!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </li>
                    <li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563756.0690582087!2d-77.22309702196499!3d40.04839034274329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sbd!4v1741771122024!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default HomePageMapSection
