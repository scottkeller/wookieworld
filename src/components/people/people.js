import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadPeople} from '../../actions/people_actions';
import PeopleList from './peoplelist';
import PeopleDetail from './peopledetail';
import logo from '../../assets/luke-skywalker.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class People extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.people.length === 0) {
            this.props.loadPeople();
        }
    }

    render() {
        console.log("RENDER" + this.props.people);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} alt="logo" className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.people.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/people" render={() => (<PeopleList items={this.props.people} logo={logo}/>)}/>
                        <Route path="/people/:id" render={() => (<PeopleDetail item={this.getSelected()}/>)}/>

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
        return this.props.people.find((person) => {
            let url = person.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {people: state.people};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPeople: loadPeople}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
