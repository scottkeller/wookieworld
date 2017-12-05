import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, browserHistory} from 'react-router-dom';
import App from './components/app';

import store from './store';

const Root = (props) => (<Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
);

export default Root;