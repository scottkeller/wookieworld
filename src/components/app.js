import React, {Component} from 'react';
import {Provider} from 'react-redux';
import logo from '../assets/chewbacca.svg';
import './app.css';
import SideBar from './sidebar';
import People from './people';
import Planets from './planets';
import store from '../store';
import {Route, Switch} from 'react-router-dom';
import '../assets/transitions.css';
import NotFound from './notfound';

class App extends Component {
    render() {
        console.log("Rendering");
        return (
            <Provider store={store}>
                <div className="flex vh-100 vw-100">
                    <SideNav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/people" component={People}/>
                        <Route path="/people/:id" component={People}/>
                        <Route exact path="/planets" component={Planets}/>
                        <Route path="/planets/:id" component={Planets}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </Provider>
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
                    <img src={logo} className="center w4 h4 w5-l h5-l"/>
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
