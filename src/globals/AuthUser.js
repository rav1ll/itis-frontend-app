import React, { createContext, useMemo, useState } from 'react';

export const UserContext = createContext({ user: null, isLoading: null });

export function AuthUser({ children }) {
	const [user, setUser] = useState({ user: null, isLoading: null });

	const value = useMemo(() => ({ ...user, setUser }), [user]);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
