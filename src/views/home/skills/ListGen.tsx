import React from 'react';
import styled from 'styled-components';
import '../../../App.css';

import { Subtitle } from '../Page';
import { Area, LabelGen } from './Main';

const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    text-align: center;
`;

type Props = {
    list: string[],
    heading?: string,
    class?: string,
}

const ListGen = (props : Props) => {
    return (
        <Area>
            <Subtitle className="yellow-text spaced">{props.heading}</Subtitle>
            <RowContent className="wrap center">
                {LabelGen(props.list)}
            </RowContent>
        </Area>
    );
}

export default ListGen;