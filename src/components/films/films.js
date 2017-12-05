import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadFilms} from '../../actions/film_actions';
import FilmList from './filmlist';
import FilmDetail from './filmdetail';
import logo from '../../assets/star-wars.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class Films extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.films.length === 0) {
            this.props.loadFilms();
        }
    }

    render() {
        console.log("RENDER" + this.props.films);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.films.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/films" render={() => (<FilmList items={this.props.films} logo={logo}/>)}/>
                        <Route path="/films/:id" render={() => (<FilmDetail item={this.getSelected()}/>)}/>

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
        return this.props.films.find((film) => {
            let url = film.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {films: state.films};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadFilms: loadFilms}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
