import { actionTypes } from "./actions";

const initialState = {
	subredditsData: {}
};

export const homeReducer = (state = initialState, action) => {
	switch (action.type){
		case actionTypes.FETCH_SUBREDDITS:
			return {
				...state,
				subredditsData: action.payload
			};
		default:
			return state;
	}
}