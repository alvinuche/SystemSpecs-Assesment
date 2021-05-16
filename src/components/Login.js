import { useEffect } from "react";
import LoginForm from "./LoginForm";

const Login = () => {
	const getUserLocation = () => {
		function success(position) {
			const currentLocation = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			};
			if (localStorage) {
				return localStorage.setItem(
					"location",
					JSON.stringify(currentLocation)
				);
			} else {
				return "Your browser is not supported";
			}
		}

		function error() {
			console.log("an error occured");
		}

		if (!navigator.geolocation) {
			return "Geolocation is not supported by your browser";
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	useEffect(() => {
		getUserLocation();
	}, []);

	return (
		<div className="login_container">
			{/* {console.log(currentLocation)} */}
			<div className="form_wrapper">
				<div className="title_container">
					<h2>
						Specs<span>Update</span>
					</h2>
					<small>
						Please enable your location and login to see your dashboard.
					</small>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
