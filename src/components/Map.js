import React, { useState, useEffect } from "react";
import { points } from "../data/data";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "../map.css";

export default function Map() {
	const [newPoints, setNewPoints] = useState({
		place_id: "User's Location",
		title: "Your Location",
		lat: "",
		lng: "",
	});

	function getLocation() {
		const getGeoLocation = localStorage.getItem("location")
			? JSON.parse(localStorage.getItem("location"))
			: { lat: 6.526776, lng: 3.3849411 };

		setNewPoints((prevValue) => {
			return [
				{
					...prevValue,
					lat: getGeoLocation.latitude || getGeoLocation.lat,
					lng: getGeoLocation.longitude || getGeoLocation.lng,
				},
				...points,
			];
		});
	}

	useEffect(() => {
		getLocation();
	}, []);
	return (
		<>
			<section className="map">
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.REACT_APP_USER_KEY,
					}}
					defaultCenter={{
						lat: localStorage.getItem("location")
							? JSON.parse(localStorage.getItem("location")).latitude
							: 6.526776,
						lng: localStorage.getItem("location")
							? JSON.parse(localStorage.getItem("location")).longitude
							: 3.3849411,
					}}
					defaultZoom={12}
				>
					{Array.isArray(newPoints) &&
						newPoints.map(({ lat, lng, place_id, title }) => {
							return (
								<Marker
									key={title}
									lat={lat}
									lng={lng}
									// text={place_id}
									tooltip={title}
								/>
							);
						})}
				</GoogleMapReact>
			</section>
		</>
	);
}
