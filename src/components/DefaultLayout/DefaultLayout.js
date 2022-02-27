import React from "react";

import {Header, HeaderTitle, AppName} from './components'

export default function DefaultLayout({title, children}) {
    return <div>
        <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <AppName>Task tracker</AppName>
        </Header>
        <main>
            {children}
        </main>
    </div>
}
