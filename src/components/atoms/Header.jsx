import React from 'react';
import styled from 'styled-components';

function Header() {
    const HeaderStyled = styled.header`
        font-size: 2rem;
        margin: 2rem 0;
        color: #fff;
    `;

    return (
        <HeaderStyled>
            Dragon Ball Characters
        </HeaderStyled>
    );
}

export default Header;
