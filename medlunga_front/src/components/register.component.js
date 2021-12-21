import React, {Component} from 'react';
import axios from 'axios';

class Register extends React.Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.username,
            email: this.email,
            password: this.password
        };
        
        axios.post('api/register', data).then(
            res=> {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };

    render() { 

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="username"
                        onChange={e => this.username = e.target.value}/>
                </div>

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

                <button className="btn btn-primary btn-block">Sign up</button>
            </form>
        );
    }
}
 
export default Register;