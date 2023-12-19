import Image from "next/image";
import "../app/Styles/components/utils.css";

function Estate() {
    return (
        <>
            <div className="estate">
                <h1 className="mt-3 text-center">Our Projects</h1>
                <div class="carousel slide mt-4 mb-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="content row">
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (1).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (2).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="content row">
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (3).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (4).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="content row">
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (5).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (6).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="content row">
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (7).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (8).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="content row">
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (9).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <Image
                                        className="col-md-5"
                                        src="/images/estate (10).jpeg"
                                        alt="Honey City Estate"
                                        width={500}
                                        height={500}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="poster text-center row">
                <div className="text col-md-8">
                    <h2 className="mt-2">Why wait?</h2>
                    <h2>Join us and achieve something great.</h2>
                    <h1>Have a taste of paradise.</h1>
                    <div className="images row">
                        <Image
                            className="col-md-4"
                            src={"/images-fake/luxury.jpg"}
                            alt="House"
                            width={500}
                            height={500}
                            layout="resposive"
                        />
                        <Image
                            className="col-md-4"
                            src={"/images-fake/luxury.jpg"}
                            alt="House"
                            width={500}
                            height={500}
                            layout="resposive"
                        />
                        <Image
                            className="col-md-4"
                            src={"/images-fake/luxury.jpg"}
                            alt="House"
                            width={500}
                            height={500}
                            layout="resposive"
                        />
                    </div>
                </div>
                <div className="img col-md-3">
                    <Image
                        className="mt-3"
                        src="/images/poster.jpeg"
                        alt="Poster"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                    <a
                        href="/book-an-inspection"
                        className="btn btn-dark icon-left my-3"
                    >
                        <i class="fa-solid fa-binoculars"></i> Book an
                        Inspection
                    </a>
                </div>
            </div>
        </>
    );
}

export default Estate;
