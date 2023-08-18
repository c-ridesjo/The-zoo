import React from 'react';
import { Animal } from '../models/Animals';
import { Link } from 'react-router-dom';

interface AnimalBoxProps {
    animal: Animal;
}

const AnimalBox: React.FC<AnimalBoxProps> = ({ animal }) => {
    return (
        <Link to={`/animal/${animal.id}`} className="animal-box">
            <div>
                <h2>{animal.name}</h2>
                <img className="img" src={animal.imageUrl} alt={animal.name} />
                <p>{animal.description}</p>
            </div>
        </Link>
    );
}



export default AnimalBox;
