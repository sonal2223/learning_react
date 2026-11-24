
import natureImage from '../assets/image8.jpg';

const Home = () => {
    return (
        <div>
            <section className="bg-accent">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 ">
                            <h1>Welcome to my site</h1>

                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Illum dolore nulla maxime
                                tempore repellendus, expedita labore
                                voluptatibus unde, amet cum impedit.
                                Possimus provident suscipit ea autem ab
                                fugiat, eos fuga!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum, repellendus animi.
                                Saepe, velit inventore nulla distinctio vitae
                                magnam asperiores aut quidem, ullam voluptas
                                id magni a quod consectetur quo esse?
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nostrum, repellendus animi.
                                Saepe, velit inventore nulla distinctio vitae
                                magnam asperiores aut quidem.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="col-md-6">
                            <img
                                src={natureImage}
                                className="img-fluid"
                                alt="Nature"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home