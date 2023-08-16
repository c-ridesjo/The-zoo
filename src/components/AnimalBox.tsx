import React from 'react';
import { Animal } from '../models/Animals';

interface AnimalBoxProps {
    animal: Animal;
}

const AnimalBox: React.FC<AnimalBoxProps> = ({ animal }) => {
    return (
        <div className = "animal-box">
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <img className="img" src={animal.imageUrl} alt={animal.name} />
        </div>
    );
}

export default AnimalBox;
