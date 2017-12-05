import React, {Component} from 'react';
import PlanetList from './planetlist';
import PlanetDetail from './planetdetail';
import logo from '../assets/planet.svg';
import '../assets/transitions.css';
import {Route} from 'react-router-dom';

class Planets extends Component {

    render() {
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} className="center w3 h3 w4-l h4-l"/>
                </div>
                <div className="flex bg-near-white">
                    <Route exact path="/planets" component={PlanetList}/>
                    <Route path="/planets/:id" component={PlanetDetail}/>
                </div>
            </div>
        )
    }
}

export default Planets
