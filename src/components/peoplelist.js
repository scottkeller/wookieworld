import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPeople} from '../actions/people_actions';
import ItemList from './itemlist';

import Logo from '../assets/luke-skywalker.svg';


class PeopleList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.loadPeople();
        }
    }

    render() {
        return(<ItemList data={this.props.people} to="/people" name="People" logo={Logo}/>);
    }
}

const mapStateToProps = (state) => {
    return {people: state.people};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPeople: loadPeople}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);