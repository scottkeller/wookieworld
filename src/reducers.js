import {combineReducers} from 'redux';
import categories from './reducers/category_reducer';
import people from './reducers/people_reducer';
import planets from './reducers/planet_reducer';
import films from './reducers/film_reducer';
import species from './reducers/species_reducer';
import vehicles from './reducers/vehicle_reducer';
import starships from './reducers/starship_reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({categories, people, planets, films, species, vehicles, starships, routing: routerReducer});