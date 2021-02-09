import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Premier Soccer League</span>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;