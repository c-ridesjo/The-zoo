import React, { useEffect, useState } from 'react';
import AnimalBox from '../components/AnimalBox';
import { Animal } from '../models/Animals';


const HomePage: React.FC = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        async function fetchAndStoreAnimals() {
            
            const storedAnimals = localStorage.getItem('animals');  // Check if data is in localStorage
            
            if (storedAnimals) {
                setAnimals(JSON.parse(storedAnimals));
            } else {
                try {
                    const response = await fetch('https://animals.azurewebsites.net/api/animals');
                    const data = await response.json();
                    setAnimals(data);
                    
                    localStorage.setItem('animals', JSON.stringify(data));  // Save to localStorage
                } catch (error) {
                    console.error("Failed to fetch animals:", error);
                }
            }
        }

        fetchAndStoreAnimals();
    }, []);

    return (
        <div className="container">
            {animals.map(animal => (
                <AnimalBox key={animal.id} animal={animal} />
            ))}
        </div>
    );
}

export default HomePage
