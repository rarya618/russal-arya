import React from 'react';
import '../../App.css';
import styled from 'styled-components';

import Landing from './Landing';
import Tools from './tools/Main';
import Skills from './skills/Main';
import Projects from './projects/Main';
import CallToAction from './call-to-action/Main';

export const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

export const ColContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
`;

export const Content = styled.div`
    margin: auto;
    padding: 30px 15px;
    max-width: 1080px;
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
            <Skills />
            <Projects />
            <CallToAction />
        </>
    );
}

export default Home;