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
import chewbacca from '../assets/chewbacca.svg';
import './categorylist.css';
import '../assets/transitions.css';
import {NavLink} from 'react-router-dom';


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
                <CategoryLink name={category.name} icon={icon} icononly={this.props.icononly} key={category.name}/>
            )
        })
    }

    render() {
        return (<div className="flex flex-column nowrap">
                /*Render Home Element*/
                <CategoryLink name="home" icon={chewbacca} icononly={this.props.icononly}/>
                {this.renderList()}
            </div>
        )
    }
}

class CategoryLink extends Component {
    render() {
        return (
            <NavLink to={'/' + (this.props.name === "home" ? "" : this.props.name)}
                         className="link no-underline dim pv2 ph3 pointer b f6 ttu tracked yellow left overflow-x-hidden"
                         href="#" key={this.props.name}>
            <img className="icon v-mid br1 mr2 w2 h2" src={this.props.icon} key={this.props.name}
                 alt={this.props.icon}/>
            <label className={(this.props.icononly ? "label-hide o-0" : "label-show o-1" ) + " "}
                   htmlFor={this.props.name}>{this.props.name}</label>
        </NavLink>)
    };
}

const mapStateToProps = (state) => {
    return {categories: state.categories};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadCategories: loadCategories}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);