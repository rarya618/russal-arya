import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Content, Section, Subtitle } from './Page';

function Languages() {
    return (
        <Section className="dark-green-gradient">
            <Content>
                <Subtitle className="yellow-text">Languages</Subtitle>
            </Content>
        </Section>
    );
}

export default Languages;