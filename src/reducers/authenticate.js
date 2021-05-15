// grab value from local storage if any to persist user
const userLogin = JSON.parse(localStorage.getItem("isActive"));

const initialState = {
	isActive: userLogin || false,
};

const authenticateReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOG_IN":
			return {
				...state,
				isActive: action.payload,
			};

		default:
			return state;
	}
};

export default authenticateReducer;
