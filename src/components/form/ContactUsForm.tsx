"use client";

import Link from "next/link";
import React, { useState } from "react";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "", subject: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                alert("✅ Message sent successfully!"); // Alert on success
                // Reset form
                setFormData({ name: "", email: "", message: "", phone: "", subject: "" });
            } else {
                setStatus(`❌ Failed: ${data.error}`);
                alert(`❌ Failed: ${data.error}`); // Alert on failure
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ Failed to send message");
            alert("❌ Failed to send message");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-4">
                    <div className="col-md-12">
                        <div className="form-inner">
                            <label>Full Name *</label>
                            <input required onChange={handleChange} name="name" type="text" value={formData.name} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                            <label>Email *</label>
                            <input required onChange={handleChange} name="email" type="email" value={formData.email} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner">
                            <label>Phone *</label>
                            <input required onChange={handleChange} name="phone" type="text" value={formData.phone} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                            <label>Subject</label>
                            <input required onChange={handleChange} name="subject" type="text" value={formData.subject} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                            <label>Message *</label>
                            <textarea required onChange={handleChange} name="message" value={formData.message} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-inner2">
                            <div className="form-check">
                                <input required className="form-check-input" type="checkbox" id="contactCheck" />
                                <label className="form-check-label" htmlFor="contactCheck">
                                    I have read &amp; accepted <Link href={"#"}>Terms &amp; Conditions</Link>.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="primary-btn5 two btn-hover">
                    Submit Now
                    <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                            <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                        </g>
                    </svg>
                    <span />
                </button>
                {status && <p className="mt-3">{status}</p>}
            </form>
        </>
    );
};

export default ContactUsForm;
