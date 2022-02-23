import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Content, Section, Subtitle, Title } from './Page';

function Landing() {
    return (
        <Section className="green-gradient">
            <Content>
                <Title className="yellow-text">Russal Arya</Title>
                <Subtitle className="yellow-text">Designer at Heart. Developer by Passion.</Subtitle>
            </Content>
        </Section>
    );
}

export default Landing;