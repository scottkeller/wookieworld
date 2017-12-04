import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadCategories} from "../actions/category_actions";
import luke from '../assets/luke-skywalker.svg';
import deathstar from '../assets/death-star.svg';
import greedo from '../assets/greedo.svg';
import starwars from '../assets/star-wars.svg';
import planet from '../assets/planet.svg';
import tiefighter from '../assets/tie_fighter.svg';
import r2 from '../assets/r2d2.svg';
import './categorylist.css';


class CategoryList extends Component {

    constructor(props, context) {
        super(props, context);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        if (this.props.categories.length === 0) {
            this.props.loadCategories();
        }
    }

    renderList() {

        return this.props.categories.map((category) => {
            let icon;
            switch (category.name) {
                case 'people':
                    icon = luke;
                    break;
                case 'starships':
                    icon = deathstar;
                    break;
                case 'species':
                    icon = greedo;
                    break;
                case 'films':
                    icon = starwars;
                    break;
                case 'planets':
                    icon = planet;
                    break;
                case 'vehicles':
                    icon = tiefighter;
                    break;
                default:
                    icon = r2;
            }
            return (
                <a className="link no-underline pointer b f6 ttu tracked yellow" href="#" key={category.name}>
                    <li className="nowrap category-list-item v-top ph3 pv2 w-100 dim" key={category.name}>


                        <img className="icon v-mid br1 w2 h2 mr2" src={icon} key={category.name}
                             alt={category.icon}/>
                        <label className={(this.props.icononly ? "o-0 label-hide" : "label-show o-100") + " pointer"} htmlFor={category.name}>{this.props.icononly ? "" : category.name}</label>
                    </li>
                </a>

            )
        })
    }

    render() {
        return (
            <ul className="category-list list center pa0">
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadCategories: loadCategories}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);