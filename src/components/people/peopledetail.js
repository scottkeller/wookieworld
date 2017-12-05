import React, {Component} from 'react';
import ItemDetail from '../itemdetail';
import {Redirect} from 'react-router-dom';


class PeopleDetail extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (this.props.item) ? <ItemDetail data={this.props.item} displayname={this.props.item.name}/> : <Redirect to={"/404"}/>;
    }
}

export default PeopleDetail