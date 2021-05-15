import { useState } from "react";
import { useDispatch } from "react-redux";
import { userInfo, isAuthenticated } from "../actions";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
	const dispatch = useDispatch();

	// initial state of inputs
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
		rememberMe: true,
	});
	const [error, setError] = useState(null);
	const [redirect, setRedirect] = useState(false);

	// destructure state
	const { username, password } = inputs;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputs((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await fetch("https://wallet.remita.net/api/authenticate", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputs),
			});
			if (!res.ok) {
				throw Error("Could not fetch user");
			} else {
				// destructure data
				const data = await res.json();
				const isActive = data.user.user.activated;

				localStorage.setItem("user", JSON.stringify(data));
				localStorage.setItem("isActive", JSON.stringify(isActive));

				dispatch(userInfo(data));
				dispatch(isAuthenticated(isActive));

				setError(null);
				setRedirect(true);
			}
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			{error && <div className="error_msg">{error}</div>}
			{redirect && <Redirect to="/user/dashboard" />}
			<div className="input_wrapper">
				<label htmlFor="username" className="label">
					Username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					required
					onChange={handleChange}
				/>
			</div>

			<div className="input_wrapper">
				<label htmlFor="password" className="label">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					required
					onChange={handleChange}
				/>
			</div>

			<div className="input_wrapper">
				<label htmlFor="rememberme" className="label">
					Remember me
				</label>
				<input
					type="checkbox"
					name="rememberMe"
					id="rememberme"
					checked
					readOnly
					className="checkbox"
				/>
			</div>
			<button type="submit" className="btn">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
