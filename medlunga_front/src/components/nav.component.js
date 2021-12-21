import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    };
    render() { 
        let buttons;

        if (this.props.user) {
            buttons = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/orders'}>Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/new-order'}>New order</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'} onClick={this.handleLogout}>Logout</Link>
                    </li>
                </ul>
            );
        } else {
            buttons = (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/register'}>Sign up</Link>
                    </li>
                </ul>
            );
        }

        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Home</Link>
                    <div className="collapse navbar-collapse">
                        {buttons}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Nav;