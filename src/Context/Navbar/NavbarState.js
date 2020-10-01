import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer';
import { SET_ACTIVE } from '../types';

const NavbarState = (props) => {
	const initialState = {
		active: false,
	};

	const [state, dispatch] = useReducer(navbarReducer, initialState);

	//toggle active
	const set_active = (active) => {
		dispatch({
			type: SET_ACTIVE,
			payload: active,
		});
	};

	return (
		<NavbarContext.Provider
			value={{
				active: state.active,
				set_active,
			}}
		>
			{props.children}
		</NavbarContext.Provider>
	);
};

export default NavbarState;
