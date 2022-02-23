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

type Props = {
	label: string,
	isFilled?: boolean
};

const Button = (props: Props) => {
	const StandardButton = styled.button`
		border: solid 1px #FFD32D;
		padding: 10px 18px;
		margin: 8px;
		font-style: normal;
		font-weight: normal;
		font-family: 'Oxygen';
		font-size: calc(10px + 1vmin);
		border-radius: 5px;
	`;

	if (props.isFilled)
		return <StandardButton className="yellow dark-green-text">{props.label}</StandardButton>

	else
		return <StandardButton className="transparent yellow-text">{props.label}</StandardButton>
}

function App() {
	return (
		<div className="App">
			<Menu>
				<Button label="Tools" />
				<Button label="Languages" />
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
