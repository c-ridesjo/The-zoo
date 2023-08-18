import React from 'react';
import { Animal } from '../models/Animals';


interface AnimalBoxProps {
    animal: Animal;
}

const AnimalBox: React.FC<AnimalBoxProps> = ({ animal }) => {
    return (
        <div className="animal-box">
            <h2>{animal.name}</h2>
            <img className="img" src={animal.imageUrl} alt={animal.name} />
            <p>{animal.description}</p>
        </div>

    );
}



export default AnimalBox;
