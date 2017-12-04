import React, {Component} from 'react';
import {Provider} from 'react-redux';
import logo from './assets/chewbacca.svg';
import './app.css';
import SideBar from './components/sidebar';
import store from './store';


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
            <SideBar />
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div className="flex flex-auto flex-column h-100 bg-near-white tc">
               <div className="flex z-999 bg-moon-gray">
                   <div class="flex center">
                       <div class="">
                           <img src={logo} className="w5-l h5-l w3 h3"/>
                       </div>

                   </div>




               </div>
                <div className="flex flex-auto flex-column z-1 bg-near-white">
                    <p class="f2-ns center lh-copy bb">Welcome to Wookie World</p>
                    <p>foljopdgfjaogjfdopsdjfg</p>
                </div>
            </div>
        )
    }
}

export default App;
