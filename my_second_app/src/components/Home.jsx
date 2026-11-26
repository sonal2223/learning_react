import natureImage from "../assets/image8.jpg";

const Home = () => {
    return (
        <div>
            <section
                id="home"
                style={{
                    background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
                    padding: "50px 0",
                    scrollMarginTop: "70px",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="md:col-6 p-4" style={{ color: "#1b4332" }}>
                            <h1 style={{ color: "#2d6a4f", fontWeight: "800" }}>
                                Welcome to Nature World
                            </h1>

                            <p>
                                Nature is the most beautiful gift to our planet.
                                It includes green forests, beautiful mountains,
                                rivers, oceans, plants, and wildlife.
                            </p>

                            <p>
                                Nature provides us with fresh air, clean water,
                                food, and shelter. It plays an important role
                                in maintaining the balance of our ecosystem.
                            </p>

                            <p>
                                Protecting nature is our responsibility.
                                We should plant more trees, save water,
                                reduce pollution, and protect animals.
                            </p>

                            <p>
                                Let's come together to keep our environment
                                clean, green, and healthy for future generations.
                                Save Nature, Save Life!
                            </p>

                            <a
                                href="#about"
                                style={{
                                    display: "inline-block",
                                    backgroundColor: "#2d6a4f",
                                    color: "#ffffff",
                                    padding: "10px 26px",
                                    borderRadius: "25px",
                                    textDecoration: "none",
                                    fontWeight: "600",
                                    marginTop: "8px",
                                }}
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="md:col-6 p-4" style={{ textAlign: "center" }}>
                            <img
                                src={natureImage}
                                alt="Nature"
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    height: "auto",
                                    borderRadius: "20px",
                                    border: "6px solid #ffffff",
                                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;