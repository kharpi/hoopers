import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router/Router';
import './index.css';

ReactDOM.render(
	<div className='app'>
		{/* Header */}
		<BrowserRouter>
			<Router />
		</BrowserRouter>
		{/* Footer */}
	</div>,
	document.getElementById('root')
);
