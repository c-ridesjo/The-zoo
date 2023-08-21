import React, { useState } from 'react';
import { Animal } from '../models/Animals';

interface Props {
    animal: Animal;
}

const AnimalDetail: React.FC<Props> = ({ animal }) => {
    const [isFed, setIsFed] = useState(false);
    const [fedTime, setFedTime] = useState<Date | null>(null);

    const handleFeed = () => {
        setIsFed(true);
        setFedTime(new Date());
    };

    return (
        <div style={isFed ? { background: 'rgb(181, 241, 155'} : {}} className="animal-detail" >
            <h2>{animal.name}</h2>
            <p>{animal.longDescription}</p>
            <p className='status-fed'>Senast matad: 
                {fedTime ? <span className="fed-time">{fedTime.toLocaleString()}</span> : <span className="not-fed">Ej fått mat</span>}
            </p>

            {!isFed && <button onClick={handleFeed}>Mata djur</button>}
        </div>
    );
};

export default AnimalDetail;
