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
                <a className="link no-underline dim pv2 ph3 pointer b f6 ttu tracked yellow left overflow-x-hidden" href="#" key={category.name}>
                    <img className="icon v-mid br1 mr2 w2 h2" src={icon} key={category.name}
                             alt={category.icon}/>
                    <label className={(this.props.icononly ? "label-hide o-0" : "label-show o-1" ) + " "} htmlFor={category.name}>{category.name}</label>
                </a>

            )
        })
    }

    render() {
        return (<div className="flex flex-column nowrap">{this.renderList()}</div>)
    }
}

const mapStateToProps = (state) => {
    return {categories: state.categories};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadCategories: loadCategories}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);