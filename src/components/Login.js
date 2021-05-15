import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div className="login_container">
			<div className="form_wrapper">
				<div className="title_container">
					<h2>
						Specs<span>Update</span>
					</h2>
					<small>Please login to see your dashboard</small>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
