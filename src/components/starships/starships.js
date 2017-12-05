import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadStarships} from '../../actions/starship_actions';
import StarshipList from './starshiplist';
import StarshipDetail from './starshipdetail';
import logo from '../../assets/death-star.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class Starships extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.starships.length === 0) {
            this.props.loadStarships();
        }
    }

    render() {
        console.log("RENDER" + this.props.starships);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} alt="logo" className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.starships.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/starships" render={() => (<StarshipList items={this.props.starships} logo={logo}/>)}/>
                        <Route path="/starships/:id" render={() => (<StarshipDetail item={this.getSelected()}/>)}/>

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
        return this.props.starships.find((starship) => {
            let url = starship.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {starships: state.starships};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadStarships: loadStarships}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
