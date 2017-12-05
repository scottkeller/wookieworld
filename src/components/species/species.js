import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadSpecies} from '../../actions/species_actions';
import SpeciesList from './specieslist';
import SpeciesDetail from './speciesdetail';
import logo from '../../assets/greedo.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class Species extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.species.length === 0) {
            this.props.loadSpecies();
        }
    }

    render() {
        console.log("RENDER" + this.props.species);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} alt="logo" className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.species.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/species" render={() => (<SpeciesList items={this.props.species} logo={logo}/>)}/>
                        <Route path="/species/:id" render={() => (<SpeciesDetail item={this.getSelected()}/>)}/>

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
        return this.props.species.find((species) => {
            let url = species.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {species: state.species};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadSpecies: loadSpecies}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Species);
