import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavigationRouter } from '../NavRouter/NavigationRouter';
import Home from '../Home/Home';
import Environment from '../Environment/Environment';
import Contact from '../Contact/Contact';

const Router = () => {
	const routes = (
		<Switch>
			<NavigationRouter exact path='/' component={Home} />
			<NavigationRouter exact path='/kornyezet' component={Environment} />
			<NavigationRouter exact path='/kapcsolat' component={Contact} />
			<Redirect to='/' />
		</Switch>
	);
	return <Layout>{routes}</Layout>;
};

export default Router;
