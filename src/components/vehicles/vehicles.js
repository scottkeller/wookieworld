import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadVehicles} from '../../actions/vehicle_actions';
import VehicleList from './vehiclelist';
import VehicleDetail from './vehicledetail';
import logo from '../../assets/tie_fighter.svg';
import '../../assets/transitions.css';
import {Route} from 'react-router-dom';


class Vehicles extends Component {

    constructor(props, context) {
        super(props, context);
        this.getSelected = this.getSelected.bind(this);
    }

    componentDidMount() {
        if(this.props.vehicles.length === 0) {
            this.props.loadVehicles();
        }
    }

    render() {
        console.log("RENDER" + this.props.vehicles);
        return (
            <div className="fadeinonload flex content flex-column bg-near-white tc overflow-auto">
                <div className="bg-moon-gray w-100 v5 bb">
                    <img src={logo} alt="logo" className="center w3 h3 w4-l h4-l"/>
                </div>
                {/** TODO: get around double rendering error where state is reset on page reload */}
                {this.props.vehicles.length > 0 ?
                    <div className="flex bg-near-white">

                        <Route exact path="/vehicles" render={() => (<VehicleList items={this.props.vehicles} logo={logo}/>)}/>
                        <Route path="/vehicles/:id" render={() => (<VehicleDetail item={this.getSelected()}/>)}/>

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
        return this.props.vehicles.find((vehicle) => {
            let url = vehicle.url.split("/");
            url = url.length > 1 ? url[url.length - 2] : -1;
            console.log("URL: " + this.props.match.params.id);
            return url === this.props.match.params.id;
        });
    }
}

const mapStateToProps = (state) => {
    return {vehicles: state.vehicles};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadVehicles: loadVehicles}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
