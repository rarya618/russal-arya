import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Landing from './Landing';
import Tools from './Tools';
import Languages from './Languages';
import Projects from './Projects';
import CallToAction from './CallToAction';

export const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
`;

export const Content = styled.div`
    margin: auto 0;
`;

export const Title = styled.h1`
    font-size: calc(48px + 1vmin);
    margin: 15px;
    font-family: 'Open Sans';
`;

export const Subtitle = styled.h2`
    font-size: calc(32px + 1vmin);
    font-family: 'Oxygen';
    margin: 15px;
`;

function Home() {
    return (
        <>
            <Landing />
            <Tools />
            <Languages />
            <Projects />
            <CallToAction />
        </>
    );
}

export default Home;