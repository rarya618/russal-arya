import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Content, Section, Subtitle } from './Page';

function Tools() {
    return (
        <Section className="green">
            <Content>
                <Subtitle className="white-text">What tools do I use?</Subtitle>
            </Content>
        </Section>
    );
}

export default Tools;