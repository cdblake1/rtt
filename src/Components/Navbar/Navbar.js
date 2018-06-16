import React, { Component } from 'react';
import './Navbar.css';
import NavItem from './NavItem/NavItem';

class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container justify-content-between d-flex">
                        <a className="navbar-brand branding">Remember The Times</a>

                        <ul className="navbar-nav mx-auto">
                            <NavItem link="#" title="Home" />
                            <NavItem link="#" title="Explore" />
                            <NavItem link="#" title="Featured" />
                        </ul>
                        <ul className="navbar-nav nav-sign-up flex-row-reverse">
                            <NavItem link="#" title="Sign Up" />
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
