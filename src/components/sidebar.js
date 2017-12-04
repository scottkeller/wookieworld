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

            <aside
                className={(this.state.visible ? "sidebar-open " : "sidebar-closed ") + " sidebar flex flex-column bg-near-black overflow-hidden"}>
                <div className="head left h3">
                    <div className=" pa3">
                        <SideBarButton handleMouseDown={this.handleMouseDown}/>
                    </div>
                </div>
                <nav className="flex flex-column flex-auto content bt bb b--mid-gray mt2 mb2">
                    <CategoryList icononly={!this.state.visible}/>
                </nav>

            </aside>

        );

    }
}

export default SideBar;