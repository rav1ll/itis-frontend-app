import React, { createContext, useContext, useMemo, useReducer } from 'react';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/authKeys';

const INITIAL_STATE = { user: null, isLoading: null };

const UserContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				isLoading: true
			};
		case 'loaded':
			localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
			localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
			return {
				user: action.payload.me,
				isLoading: false
			};
		case 'logout':
			localStorage.removeItem(ACCESS_TOKEN);
			localStorage.removeItem(REFRESH_TOKEN);
			return INITIAL_STATE;
		default:
			return state;
	}
}

export function AuthUser({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useAuthUser() {
	return useContext(UserContext);
}
