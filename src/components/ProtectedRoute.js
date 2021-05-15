import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLogin, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				// check login === true else redirect
				if (isLogin) {
					return <Component />;
				} else {
					return (
						<Redirect to={{ pathname: "/", state: { from: props.location } }} />
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
