import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
	const isLogin = useSelector((state) => state.isAuthenticated.isActive);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<ProtectedRoute
					isLogin={isLogin}
					path="/user/dashboard"
					component={Dashboard}
				/>
			</Switch>
		</Router>
	);
}

export default App;
