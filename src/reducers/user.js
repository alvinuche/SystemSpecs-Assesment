// grab value from local storage if any to persist user
const userProfile = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: userProfile || null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_INFO":
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
