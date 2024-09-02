import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #f8f9fa;
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
