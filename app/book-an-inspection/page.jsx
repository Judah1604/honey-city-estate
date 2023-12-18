import Image from "next/image";
import "../Styles/components/contact.css";

function BookInspection() {
    return (
        <div className="container my-4 inspection contact-container">
            <h1>Book an Inspection</h1>
            <p className="text-center">You can book an inspection here.</p>
            <form
                action="#"
                className="container col-md-8"
                name="Book an Inspection Form"
            >
                <div className="p-2 form-group">
                    <label htmlFor="name">
                        <i class="fa-solid fa-user-large"></i>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                    />
                </div>
                <div className="p-2 form-group">
                    <label htmlFor="email">
                        <i class="fa-solid fa-envelope"></i>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="p-2 form-group">
                    <label htmlFor="phone-number">
                        <i class="fa-solid fa-phone"></i>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="phone-number"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="p-2 form-group open">
                    <label htmlFor="dateOfInspection">Date of Inspection</label>
                    <input
                        className="form-control"
                        type="date"
                        name="Date of Inspection"
                        id="dateOfInspection"
                    />
                </div>
                <div className="p-2 form-group">
                    <label htmlFor="timeOfInspection">
                        <i class="fa-solid fa-clock"></i>
                    </label>

                    <input
                        className="form-control"
                        type="text"
                        name="Time of Inspection"
                        id="timeOfInspection"
                        placeholder="Time of Inspection"
                    />
                </div>
                <div className="p-2 form-group open">
                    <label htmlFor="estate">Estate to be inspected</label>
                    <select name="estate" id="estate" className="form-control">
                        <option value=""></option>
                        <option value="Honey City Estate 1">
                            Honey City Estate 1
                        </option>
                        <option value="Honey City Estate 2">
                            Honey City Estate 2
                        </option>
                    </select>
                </div>
                <button type="submit" className="btn btn-dark mt-2">
                    Submit
                </button>
            </form>
            <div className="container features my-3">
                <h1>Features</h1>
                <div className="content">
                    <div className="feature">
                        <i class="fa-solid fa-plug-circle-bolt"></i>
                        24 hours power supply
                    </div>
                    <div className="feature">
                        <i class="fa-solid fa-road"></i>
                        Good road network
                    </div>
                    <div className="feature">
                        <i class="fa-solid fa-road-barrier"></i>
                        External Perimeter fence
                    </div>
                    <div className="feature">
                        <i class="fa-solid fa-arrow-up-from-water-pump"></i>
                        Good Drainage System
                    </div>
                    <div className="feature">
                        <i class="fa-solid fa-solar-panel"></i>
                        Solar street light
                    </div>
                    <div className="feature">
                        <Image
                            src="/icons/cctv.svg"
                            alt="cctv"
                            width={60}
                            height={60}
                        />
                        CCTV
                    </div>
                </div>
            </div>
            <div
                className="carousel slide mt-4 preview"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="content row justify-content-center">
                            <Image
                                className="col-md-5"
                                src="/images/estate (1).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                            <Image
                                className="col-md-5"
                                src="/images/estate (2).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="content row justify-content-center">
                            <Image
                                className="col-md-5"
                                src="/images/estate (3).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                            <Image
                                className="col-md-5"
                                src="/images/estate (4).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="content row justify-content-center">
                            <Image
                                className="col-md-5"
                                src="/images/estate (5).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                            <Image
                                className="col-md-5"
                                src="/images/estate (6).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="content row justify-content-center">
                            <Image
                                className="col-md-5"
                                src="/images/estate (7).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                            <Image
                                className="col-md-5"
                                src="/images/estate (8).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="content row justify-content-center">
                            <Image
                                className="col-md-5"
                                src="/images/estate (9).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                            <Image
                                className="col-md-5"
                                src="/images/estate (10).jpeg"
                                alt="Honey City Estate"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookInspection;
