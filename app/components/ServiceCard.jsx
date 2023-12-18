import React from "react";

function ServiceCard({image, title, text}) {
    return (
        <div className="card col-md-4">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
