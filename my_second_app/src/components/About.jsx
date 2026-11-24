```jsx
const About = () => {
    return (
        <>
            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="row">

                        {/* Card 1 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <img
                                    src="https://picsum.photos/400/200?random=1"
                                    className="card-img-top"
                                    alt="Card 1"
                                />

                                <div className="card-body">
                                    <h4 className="card-title">Card One</h4>

                                    <p className="card-text">
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </p>

                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <img
                                    src="https://picsum.photos/400/200?random=2"
                                    className="card-img-top"
                                    alt="Card 2"
                                />

                                <div className="card-body">
                                    <h4 className="card-title">Card Two</h4>

                                    <p className="card-text">
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </p>

                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4 mb-3">
                            <div className="card h-100">
                                <img
                                    src="https://picsum.photos/400/200?random=3"
                                    className="card-img-top"
                                    alt="Card 3"
                                />

                                <div className="card-body">
                                    <h4 className="card-title">Card Three</h4>

                                    <p className="card-text">
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </p>

                                    <a href="#" className="btn btn-primary">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
```