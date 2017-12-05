import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPlanets} from '../../actions/planet_actions';
import PlanetList from './planetlist';
import PlanetDetail from './planetdetail';
import logo from '../../assets/planet.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class Planets extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.planets.length === 0) {
            this.props.loadPlanets();
        }
    }

    render() {
        console.log("RENDER" + this.props.planets);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.planets.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/planets" render={() => (<PlanetList items={this.props.planets} logo={logo}/>)}/>
                        <Route path="/planets/:id" render={() => (<PlanetDetail item={this.getSelected()}/>)}/>

                    </div>
                    :
                    <div className="flex bg-near-white">
                        SOMETHING WENT WRONG
                    </div>

                }
            </div>
        )
    }

    getSelected(){
        return this.props.planets.find((planet) => {
            let url = planet.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {planets: state.planets};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPlanets: loadPlanets}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
