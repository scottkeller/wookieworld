import * as actionTypes from '../constants/actionTypes';

const people_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.PEOPLE_LOADED:
            return action.people;
        default:
            return state;

    }
};

export default people_reducer;