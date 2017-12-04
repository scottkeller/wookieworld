import * as actionTypes from '../constants/actionTypes';
import * as peopleAPI from '../data/peopleapi';

export const loadPeople = () => {
    return dispatch => {
        return peopleAPI.getPeople()
            .then(people => {
                dispatch(peopleLoaded(people));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const peopleLoaded = (people) => {
    return {type: actionTypes.PEOPLE_LOADED, people};
};