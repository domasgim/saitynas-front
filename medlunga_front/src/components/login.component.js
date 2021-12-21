import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state ={}

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };

        axios.post('api/auth/login', data).then(
            res=> {
                localStorage.setItem('token', res.data.access_token);
                console.log('Logged in: token - ' + localStorage.getItem('token'))
                this.setState({
                    user: 'logged'
                });
                this.props.setUser('logged');
            })
            .catch(
            err => {
                console.log(err);
            }
        );
    };

    render() { 
        if (this.state.user) {
            return <Redirect to={'/'}/>
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="email"
                        onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="password"
                        onChange={e => this.password = e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Log in</button>
            </form>
        );
    }
}
 
export default Login;