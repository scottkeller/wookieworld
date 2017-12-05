import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPlanets} from '../actions/planet_actions';
import ItemDetail from './itemdetail';


class PlanetsDetail extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.planets.length === 0) {
            this.props.loadPlanets();
        }
    }

    render() {
        const person = this.props.planets.find((person) => {
            let url = person.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + url);
            return url === this.props.match.params.id;
        });


        return (person) ? <ItemDetail data={person}/> : null;
    }
}

const mapStateToProps = (state) => {
    return {planets: state.planets};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPlanets: loadPlanets}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsDetail);