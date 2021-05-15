import { useSelector } from "react-redux";

const Aside = () => {
	const userData = useSelector((state) => state.user.user.user);

	return (
		<aside>
			<div className="aside_content">
				{/* {console.log(userData)} */}
				<p className="user_details">
					<span>
						<img src="/user2.svg" alt="user" width="20px" />
					</span>{" "}
					{userData.fullName}
				</p>
				<p className="user_details">
					<span>
						<img src="/home.svg" alt="address" width="20px" />
					</span>{" "}
					{userData.address}
				</p>
				<p className="user_details">
					<span>
						<img src="/email.svg" alt="email" width="20px" />
					</span>{" "}
					{userData.user.email}
				</p>
				<p className="user_details">
					<span>
						<img src="/call.svg" alt="phone number" width="20px" />
					</span>{" "}
					{userData.phoneNumber}
				</p>
			</div>
		</aside>
	);
};

export default Aside;
