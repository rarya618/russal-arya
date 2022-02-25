import React from 'react';
import '../../../App.css';
import styled from 'styled-components';
import { ColContent, RowContent } from '../Page';
import { Button } from '../../../App';
import { Box, Title, Text } from '../tools/BoxGen';

type Props = {
    image: string,
    title: string,
    text: string,
    link: string
}


const Image = styled.img`
    width: 100%;
    margin: auto;
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