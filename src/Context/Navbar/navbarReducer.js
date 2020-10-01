import { SET_ACTIVE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_ACTIVE:
			return {
				...state,
				active: action.payload,
			};
		default:
			return state;
	}
};
