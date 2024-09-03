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
            .then(response => response.json())
            .then(data => {
                setCharacters(data.items);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <DivStyled>
            <SectionStyled>
                {Array.isArray(characters) && characters.map(character => (
                    <Card
                        key={character.id}
                        name={character.name}
                        imageUrl={character.image}
                        ki={character.ki}
                        maxKi={character.maxKi}
                        race={character.race}
                        gender={character.gender}
                    />
                ))}
            </SectionStyled>
        </DivStyled>
    );
}

export default CardsSection;
