import { useSelector } from "react-redux";

const Nav = () => {
	const userData = useSelector((state) => state.user.user.user);

	return (
		<nav id="nav">
			<div className="nav_container">
				<div>
					<h3 className="title">
						Specs<span className="span">Update</span>
					</h3>
				</div>

				<div className="user_container">
					<div className="img_container">
						<img src="/user.svg" alt="user" width="15px" />
					</div>
					<div>
						<p>{userData.user.firstName}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
