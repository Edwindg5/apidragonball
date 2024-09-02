import React from 'react';
import styled from 'styled-components';

function Paragraph({ children }) {
    const ParagraphStyled = styled.p`
        font-size: 1rem;
        margin: 0.5rem 0;
    `;

    return <ParagraphStyled>{children}</ParagraphStyled>;
}

export default Paragraph;