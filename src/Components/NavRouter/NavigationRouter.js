import * as React from 'react';
import { Route } from 'react-router-dom';

export const NavigationRouter = ({ component: Component, ...propList }) => {
	return (
		<Route
			exact={propList.exact}
			render={() => {
				window.scrollTo(0, 0);
				return <Component {...propList} />;
			}}
		/>
	);
};
