import React, {Component} from 'react';
import './sidebar.css';
import CategoryList from '../categories/categorylist';
import SideBarButton from './sidebarbutton';

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {visible: false};
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.innerWidth > 800 ? this.toggleMenu() : null;
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

            <aside
                className={(this.state.visible ? "sidebar-open " : "sidebar-closed ") + " sidebar flex flex-column bg-near-black overflow-hidden br b--mid-gray"}>
                <div className="head left h3">
                    <div className=" pa3">
                        <SideBarButton handleMouseDown={this.handleMouseDown}/>
                    </div>
                </div>
                <nav className="flex flex-column flex-auto content bt bb b--mid-gray mt2 mb2">
                    <CategoryList icononly={!this.state.visible}/>
                </nav>
                <footer class={(this.state.visible ? "fadein-opacity o-0" : "fadeout-opacity o-1" ) + "flex flex-column bottom-0 h4 tc overflow-x-hidden nowrap"}>
                    <small class= "db mid-gray mb2 ">Design By: Scott Keller</small>
                    <div className="ttu b2 ">
                           <a href="mailto:scott.keller2390@gmail.com" title="Email" class="moon-gray link f6 fw1 dib dim">Email</a>
                        <br/>
                           <a target="_blank" href="http://www.linkedin.com/in/scottjameskeller"    title="LinkedIn" class="moon-gray link f6 fw1 dib dim">LinkedIn</a>
                    <br/>
                        <a target="_blank" href="https://github.com/scottkeller/wookieworld"  title="Source" class="moon-gray link f6 fw1 dib dim">Source</a>
                    </div>


                </footer>

            </aside>

        );

    }
}

export default SideBar;