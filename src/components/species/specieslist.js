import React, {Component} from 'react';
import ItemList from '../itemlist';


class SpeciesList extends Component {

    render() {
        return(<ItemList data={this.props.items} to="/species" name="Species" logo={this.props.logo} displayname="title"/>);
    }
}

export default SpeciesList