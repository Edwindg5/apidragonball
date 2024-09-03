import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

function Card({ name, imageUrl, ki, maxKi, race, gender }) {
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

    const ImageStyled = styled.img`
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 1rem;
    `;

    return (
        <CardStyled>
            <ImageStyled src={imageUrl} alt={name} />
            <Title>{name}</Title>
            <Paragraph>Ki: {ki}</Paragraph>
            <Paragraph>Max Ki: {maxKi}</Paragraph>
            <Paragraph>Race: {race}</Paragraph>
            <Paragraph>Gender: {gender}</Paragraph>
        </CardStyled>
    );
}

export default Card;
