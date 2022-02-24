import React from 'react';
import '../../../App.css';

import { RowContent, Subtitle } from '../Page';
import { Area, LabelGen } from './Main';

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