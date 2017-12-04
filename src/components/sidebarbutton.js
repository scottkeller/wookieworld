import React, {Component} from 'react'
import './sidebar';

class SideBarButton extends Component {
    render() {
        return (
            <div className="sidebar-button">
                <button className="o-0 z-9999" onMouseDown={this.props.handleMouseDown}/>
                <span className="sidebar-button-burger">
                    <span className="burger-line yellow hover-light-gray" style={{top: '0%'}}></span>
                    <span className="burger-line yellow hover-light-gray" style={{top: '40%'}}></span>
                    <span className="burger-line yellow hover-light-gray" style={{top: '80%'}}></span>
                </span>
            </div>
        )

    }
}

export default SideBarButton;