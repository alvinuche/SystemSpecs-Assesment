import React from "react";
import { points } from "../data/data";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "../map.css";

export default function Map() {
	return (
		<>
			<section className="map">
				<GoogleMapReact
					bootstrapURLKeys={{
						key: process.env.REACT_APP_USER_KEY,
					}}
					defaultCenter={{ lat: 6.526776, lng: 3.3849411 }}
					defaultZoom={14}
				>
					{points.map(({ lat, lng, place_id, title }) => {
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
