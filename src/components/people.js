import React, {Component} from 'react';
import PeopleList from './peoplelist';
import PeopleDetail from './peopledetail';
import logo from '../assets/luke-skywalker.svg';
import '../assets/transitions.css';
import {Route} from 'react-router-dom';

class People extends Component {

    render() {
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} className="center w3 h3 w4-l h4-l"/>
                </div>
                <div className="flex bg-near-white">
                    <Route exact path="/people" component={PeopleList}/>
                    <Route path="/people/:id" component={PeopleDetail}/>
                </div>
            </div>
        )
    }
}

export default People
