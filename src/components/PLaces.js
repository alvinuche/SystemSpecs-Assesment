import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import sortByDistance from "sort-by-distance";
import { getCoodinate } from "../data/data";

const Places = () => {
	// getting the user's location from store
	const userData = useSelector((state) => state.user.user.user);
	const points = getCoodinate();

	const [closestDistance, setClosestDistance] = useState([]);

	function getLocations() {
		const getGeoLocation = localStorage.getItem("location")
			? JSON.parse(localStorage.getItem("location"))
			: { latitude: 6.526776, longitude: 3.3849411 };

		const opts = {
			yName: "latitude",
			xName: "longitude",
		};

		// let currentGeoLocation = userGeoLocation.latitude
		let distances = sortByDistance(getGeoLocation, points, opts);
		return setClosestDistance(distances);
	}

	useEffect(() => {
		getLocations();
	}, []);

	return (
		<div>
			<br />
			<div>
				<h1>Welcome {userData.user.lastName}!</h1>
				<p>
					Hope you are doing great today. Please kindly hover on the marker(on
					the map) to see places near you.
				</p>
			</div>
			<br />
			<br />
			<div>
				<h3>Places near you</h3>
				{closestDistance.length > 0 &&
					closestDistance.map(({ title, distance }) => (
						<p key={distance} className="user_places">
							{title}
						</p>
					))}
			</div>
		</div>
	);
};

export default Places;
