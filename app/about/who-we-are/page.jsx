import Image from "next/image";
import "../../Styles/components/utils.css";

function page() {
    return (
        <div className="container mt-2 mb-5 about">
            <h1>Who we are</h1>
            <div className="row container mt-4 who-we-are">
                <div className="col-md-5">
                    <Image
                        src={"/images/suited.jpg"}
                        alt="Suited man"
                        width={200}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className="col-md-5 text">
                    Introducing Honey City Estate, your dream destination for
                    luxurious living! Nestled right next to the prestigious Pan
                    Atlantic University in Eleko, this exquisite estate is the
                    epitome of elegance and convenience.
                    <p>
                        Imagine owning a piece of paradise, with spacious landed
                        properties ranging from 300 to 500 square meters.
                        Whether you're looking to build your dream home or
                        invest in a thriving community, Honey City Estate has it
                        all.
                    </p>
                    <p>
                        Picture waking up to breathtaking views, surrounded by
                        lush greenery and serene landscapes. With
                        state-of-the-art amenities and top-notch security, you
                        can enjoy a life of comfort and tranquility.
                    </p>
                    <p>
                        Our estate offers a variety of recreational facilities,
                        including a swimming pool, a fitness center, and
                        beautifully landscaped gardens, perfect for unwinding
                        after a long day. Additionally, we have dedicated spaces
                        for children to play, ensuring that every member of your
                        family can enjoy their own slice of happiness.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page;
