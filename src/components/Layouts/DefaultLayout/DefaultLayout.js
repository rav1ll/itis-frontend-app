import React from 'react';

import { Header, HeaderTitle, AppName, Content, MainPage } from './components';

export default function DefaultLayout({ title, children }) {
	return (
		<Content>
			<Header>
				<HeaderTitle>{title}</HeaderTitle>
				<AppName>Task tracker</AppName>
			</Header>
			<MainPage>{children}</MainPage>
		</Content>
	);
}
