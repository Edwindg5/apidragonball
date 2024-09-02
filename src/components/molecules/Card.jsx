import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

function Card({ name, imageUrl, species, status }) {
    const CardStyled = styled.div`
        background-color: #bbbdc7;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 200px;
        margin: 1rem;
        transition: box-shadow 0.3s ease;
        text-align: center;
        &:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    `;

    return (
        <CardStyled>
            <Image src={imageUrl} alt={name} />
            <Title>{name}</Title>
            <Paragraph>Species: {species}</Paragraph>
            <Paragraph>Status: {status}</Paragraph>
        </CardStyled>
    );
}

export default Card;
