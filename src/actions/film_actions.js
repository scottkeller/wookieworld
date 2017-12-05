import * as actionTypes from '../constants/actionTypes';
import * as filmAPI from '../data/filmapi';

export const loadFilms = () => {
    return dispatch => {
        return filmAPI.getFilms()
            .then(films => {
                dispatch(filmsLoaded(films));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const filmsLoaded = (films) => {
    return {type: actionTypes.FILMS_LOADED, films};
};