import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import '../../../App.css';

import { Content, RowContent, Section, Subtitle } from '../Page';
import FormGen from './FormGen';
import { Button } from '../../../App';
import { db } from '../../../firebase/config';

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
        placeholder: 'Email*',
        id: 'email',
        long: false
    },
    {
        placeholder: 'Message*',
        id: 'message',
        long: true
    }
]


const Form = () => {
    const [submitted, setSubmitted] = useState<{name: string, email: string} | undefined>();

    const saveAnswer = (event: FormEvent) => {
        event.preventDefault();

        // @ts-ignore
        const elementsArray = [...event.target.elements];

        const formData = elementsArray.reduce((acc, element) => {
            if (element.id) {
                acc[element.id] = element.value;
            }

            return acc;
        }, {});

        if (formData.email !== '') {
            if (formData.message !== '') {
                db.collection("FormResponses").add(formData);
                console.log("Thank you " + formData.name + ". We'll be in touch.");
                setSubmitted({name: formData.name, email: formData.email});
            }
            else {
                alert("Please enter a message.")
            }
        }

        else {
            alert("Please enter an email.")
        }
    }

    if (submitted)
        return <Subtitle className="dark-green-text">{"Thank you " + submitted.name + " for your message. We'll be in touch at " + submitted.email + "."}</Subtitle>
    
    else
        return (
            <>
                <Subtitle className="dark-green-text">Hit me up for a project or to chat!</Subtitle>
                <RowContent className="wrap">
                    <form onSubmit={saveAnswer}>
                        {Boxes.map((box) => {
                            return <FormGen id={box.id} placeholder={box.placeholder} isLong={box.long}/>
                        })}
                        <div className="left">
                            <Button isClickable={true} label="Submit" color="dark-green" isFilled={true} />
                            <span>*Required</span>
                        </div>
                    </form>
                </RowContent>
            </>
        )
}

function CallToAction() {
    return (
        <Section className="yellow">
            <Content className="spaced small-width">
                <Form />
            </Content>
            <Footer>
                <Button isClickable={true} link="mailto:hello@russalarya.com" label="hello@russalarya.com" color="dark-green" />
                <Button isClickable={true} link="https://github.com/russalarya-web" label="GitHub" color="dark-green" />
                <Button isClickable={true} link="https://linkedin.com/in/russal-arya" label="LinkedIn" color="dark-green" />
                <Button isClickable={true} link="https://twitter.com/arya_russal" label="Twitter" color="dark-green" />
            </Footer>
        </Section>
    );
}

export default CallToAction;