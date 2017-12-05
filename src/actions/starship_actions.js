import * as actionTypes from '../constants/actionTypes';
import * as starshipAPI from '../data/starshipapi';

export const loadStarships = () => {
    return dispatch => {
        return starshipAPI.getStarships()
            .then(starships => {
                dispatch(starshipsLoaded(starships));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const starshipsLoaded = (starships) => {
    return {type: actionTypes.STARSHIPS_LOADED, starships};
};