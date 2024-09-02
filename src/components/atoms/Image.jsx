import React from 'react';
import styled from 'styled-components';

function Image({ src, alt }) {
    const ImageStyled = styled.img`
        border-radius: 50%;
        margin-bottom: 1rem;
        width: 150px;
        height: 150px;
    `;

    return <ImageStyled src={src} alt={alt} />;
}

export default Image;

