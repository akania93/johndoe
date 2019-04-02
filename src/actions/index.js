import { latter_compositions_initial_data } from "../latterCompositions";

const compositionsFetched = compositions => ({
	type: "FETCH_COMPOSITIONS_SUCCESS",
	compositions
});

export const fetchCompositions = () => (dispatch, getState) => {
	setTimeout(function(){ // Symulacja pobierania z API
		dispatch(compositionsFetched(latter_compositions_initial_data.latter_compositions)) 
	}, 3000);
};

export const toggleCompositionModal = showModal => ({
	type: "TOGGLE_COMPOSITION_MODAL",
	showModal
});

export const addComposition = (composition) => (dispatch, getState) => {
	dispatch(compositionsFetched(composition)) 
};