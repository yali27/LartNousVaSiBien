interface CardProps {
    title: string;
    imageSrc: string;
    description?: string;
}

interface Props extends CardProps {
    onRemove: () => void; // Fonction pour supprimer une carte
}

const Card: React.FC<Props> = ({ title, imageSrc, onRemove }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <button onClick={onRemove} className="remove-card-icon" title="Supprimer">
                    ✖
                </button>
            </div>
            <img src={imageSrc} alt={title} className="card-image" />
        </div>
    );
};

export default Card;