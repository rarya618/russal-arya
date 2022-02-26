import React from 'react';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';

import './App.css';
import Home from './views/home/Page';

const Menu = styled.nav`
	position: absolute;
	right: 0;
	margin: 15px 20px;
`;

const StandardButton = styled.button`
	border: solid 1px;
	padding: 10px 18px;
	margin: 8px;
	font-style: normal;
	font-weight: normal;
	font-family: 'Oxygen';
	font-size: calc(10px + 1vmin);
	border-radius: 5px;
`;

type Props = {
	label: string,
	color?: string,
	isFilled?: boolean,
	link?: string,
	isClickable?: boolean
};

export const Button = (props: Props) => {
	var color: string;

	if (props.color) {
		color = props.color;
	} else {
		color = "yellow";
	}

	function getClickableClass(isClickable: boolean | undefined) {
		if (isClickable) {
			return "clickable ";
		}

		return "";
	}

	function getClassForButton(isFilled: boolean | undefined, color: string) {
		if (isFilled) {
			if (color === "dark-green") {
				return color + " yellow-text";
			}

			return color + " dark-green-text";
		}

		return "transparent " + color + "-text";
	}
	
	return (
		<a href={props.link}>
			<StandardButton 
				className={
					getClickableClass(props.isClickable) 
					+ getClassForButton(props.isFilled, color)
				}
			>
				{props.label}
			</StandardButton>
		</a>
	)
}

function App() {
	return (
		<div className="App">
			<Menu>
				<Button label="Tools" />
				<Button label="Skills" />
				<Button label="Projects" />
				<Button label="Profile" isFilled={true} />
			</Menu>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
