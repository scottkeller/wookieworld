import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from './components/app';

const Root = (props) => (<Router>
        <Route path="/" component={App}/>
    </Router>
);

export default Root;