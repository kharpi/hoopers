import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router/Router';
import Normalize from 'react-normalize';
import './index.css';

ReactDOM.render(
	<div className='app'>
		<Normalize />
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);
