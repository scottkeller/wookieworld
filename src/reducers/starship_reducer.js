import * as actionTypes from '../constants/actionTypes';

const starship_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.STARSHIPS_LOADED:
            return action.starship;
        default:
            return state;

    }
};

export default starship_reducer;