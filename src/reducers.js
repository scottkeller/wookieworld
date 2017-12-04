import {combineReducers} from 'redux';
import categories from './reducers/category_reducer';
import people from './reducers/people_reducer';

export default combineReducers({categories, people});