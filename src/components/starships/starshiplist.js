import React, {Component} from 'react';
import ItemList from '../itemlist';


class StarshipsList extends Component {

    render() {
        return(<ItemList data={this.props.items} to="/starships" name="Starships" logo={this.props.logo} displayname="title"/>);
    }
}

export default StarshipsList