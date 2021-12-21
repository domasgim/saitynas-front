import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class EditPart extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        const part_id = this.props.match.params.partId;
        // console.log(order_id);
        const res = await axios.get(`api/orders/${order_id}/doors/${door_id}/parts/${part_id}`);
        if(res.status === 200) {
            this.setState({
                name: res.data.name,
                description: res.data.description
            });
        }
    }

    editPart = async (e) => {
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        const part_id = this.props.match.params.partId;
        e.preventDefault();
        document.getElementById('updateBtn').innerText = "Updating";
        const res = await axios.put(`api/orders/${order_id}/doors/${door_id}/parts/${part_id}`, this.state);
        if(res.status === 200) {
            document.getElementById('updateBtn').innerText = "Update order";
        }
    }

    render() { 
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit part contents
                                    <Link to={`/orders/${order_id}/doors/${door_id}/parts`} className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <form onSubmit={this.editPart}>
                                        <div className="form-group mb-3">
                                            <label>Part name</label>
                                            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label>Details</label>
                                            <input type="text" name="description" onChange={this.handleInput} value={this.state.description} className="form-control"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <button type="submit" id="updateBtn" className="btn btn-primary">Update part</button>
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
 
export default EditPart;