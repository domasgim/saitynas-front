import React, {Component} from 'react';
import axios from 'axios';

class Home extends React.Component {
    render() { 
        if (this.props.user) {
            return (
                <h2>Welcome back</h2>
            );
        } else {
            return (
                <h2>Welcome, guest</h2>
            );
        }
    }
}
 
export default Home;