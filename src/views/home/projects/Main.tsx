import React from 'react';
import '../../../App.css';

import sharyaAcademyView from '../../../resources/projects/sharya-academy.png';
import writerStudioView from '../../../resources/projects/writerstudio.png';

import { Content, RowContent, Section, Subtitle } from '../Page';
import BoxGen from './BoxGen';
import { Button } from '../../../App';

const Boxes = [
    {
        image: sharyaAcademyView, 
        title: 'Sharya Academy', 
        text: "An LMS for Indian high school students to improve their understanding of the course work. Currently, an initial version of the project is deployed. The login system is currently under development.",
        link: "sharyaacademy.com"
    },
    {
        image: writerStudioView, 
        title: 'WriterStudio', 
        text: "An all in one writing app to serve a writer’s needs, for all stages of the writing process. I am building the screenwriting section right now for the MVP which I’ll test among users to better understand their needs.",
        link: "writerstudio.app"
    }
]

function Projects() {
    return (
        <Section className="sub-green-gradient">
            <Content className="spaced">
                <Subtitle className="yellow-text">My projects</Subtitle>
                <RowContent className="wrap">
                    {Boxes.map((box) => {
                        return <BoxGen image={box.image} title={box.title} text={box.text} link={box.link}/>
                    })}
                </RowContent>
                <Button label="View All" color="white" />
            </Content>
        </Section>
    );
}

export default Projects;