import React from 'react';
import '../../../App.css';
import styled from 'styled-components';
import { ColContent, RowContent } from '../Page';

type Props = {
    logo: string,
    title: string,
    text: string
}

export const Box = styled.div`
    background: #fff;
    margin: 8px;
    padding: 15px 8px;
    border-radius: 5px;
    width: calc(50% - 32px);
`;

const Logo = styled.img`
    width: 160px;
    height: 160px;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: calc(20px + 0.8vmin);
    margin: 5px 15px;
    font-style: normal;
    font-weight: normal;
    font-family: 'Oxygen';
    text-align: left;
`;

export const Text = styled.p`
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
            <RowContent className="mobile-col">
                <Logo src={props.logo} />
                <ColContent>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                </ColContent>
            </RowContent>
        </Box>
    );
}

export default BoxGen;