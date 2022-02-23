import React from 'react';
import '../../../App.css';

import { RowContent, Subtitle } from '../Page';
import { Area, LabelGen } from './Main';

const LanguageList = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "Bash",
    "HTML/CSS",
    "PHP",
    "SQL",
    "Swift",
    "C#"
]

type Props = {
    list: string[],
    heading?: string,
    class?: string,
}

const ListGen = (props : Props) => {
    return (
        <Area>
            <Subtitle className="yellow-text spaced">{props.heading}</Subtitle>
            <RowContent className="wrap">
                {LabelGen(props.list)}
            </RowContent>
        </Area>
    );
}

export default ListGen;