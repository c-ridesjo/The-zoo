import React, { useState } from 'react';
import { Animal } from '../models/Animals';
import { Link } from 'react-router-dom';
import fallbackImage from '../assets/404.jpg';

interface AnimalBoxProps {
    animal: Animal;
}

const AnimalBox: React.FC<AnimalBoxProps> = ({ animal }) => {
    const [imageFailed, setImageFailed] = useState(false);

    const handleImageError = () => {
        setImageFailed(true);
    };

    const imgSrc = imageFailed ? fallbackImage : animal.imageUrl;

    return (
        <Link to={`/animal/${animal.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="animal-box">
                <h2>{animal.name}</h2>
                <img className="img" src={imgSrc} alt={animal.name} onError={handleImageError}/>
                <p>{animal.shortDescription}</p>
            </div>
        </Link>
    );
}

export default AnimalBox;
