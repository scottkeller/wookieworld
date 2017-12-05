import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPeople} from '../actions/people_actions';
import ItemDetail from './itemdetail';


class PeopleDetail extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.loadPeople();
        }
    }

    render() {
        const person = this.props.people.find((person) => {
            let url = person.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + url);
            return url === this.props.match.params.id;
        });


        return (person) ? <ItemDetail data={person}/> : null;
    }
}

const mapStateToProps = (state) => {
    return {people: state.people};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPeople: loadPeople}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);