import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #0507096d;
    padding: 1rem;
`;

function Header() {
    return (
        <StyledHeader>
            <h1>Bienvenido</h1>
        </StyledHeader>
    );
}

export default Header;
