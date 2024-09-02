// src/components/organisms/CardsSection.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';

const SectionStyled = styled.section`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 0;
`;

const DivStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

function CardsSection() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error fetching data');
            })
            .then(data => setCharacters(data))
            .catch(error => console.error("Error: ", error));
    }, []);

    // Si `characters` no es un array, muestra un mensaje de error o maneja el caso.
    if (!Array.isArray(characters)) {
        return <p>No se pudieron cargar los personajes.</p>;
    }

    return (
        <DivStyled>
            <SectionStyled>
                {characters.map(character => (
                    <Card
                        key={character.id}
                        name={character.name}
                        imageUrl={character.imageUrl}
                        species={character.species}
                        status={character.status}
                    />
                ))}
            </SectionStyled>
        </DivStyled>
    );
}

export default CardsSection;