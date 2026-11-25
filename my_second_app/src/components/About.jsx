import natureImage1 from "../assets/image9.jpg";
import natureImage2 from "../assets/image3.jpg";
import natureImage3 from "../assets/image5.jpg";

const About = () => {
    const cardStyle = {
        height: "100%",
        border: "none",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.10)",
        overflow: "hidden",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "12px",
    };

    return (
        <section
            id="about"
            style={{
                backgroundColor: "#fdf8ec",
                padding: "40px 0",
            }}
        >
            <div className="container">
                {/* Heading */}
                <div className="text-center" style={{ marginBottom: "30px" }}>
                    <h1 style={{ color: "#2d6a4f" }}>About Us</h1>
                    <p style={{ color: "#1b4332", maxWidth: "600px", margin: "0 auto" }}>
                        We are passionate about protecting the natural world and
                        inspiring people to live in harmony with it.
                    </p>
                </div>

                <div className="row">
                    {/* First Card */}
                    <div className="md:col-4 p-3">
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                                <img src={natureImage1} style={imageStyle} alt="Our Mission" />
                                <h5 className="mt-3 mb-2" style={{ color: "#2d6a4f" }}>
                                    Our Mission
                                </h5>
                                <p className="card-text" style={{ color: "#1b4332" }}>
                                    To spread awareness about protecting forests, oceans,
                                    and wildlife so future generations can enjoy a
                                    healthy planet.
                                </p>
                                <small style={{ color: "#52796f" }}>Protect • Preserve • Respect</small>
                            </div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="md:col-4 p-3">
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                                <img src={natureImage2} style={imageStyle} alt="Our Vision" />
                                <h5 className="mt-3 mb-2" style={{ color: "#2d6a4f" }}>
                                    Our Vision
                                </h5>
                                <p className="card-text" style={{ color: "#1b4332" }}>
                                    A greener world where people plant more trees, save
                                    water, and reduce pollution in everyday life.
                                </p>
                                <small style={{ color: "#52796f" }}>Green • Clean • Healthy</small>
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="md:col-4 p-3">
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                                <img src={natureImage3} style={imageStyle} alt="Join Us" />
                                <h5 className="mt-3 mb-2" style={{ color: "#2d6a4f" }}>
                                    Join Us
                                </h5>
                                <p className="card-text" style={{ color: "#1b4332" }}>
                                    Small actions make a big difference. Come together
                                    with us to keep our environment clean and thriving.
                                </p>
                                <small style={{ color: "#52796f" }}>Save Nature, Save Life!</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;