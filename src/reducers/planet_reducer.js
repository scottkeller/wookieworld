import * as actionTypes from '../constants/actionTypes';

const planet_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.PLANETS_LOADED:
            return action.planets;
        default:
            return state;

    }
};

export default planet_reducer;