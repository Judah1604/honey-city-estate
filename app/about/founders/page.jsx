import "../../Styles/components/utils.css";
import Image from "next/image";

function Founders() {
    return (
        <div className="container my-4">
            <h1>Our Founders</h1>
            <div className="founders mt-4">
                <div className="founder row mb-5">
                    <div className="col-md-4">
                        <Image
                            src={"/images/chairman.png"}
                            alt="Chairman"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className="text col-md-5">
                        <h2>John Doe</h2>
                        <p className="position fs-6">CEO of XYZ</p>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus aut quos ipsam ullam harum
                            reiciendis consequuntur explicabo omnis molestias,
                            odio iusto impedit voluptate, totam quo? Vero a
                            dolorum natus dignissimos. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Dolorum ab
                            doloremque ipsum quod quas. Molestiae?
                        </p>
                    </div>
                </div>
                <div className="founder row mb-5 reverse">
                    <div className="col-md-4">
                        <Image
                            src={"/images/chairman.png"}
                            alt="Chairman"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className="text col-md-5">
                        <h2>John Doe</h2>
                        <p className="position fs-6">CEO of XYZ</p>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus aut quos ipsam ullam harum
                            reiciendis consequuntur explicabo omnis molestias,
                            odio iusto impedit voluptate, totam quo? Vero a
                            dolorum natus dignissimos. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Dolorum ab
                            doloremque ipsum quod quas. Molestiae?
                        </p>
                    </div>
                </div>
                <div className="founder row mb-5">
                    <div className="col-md-4">
                        <Image
                            src={"/images/chairman.png"}
                            alt="Chairman"
                            width={500}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className="text col-md-5">
                        <h2>John Doe</h2>
                        <p className="position fs-6">CEO of XYZ</p>
                        <p className="fs-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus aut quos ipsam ullam harum
                            reiciendis consequuntur explicabo omnis molestias,
                            odio iusto impedit voluptate, totam quo? Vero a
                            dolorum natus dignissimos. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Dolorum ab
                            doloremque ipsum quod quas. Molestiae?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders;
