import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class CreateDoor extends React.Component {

    state = {
        name: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addDoor = async (e) => {
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        e.preventDefault();
        const res = await axios.post(`api/orders/${order_id}/doors`, this.state);
    }

    render() { 
        const order_id = this.props.match.params.orderId;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add door
                                    <Link to={`/orders/${order_id}/doors`} className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <form onSubmit={this.addDoor}>
                                        <div className="form-group mb-3">
                                            <label>Door name</label>
                                            <input type="text" name="name" onChange={this.handleInput} value={this.state.customer_name} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label>Notes</label>
                                            <input type="text" name="description" onChange={this.handleInput} value={this.state.customer_email} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-primary">Add door</button>
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
 
export default CreateDoor;