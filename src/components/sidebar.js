import React, {Component} from 'react';
import './sidebar.css';
import CategoryList from './categorylist';
import SideBarButton from './sidebarbutton';

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
        console.log(this.state.visible);
    }

    handleMouseDown(e) {
        this.toggleMenu();
    }

    render() {
        return (

            <div
                className={(this.state.visible ? "w5 sidebar-open" : "w3 sidebar-closed") + " flex flex-column h-100 bg-near-black relative"}>
                <div className="head left h3">
                    <div className="absolute pa3">
                        <SideBarButton handleMouseDown={this.handleMouseDown}/>
                    </div>
                </div>
                <nav className="flex-auto overflow-y-auto content bt bb b--mid-gray mt2 mb2">
                    <CategoryList icononly={!this.state.visible}/>
                </nav>
                <div
                    className={(this.state.visible ? "o-100 sidebar-footer-show" : "o-0 sidebar-footer-hide" ) + " h3 moon-gray tc"}>

                    <small className="nowrap f8 tc">© 2017 <b className="ttu">Scott Keller</b>
                        <br/>
                        All Rights Reserved
                    </small>

                </div>
            </div>

        );

    }
}

export default SideBar;