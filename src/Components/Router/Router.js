import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavigationRouter } from '../NavRouter/NavigationRouter';
import Home from '../Home/Home';

const Router = () => {
	const routes = (
		<Switch>
			<NavigationRouter exact path='/' component={Home} />
			<Redirect to='/' />
		</Switch>
	);
	return <Layout>{routes}</Layout>;
};

export default Router;
