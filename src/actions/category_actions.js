import * as actionTypes from '../constants/actionTypes';
import * as categoryAPI from '../data/categoryapi';

export const loadCategories = () => {
    return dispatch => {
        return categoryAPI.getCategories()
            .then(categories => {
                dispatch(categoriesLoaded(categories));
            })
            .catch(error => {
                throw(error);
            })
    };
};

export const categoriesLoaded = (categories) => {
    return {type: actionTypes.CATEGORIES_LOADED, categories};
};