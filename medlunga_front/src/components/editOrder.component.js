import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class EditOrder extends React.Component {
    state = {
        customer_name: '',
        customer_email: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const order_id = this.props.match.params.orderId;
        // console.log(order_id);
        const res = await axios.get(`api/orders/${order_id}`);
        if(res.status === 200) {
            this.setState({
                customer_name: res.data.customer_name,
                customer_email: res.data.customer_email
            });
        }
    }

    editOrder = async (e) => {
        const order_id = this.props.match.params.orderId;
        e.preventDefault();
        document.getElementById('updateBtn').innerText = "Updating";
        const res = await axios.put(`api/orders/${order_id}`, this.state);
        console.log("order id " + order_id);
        if(res.status === 200) {
            document.getElementById('updateBtn').innerText = "Update order";
        }
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit order
                                    <Link to='/orders' className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <form onSubmit={this.editOrder}>
                                        <div className="form-group mb-3">
                                            <label>Customer name</label>
                                            <input type="text" name="customer_name" onChange={this.handleInput} value={this.state.customer_name} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label>Customer email</label>
                                            <input type="text" name="customer_email" onChange={this.handleInput} value={this.state.customer_email} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <button type="submit" id="updateBtn" className="btn btn-primary">Update order</button>
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
 
export default EditOrder;