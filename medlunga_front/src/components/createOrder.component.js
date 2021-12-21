import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class CreateOrder extends React.Component {

    state = {
        customer_name: '',
        customer_email: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addOrder = async (e) => {
        e.preventDefault();
        const res = await axios.post('api/orders', this.state);
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add order
                                    <Link to='/orders' className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <form onSubmit={this.addOrder}>
                                        <div className="form-group mb-3">
                                            <label>Customer name</label>
                                            <input type="text" name="customer_name" onChange={this.handleInput} value={this.state.customer_name} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label>Customer email</label>
                                            <input type="text" name="customer_email" onChange={this.handleInput} value={this.state.customer_email} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-primary">Add order</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateOrder;