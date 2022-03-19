import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthUser } from 'globals/AuthUser';

import LoginPage from 'pages/Login';
import MainPage from 'pages/Index';
import RegistrationPage from 'pages/Registration';

function App() {
	return (
		<AuthUser>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/registration'} element={<RegistrationPage />} />
				</Routes>
			</Router>
		</AuthUser>
	);
}

export default App;
