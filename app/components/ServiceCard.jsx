import Image from "next/image";

function ServiceCard({ image, title, text }) {
    return (
        <div className="card col-md-4">
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                layout="responsive"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
