import React, {Component} from 'react'
import './sidebar';
import './sidebar.css';

class SideBarButton extends Component {
    render() {
        return (
            <div className="sidebar-button dim pointer" onClick={this.props.handleMouseDown}>
                <div className="sidebar-button-inner bg-yellow mt2 br4"></div>
                <div className="sidebar-button-inner bg-yellow mt2 br4"></div>
                <div className="sidebar-button-inner bg-yellow mt2 br4"></div>
            </div>
        )

    }
}

export default SideBarButton;