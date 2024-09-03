import React from 'react';
import styled from 'styled-components';

function Image({ src, alt }) {
    const ImageStyled = styled.img`
        border-radius: 8px;
        margin-bottom: 1rem;
        width: 100%;
        height: auto;
        object-fit: cover; 
        max-height: 200px; 
    `;

    return <ImageStyled src={src} alt={alt} />;
}

export default Image;
