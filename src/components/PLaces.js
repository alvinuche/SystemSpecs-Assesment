import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserGeoLocation } from "../data/api";
import sortByDistance from "sort-by-distance";
import { coodPoints } from "../data/data";

const Places = () => {
	// getting the user's location from store
	const userData = useSelector((state) => state.user.user.user);
	// const points = getCoodinate();

	const [userGeoLocation, setUserGeoLocation] = useState({
		latitude: "",
		longitude: "",
	});
	const [closestDistance, setClosestDistance] = useState([]);

	const getAddress = () => {
		getUserGeoLocation(userData.address).then((data) => {
			if (data) {
				const opts = {
					yName: "latitude",
					xName: "longitude",
				};
				const { lat, lng } = data.results[0].geometry.location;
				setUserGeoLocation({ latitude: lat, longitude: lng });

				let distances = sortByDistance(userGeoLocation, coodPoints, opts);
				let sortedDistances = distances.reverse();
				setClosestDistance(sortedDistances);
			}
		});
	};

	useEffect(() => {
		getAddress();
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
