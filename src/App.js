import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import MainPage from './pages/Index';
import RegistrationPage from './pages/Registration';

import { AuthUser } from './globals/AuthUser';

function App() {
	return (
		<AuthUser>
			<Router>
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
