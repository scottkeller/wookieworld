import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPeople} from '../actions/people_actions';
import PeopleCard from './peoplecard';


class PeopleList extends Component {

    constructor(props, context) {
        super(props, context);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        if (this.props.people.length === 0) {
            this.props.loadPeople();
        }
    }

    renderList() {

        return this.props.people.map((person) => {

            return (
                <PeopleCard data={person.name} key={person.name}/>

            )
        })
    }

    render() {
        return (
            <div className="flex flex-wrap justify-center people-list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {people: state.people};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPeople: loadPeople}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);