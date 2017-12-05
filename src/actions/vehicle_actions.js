import * as actionTypes from '../constants/actionTypes';
import * as vehicleAPI from '../data/vehicleapi';

export const loadVehicles = () => {
    return dispatch => {
        return vehicleAPI.getVehicles()
            .then(vehicles => {
                dispatch(vehiclesLoaded(vehicles));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const vehiclesLoaded = (vehicles) => {
    return {type: actionTypes.VEHICLES_LOADED, vehicles};
};