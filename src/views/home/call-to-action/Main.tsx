import React from 'react';
import styled from 'styled-components';

import '../../../App.css';

import { Content, RowContent, Section, Subtitle } from '../Page';
import FormGen from './FormGen';
import { Button } from '../../../App';

const Footer = styled.footer`
	right: 0;
	bottom: 0;
	margin: 20px;
	z-index: 100;
`;

const Boxes = [
    {
        placeholder: 'Name',
        id: 'name',
        long: false
    },
    {
        placeholder: 'Purpose',
        id: 'purpose',
        long: false
    },
    {
        placeholder: 'Email',
        id: 'email',
        long: false
    },
    {
        placeholder: 'Message',
        id: 'message',
        long: true
    }
]

function CallToAction() {
    return (
        <Section className="yellow">
            <Content className="spaced small-width">
                <Subtitle className="dark-green-text">Hit me up for a project or to chat!</Subtitle>
                <RowContent className="wrap">
                    {Boxes.map((box) => {
                        return <FormGen id={box.id} placeholder={box.placeholder} isLong={box.long}/>
                    })}
                    <div className="left">
                        <Button label="Submit" color="dark-green" isFilled={true} />
                    </div>
                </RowContent>
            </Content>
            <Footer>
                <Button link="mailto:hello@russalarya.com" label="hello@russalarya.com" color="dark-green" />
				<Button link="https://github.com/russalarya-web" label="GitHub" color="dark-green" />
				<Button link="https://linkedin.com/in/russal-arya" label="LinkedIn" color="dark-green" />
				<Button link="https://twitter.com/arya_russal" label="Twitter" color="dark-green" />
			</Footer>
        </Section>
    );
}

export default CallToAction;