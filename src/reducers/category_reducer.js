import * as actionTypes from '../constants/actionTypes';

const category_reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_LOADED:
            return action.categories;
        default:
            return state;

    }
};

export default category_reducer;