import * as actionTypes from '../constants/actionTypes';

const vehicle_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.VEHICLES_LOADED:
            return action.vehicles;
        default:
            return state;

    }
};

export default vehicle_reducer;