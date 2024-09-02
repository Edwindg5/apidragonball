import React from 'react';
import styled from 'styled-components';

function Title({ children }) {
    const TitleStyled = styled.h2`
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    `;

    return <TitleStyled>{children}</TitleStyled>;
}

export default Title;