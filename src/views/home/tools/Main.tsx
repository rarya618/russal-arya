import React from 'react';
import '../../../App.css';

import figmaLogo from '../../../resources/figma-logo.png';
import vsCodeLogo from '../../../resources/vs-code-logo.png';
import notionLogo from '../../../resources/notion-logo.png';
import braveLogo from '../../../resources/brave-logo.png';
import mongoDBLogo from '../../../resources/mongodb-logo.png';
import firebaseLogo from '../../../resources/firebase-logo.png';

import { Content, RowContent, Section, Subtitle } from '../Page';
import BoxGen from './BoxGen';
import { Button } from '../../../App';

const Boxes = [
    {logo: figmaLogo, title: 'Figma', text: "What I like most about Figma is that it allows me to quickly design and ideate new iterations in real time. It helps that I can get quick feedback by just sharing a link."},
    {logo: vsCodeLogo, title: 'VS Code', text: "VS Code is simply amazing. The variety of languages it supports, the amazing error detection, auto-indentation, and customization make it my favourite choice."},
    {logo: notionLogo, title: "Notion", text: "Notion is where I plan my projects and track my progress. It makes working in teams too easy. I also use it for accounting, proving how powerful it actually is."},
    {logo: braveLogo, title: "Brave", text: "With privacy at its core, Brave is a great browser I use to test my apps. As it is based on Chromium, testing on Brave guarantees that it will work well on Chrome."},
    {logo: mongoDBLogo, title: "MongoDB Atlas", text: "I’ve been using NoSQL databases for a while, and while I haven’t had a chance to try all of them, Atlas is my favourite, due to the simplicity of the interface."},
    {logo: firebaseLogo, title: "Firebase", text: "Firebase is a great way of getting a basic project running due to its serverless hosting. It also boasts of a great authentication system, at a very attractive price."}
]

function Tools() {
    return (
        <Section className="green">
            <Content className="spaced">
                <Subtitle className="white-text">What tools do I use?</Subtitle>
                <RowContent className="wrap">
                    {Boxes.map((box) => {
                        return <BoxGen logo={box.logo} title={box.title} text={box.text}/>
                    })}
                </RowContent>
                <Button label="View All" color="white" />
            </Content>
        </Section>
    );
}

export default Tools;