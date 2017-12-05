import * as actionTypes from '../constants/actionTypes';
import * as speciesAPI from '../data/speciesapi';

export const loadSpecies = () => {
    return dispatch => {
        return speciesAPI.getSpecies()
            .then(species => {
                dispatch(speciesLoaded(species));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const speciesLoaded = (species) => {
    return {type: actionTypes.SPECIES_LOADED, species};
};