import * as actionTypes from '../constants/actionTypes';

const species_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SPECIES_LOADED:
            return action.species;
        default:
            return state;

    }
};

export default species_reducer;