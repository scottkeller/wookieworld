import React, {Component} from 'react';
import './sidebar.css';

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {visible: false};
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {

    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseDown(e) {
        this.toggleMenu();
    }

    render() {
        return (
            <div className="flex flex-column bg-near-black">
                <div className="head left h3">
                    <img src={this.props.logo} className="logo h3 w3 mt1" alt="avatar"/>
                </div>
                <div className="flex-auto overflow-y-auto content bt bb b--mid-gray mt2 mb2">
                    {this.props.list}
                </div>
                <div className="moon-gray tc">
                    <small className="f8 tc">© 2017 <b className="ttu">Scott Keller</b>., All Rights Reserved</small>
                </div>
            </div>

        );
    }
}

export default SideBar;