import React from 'react';
import '../../../App.css';
import styled from 'styled-components';
import { ColContent, RowContent } from '../Page';
import { Button } from '../../../App';

type Props = {
    image: string,
    title: string,
    text: string,
    link: string
}

const Box = styled.div`
    background: #fff;
    margin: 8px;
    padding: 15px 8px;
    border-radius: 5px;
    width: calc(50% - 32px);
`;

const Image = styled.img`
    width: 100%;
    margin: auto;
`;

const Title = styled.h2`
    font-size: calc(20px + 0.8vmin);
    margin: 5px 15px;
    font-style: normal;
    font-weight: normal;
    font-family: 'Oxygen';
    text-align: left;
`;

const Text = styled.p`
    font-size: calc(14px + 0.6vmin);
    margin: 5px 15px;
    font-style: normal;
    font-weight: normal;
    font-family: 'Oxygen';
    text-align: left;
`;

const BoxGen = (props: Props) => {
    return (
        <Box className="mobile-full">
            <ColContent>
                <Image src={props.image} />
                <ColContent className="light-gray padded dark-green-text">
                    <RowContent>
                        <Title>{props.title}</Title>
                        <Text className="middle-right">{props.link}</Text>
                    </RowContent>
                    <Text>{props.text}</Text>
                    <div className="left">
                        <Button label="Read More" color="dark-green" />
                    </div>
                </ColContent>
            </ColContent>
        </Box>
    );
}

export default BoxGen;