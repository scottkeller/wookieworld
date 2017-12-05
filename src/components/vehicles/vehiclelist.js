import React, {Component} from 'react';
import ItemList from '../itemlist';


class VehiclesList extends Component {

    render() {
        return(<ItemList data={this.props.items} to="/vehicles" name="Vehicles" logo={this.props.logo} displayname="title"/>);
    }
}

export default VehiclesList