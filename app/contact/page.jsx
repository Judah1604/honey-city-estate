import "../Styles/components/contact.css";

function Contact() {
    return (
        <div className="container my-3 contact-container">
            <h1>Contact Us</h1>
            <p className="text-center">
                Please fill out the form below to contact us.
            </p>
            <div className="contact row mt-4">
                <div className="contact-info col-md-3">
                    <p>123 Main Street, AnyTown USA</p>
                    <p>(123) 456-7891</p>
                    <p>example@emailprovider.com</p>
                </div>
                <form
                    action="#"
                    className="container col-md-8"
                    name="Contact Form"
                >
                    <div className="p-2 form-group">
                        <label htmlFor="name">
                            <i class="fa-solid fa-user-large"></i>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
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
                    <div className="p-2 form-group">
                        <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
