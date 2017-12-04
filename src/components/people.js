import React, {Component} from 'react';
import PeopleList from './peoplelist';
import logo from '../assets/luke-skywalker.svg';
import '../assets/transitions.css';

class People extends Component {

    render() {
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5">
                    <img src={logo} className="center w3 h3 w4-l h4-l"/>
                </div>
                <div className="flex flex-auto flex-column bg-near-white">
                    <PeopleList/>
                </div>
            </div>
        )
    }
}

export default People
