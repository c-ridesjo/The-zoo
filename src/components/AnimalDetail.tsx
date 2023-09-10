import React, { useState } from 'react';
import { Animal } from '../models/Animals';

interface Props {
    animal: Animal;
}

const AnimalDetail: React.FC<Props> = ({ animal }) => {
    const [fedTime, setFedTime] = useState<Date | null>(animal.fedTime ? new Date(animal.fedTime) : null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(!!animal.fedTime);

    const handleFeed = () => {
        const currentFedTime = new Date();
        setFedTime(currentFedTime);
        setIsButtonDisabled(true);

        const storedAnimals: Animal[] = JSON.parse(localStorage.getItem('animals') || '[]');
        const updatedAnimals = storedAnimals.map(storedAnimal => 
            storedAnimal.id === animal.id ? { ...storedAnimal, fedTime: currentFedTime } : storedAnimal
        );

        localStorage.setItem('animals', JSON.stringify(updatedAnimals));
    };

    return (
        <div style={fedTime ? { background: 'rgb(181, 241, 155'} : {}} className="animal-detail" >
            <h2>{animal.name}</h2>
            <p>{animal.longDescription}</p>
            <p className='status-fed'>Senast matad: 
                {fedTime ? <span className="fed-time">{fedTime.toLocaleString()}</span> : <span className="not-fed">Ej fått mat</span>}
            </p>

            <button onClick={handleFeed} disabled={isButtonDisabled}>Mata djur</button>
        </div>
    );
};

export default AnimalDetail;
