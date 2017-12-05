import * as actionTypes from '../constants/actionTypes';
import * as planetAPI from '../data/planetapi';

export const loadPlanets = () => {
    return dispatch => {
        return planetAPI.getPlanets()
            .then(planets => {
                dispatch(planetsLoaded(planets));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const planetsLoaded = (planets) => {
    return {type: actionTypes.PLANETS_LOADED, planets};
};