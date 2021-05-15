export const userInfo = (data) => {
	return {
		type: "USER_INFO",
		payload: data,
	};
};

export const isAuthenticated = (data) => {
	return {
		type: "LOG_IN",
		payload: data,
	};
};
