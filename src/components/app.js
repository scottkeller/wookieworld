import React, {Component} from 'react';
import logo from '../assets/chewbacca.svg';
import './app.css';
import SideBar from './sidebar/sidebar';
import People from './people/people';
import Planets from './planets/planets';
import Films from './films/films';
import Species from './species/species';
import Vehicles from './vehicles/vehicles';
import Starships from './starships/starships';
import {Route, Switch} from 'react-router-dom';
import '../assets/transitions.css';
import NotFound from './notfound';

class App extends Component {
    render() {
        console.log("Rendering");
        return (

            <div className="flex vh-100 vw-100">
                <SideNav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/people" component={People}/>
                    <Route path="/people/:id" component={People}/>
                    <Route exact path="/planets" component={Planets}/>
                    <Route path="/planets/:id" component={Planets}/>
                    <Route exact path="/films" component={Films}/>
                    <Route path="/films/:id" component={Films}/>
                    <Route exact path="/species" component={Species}/>
                    <Route path="/species/:id" component={Species}/>
                    <Route exact path="/vehicles" component={Vehicles}/>
                    <Route path="/vehicles/:id" component={Vehicles}/>
                    <Route exact path="/starships" component={Starships}/>
                    <Route path="/starships/:id" component={Starships}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

class SideNav extends Component {
    render() {
        return (
            <SideBar/>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5">
                    <img src={logo} alt="logo" className="center w4 h4 w5-l h5-l"/>
                </div>
                <div className="flex flex-auto flex-column bg-near-white">
                    <p className="f2-ns center lh-copy measure">Welcome to Wookie World! Your source for all <b
                        className="ttu yellow bg-near-black">Star Wars</b> related info. Chose a category from the left
                        menu to get started.</p>
                </div>
            </div>
        )
    }
}

export default App;
