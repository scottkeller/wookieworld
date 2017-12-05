import React, {Component} from 'react';
import ItemList from '../itemlist';


class FilmsList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(<ItemList data={this.props.items} to="/films" name="Films" logo={this.props.logo} displayname="title"/>);
    }
}

export default FilmsList