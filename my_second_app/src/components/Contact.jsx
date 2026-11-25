import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    const labelStyle = {
        display: "block",
        color: "#1b4332",
        fontWeight: "600",
        marginBottom: "6px",
    };

    const inputStyle = {
        borderRadius: "10px",
        border: "1px solid #b7e4c7",
        padding: "10px 14px",
        color: "#1b4332",
        backgroundColor: "#ffffff",
    };

    return (
        <div>
            <section
                id="contact"
                style={{
                    backgroundColor: "#fdf8ec",
                    padding: "40px 0",
                }}
            >
                <div className="container">
                    {/* Heading */}
                    <div className="text-center" style={{ marginBottom: "30px" }}>
                        <h1 style={{ color: "#2d6a4f" }}>Get In Touch</h1>
                        <p style={{ color: "#1b4332", maxWidth: "600px", margin: "0 auto" }}>
                            Have a question or want to join our nature campaigns?
                            Send us a message and we will get back to you soon.
                        </p>
                    </div>

                    <div className="row align-items-center">
                        {/* Form */}
                        <div className="md:col-6 p-4">
                            <div
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.10)",
                                    padding: "24px",
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label" style={labelStyle}>
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            style={inputStyle}
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" style={labelStyle}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            style={inputStyle}
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" style={labelStyle}>
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            style={inputStyle}
                                            rows="5"
                                            placeholder="Enter your message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn"
                                        style={{
                                            backgroundColor: "#2d6a4f",
                                            color: "#ffffff",
                                            borderRadius: "10px",
                                            padding: "10px 24px",
                                            border: "none",
                                        }}
                                    >
                                        Send Message
                                    </button>

                                    {submitted && (
                                        <p style={{ color: "#2d6a4f", marginTop: "14px", marginBottom: 0 }}>
                                            Thank you! Your message has been sent.
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="md:col-6 p-4">
                            <h2 style={{ color: "#2d6a4f", marginBottom: "14px" }}>
                                Our Location
                            </h2>
                            <iframe
                                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                                width="100%"
                                height="400"
                                style={{
                                    border: 0,
                                    borderRadius: "16px",
                                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.10)",
                                }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;