import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router/Router';
import Normalize from 'react-normalize';
import './index.css';
import NavbarState from './Context/Navbar/NavbarState';

ReactDOM.render(
	<div className='app'>
		<Normalize />
		<NavbarState>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</NavbarState>
	</div>,
	document.getElementById('root')
);
