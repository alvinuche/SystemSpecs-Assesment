export const points = [
	{
		place_id:
			"EjJNYWlubGFuZCBIb3NwaXRhbCBSZCwgQWJ1bGUgaWplc2hhLCBMYWdvcywgTmlnZXJpYSIuKiwKFAoSCR3QKHVUjDsQEaYuaj4AwoIQEhQKEgkRqH-FVYw7EBH1Go094ZQpug",
		title: "Mainland Hospital Rd",
		lat: 6.5222693,
		lng: 3.3767577,
	},
	{
		place_id: "ChIJQ0Pd4PuMOxARzRsieo_O_l0",
		title: "Unilag Gate (Akoka Road)",
		lat: 6.517816,
		lng: 3.3844864,
	},
	{
		place_id: "ChIJJc0BKQaNOxARw0JDwQOKBw0",
		title: "3 Adifase St, Bariga",
		lat: 6.5348349,
		lng: 3.3821961,
	},
	{
		place_id: "ChIJY9Gi_q2NOxARb9ZFAFA3jEs",
		title: "5 Isaac John St, Igbobi",
		lat: 6.5295418,
		lng: 3.3694195,
	},
	{
		place_id: "ChIJY9Gi_q2NOxARb9ZFAFA3jEs",
		title: "155 Edmund Cres, Jibowu",
		lat: 6.5152975,
		lng: 3.3706807,
	},
];

export function getCoodinate() {
	let coodPoints = [];

	points.map(({ lat, lng, place_id, title }) => {
		coodPoints.push({
			longitude: lng,
			latitude: lat,
			place_id,
			title,
		});
		return null;
	});
	return coodPoints;
}
