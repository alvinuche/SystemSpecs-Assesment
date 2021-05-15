export const getUserGeoLocation = (address) => {
	return fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_USER_KEY}`
	)
		.then((response) => {
			if (!response.ok) {
				throw Error("Could not fetch user");
			} else {
				return response.json();
			}
		})
		.catch((err) => console.log(err));
};
