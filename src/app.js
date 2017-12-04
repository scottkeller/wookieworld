import React, {Component} from 'react';
import {Provider} from 'react-redux';
import logo from './assets/chewbacca.svg';
import './app.css';
import SideBar from './components/sidebar';
import PeopleList from './components/peoplelist';
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="flex vh-100 vw-100">
                    <SideNav/>
                    <Content/>
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

class Content extends Component {
    render() {
        return (
            <div className="flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5">
                    <img src={logo} className="center w4 h4 w5-l h5-l"/>
                </div>
                <div className="flex flex-auto flex-column bg-near-white">
                    <p className="f2-ns center lh-copy bb">Welcome to Wookie World</p>
                    <PeopleList/>
                </div>
            </div>
        )
    }
}

export default App;
