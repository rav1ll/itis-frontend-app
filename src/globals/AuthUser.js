import React, { createContext, useContext, useMemo, useReducer } from 'react';

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
			return {
				user: action.payload,
				isLoading: false
			};
		case 'logout':
			return {
				...state,
				user: null
			};
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
