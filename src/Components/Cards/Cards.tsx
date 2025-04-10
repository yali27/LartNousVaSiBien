import React from "react";
import "./cards.css";
import { CardProps } from "../Types/type";



const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={imageSrc} alt={title} className="card-image" />
            {description && <p>{description}</p>}
            <button type="button" className="card-button" onClick={() => alert(`Vous avez cliqué sur ${title}`)}>
                Explorer
            </button>
        </div>
    );
};

export default Card;