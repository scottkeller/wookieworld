import React, {Component} from 'react';
import ItemDetail from '../itemdetail';
import {Redirect} from 'react-router-dom';


class FilmsDetail extends Component {

    render() {
        return (this.props.item) ? <ItemDetail data={this.props.item} displayname={this.props.item.title}/> : <Redirect to={"/404"}/>;
    }
}

export default FilmsDetail