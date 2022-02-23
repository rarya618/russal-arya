import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Content, Section, Subtitle } from './Page';

function Projects() {
    return (
        <Section className="sub-green-gradient">
            <Content>
                <Subtitle className="yellow-text">My projects</Subtitle>
            </Content>
        </Section>
    );
}

export default Projects;