import * as actionTypes from '../constants/actionTypes';

const film_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FILMS_LOADED:
            return action.films;
        default:
            return state;

    }
};

export default film_reducer;