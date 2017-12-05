import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPlanets} from '../actions/planet_actions';
import ItemList from './itemlist';

import Logo from '../assets/planet.svg';


class PlanetsList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.planets.length === 0) {
            this.props.loadPlanets();
        }
    }

    render() {
        return(<ItemList data={this.props.planets} to="/planets" name="Planets" logo={Logo}/>);
    }
}

const mapStateToProps = (state) => {
    return {planets: state.planets};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPlanets: loadPlanets}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsList);