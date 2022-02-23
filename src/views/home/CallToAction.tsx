import React from 'react';
import styled from 'styled-components';
import '../../App.css';

import { Content, Section, Subtitle, Title } from './Page';

function CallToAction() {
    return (
        <Section className="yellow">
            <Content>
                <Subtitle className="dark-green-text">Send me a message</Subtitle>
            </Content>
        </Section>
    );
}

export default CallToAction;