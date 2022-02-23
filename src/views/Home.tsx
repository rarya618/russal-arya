import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Section = styled.section`
    background: linear-gradient(180deg, #085E7D 15.62%, #4E9F3D 98.44%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
`;

const Content = styled.div`
    margin: auto 0;
`;

const Title = styled.h1`
    color: #FFD32D;
    font-size: calc(48px + 1vmin);
    margin: 15px;
    font-family: 'Open Sans';
`;

const Subtitle = styled.h2`
    color: #FFD32D;
    font-size: calc(32px + 1vmin);
    font-family: 'Oxygen';
    margin: 15px;
`;

function Home() {
    return (
        <Section>
            <Content>
                <Title>Russal Arya</Title>
                <Subtitle>Designer at Heart. Developer by Passion.</Subtitle>
            </Content>
        </Section>
    );
}

export default Home;