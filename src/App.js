import Login from "./pages/Login";
import Index from "./pages/Index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthUser } from "./globals/AuthUser";

function App () {
  return (
    <AuthUser>
      <Router>
        <Routes>
          <Route path={"/"} element={<Index/>}/>
          <Route path={"/login"} element={<Login/>}/>
        </Routes>
      </Router>
    </AuthUser>
  );
}

export default App;
