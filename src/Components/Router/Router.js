import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavigationRouter } from '../NavRouter/NavigationRouter';
import Home from '../Home/Home';
import e404 from '../e404/e404';

const Router = () => {
	const routes = (
		<Switch>
			<NavigationRouter exact path='/' component={Home} />
			<NavigationRouter exact path='/404' component={e404} />
			<Redirect to='/404' />
		</Switch>
	);
	return <Layout>{routes}</Layout>;
};

export default Router;
