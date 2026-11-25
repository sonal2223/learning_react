import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const linkStyle = {
        color: "#d8f3dc",
        textDecoration: "none",
    };

    const iconStyle = {
        color: "#ffffff",
        fontSize: "1.2rem",
        marginRight: "16px",
    };

    return (
        <footer id="footer"
            style={{
                backgroundColor: "#1b4332",
                color: "#d8f3dc",
                padding: "30px 0 16px",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* About */}
                    <div className="md:col-4 p-3">
                        <h5 style={{ color: "#ffffff" }}>Nature World</h5>
                        <p style={{ marginBottom: 0 }}>
                            Protecting forests, oceans, and wildlife for a
                            greener future. Save Nature, Save Life!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-4 p-3">
                        <h5 style={{ color: "#ffffff" }}>Quick Links</h5>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li><a href="#home" style={linkStyle}>Home</a></li>
                            <li><a href="#about" style={linkStyle}>About</a></li>
                            <li><a href="#services" style={linkStyle}>Services</a></li>
                            <li><a href="#contact" style={linkStyle}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="md:col-4 p-3">
                        <h5 style={{ color: "#ffffff" }}>Follow Us</h5>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <hr style={{ borderColor: "rgba(216, 243, 220, 0.3)", margin: "16px 0" }} />
                <p style={{ textAlign: "center", marginBottom: 0, fontSize: "0.9rem" }}>
                    © {new Date().getFullYear()} Nature World. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;