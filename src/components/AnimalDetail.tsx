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
        <div style={isFed ? { background: 'green' } : {}}>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <p>Last Fed: {fedTime?.toLocaleString() || "Not fed yet"}</p>
            {!isFed && <button onClick={handleFeed}>Feed Animal</button>}
        </div>
    );
};

export default AnimalDetail;
