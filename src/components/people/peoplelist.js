import React, {Component} from 'react';
import ItemList from '../itemlist';


class PeopleList extends Component {

    render() {
        return(<ItemList data={this.props.items} to="/people" name="People" logo={this.props.logo} displayname="name"/>);
    }
}

export default PeopleList