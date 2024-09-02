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
            .then(data => setCharacters(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <DivStyled>
            <SectionStyled>
                {characters.map(character => (
                    <Card
                        key={character.id}
                        name={character.name}
                        src={character.image}
                        status={character.status}
                        species={character.species}
                        origin={character.origin}
                        location={character.location}
                    />
                ))}
            </SectionStyled>
        </DivStyled>
    );
}

export default CardsSection;
