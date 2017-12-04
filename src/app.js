import React, {Component} from 'react';
import {Provider} from 'react-redux';
import logo from './assets/chewbacca.svg';
import './app.css';
import SideBar from './components/sidebar';
import store from './store';
import CategoryList from './components/categorylist';

const CATEGORY_LIST = <CategoryList/>;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="flex vh-100">
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
            <SideBar className="w-20" list={CATEGORY_LIST} logo={logo}/>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div className="w-80 h-100 bg-near-white tc">
                <h1>Column Two</h1>
            </div>
        )
    }
}

export default App;
