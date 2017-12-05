import React, {Component} from 'react';
import ItemList from '../itemlist';


class PlanetsList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(<ItemList data={this.props.items} to="/planets" name="Planets" logo={this.props.logo} displayname="title"/>);
    }
}

export default PlanetsList