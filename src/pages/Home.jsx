import React from 'react';
import styled from 'styled-components';
import CardsSection from '../components/organisms/CardsSection';
import Header from '../components/atoms/Header';

function Home() {
    const MainContainer = styled.div`
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    `;

    return (
        <MainContainer>
            <Header />
            <CardsSection />
        </MainContainer>
    );
}

export default Home;