import { withRouter } from "react-router-dom";
import Nav from "./Nav";
import Aside from "./Aside";
import Map from "./Map";
import Places from "./PLaces";

const Dashboard = () => {
	return (
		<>
			<Nav />
			<main style={{ width: "100%" }}>
				<section className="main_container">
					<div className="aside_wrapper">
						<Aside />
					</div>

					<div className="main_content_wrapper">
						<Map />
						<Places />
					</div>
				</section>
			</main>
		</>
	);
};

export default withRouter(Dashboard);
