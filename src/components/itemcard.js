import React, {Component} from 'react';
import '../assets/transitions.css';
import {NavLink} from 'react-router-dom';
import './itemcard.css';

class ItemCard extends Component {
    render() {
        return (

            <NavLink className="link ma3" to={this.props.to}>
                <article className="hover-grow-1 center bg-dark-gray br3 pa3 pa4-ns ma3 ba b--gold bw2 shadow-5">
                    <div className=" tc">
                        <img src={this.props.logo} className="br-100 h3 w3 dib pa2" title="Star Wars Image" alt="avatar"/>
                        <h1 className="f6 mb2 yellow">{this.props.displayname}</h1>
                    </div>
                </article>
            </NavLink>
        )
    }
}

export default ItemCard;