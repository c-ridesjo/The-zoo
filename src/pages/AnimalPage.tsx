import React, { useEffect, useState } from 'react';
import { Animal } from '../models/Animals';

import { useParams } from 'react-router-dom';
import AnimalDetail from '../components/AnimalDetail';

const AnimalPage: React.FC = () => {
    const [animal, setAnimal] = useState<Animal | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const storedAnimals: Animal[] = JSON.parse(localStorage.getItem('animals') || '[]');
        const fetchedAnimal = storedAnimals.find(a => a.id.toString() === id);
        setAnimal(fetchedAnimal || null);
    }, [id]);

    return (
        <div>
            {animal && <AnimalDetail animal={animal} />}
        </div>
    );
};

export default AnimalPage;
