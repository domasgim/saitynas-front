import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class OrderDoors extends React.Component {
    state = {
        doors: [],
        loading: true
    }
    

    async componentDidMount() {
        const order_id = this.props.match.params.orderId;
        const res = await axios.get(`api/orders/${order_id}/doors`);
        if(res.status === 200) 
        {
            this.setState({
                orders: res.data,
                loading: false
            });
        }
    }

    deleteDoor = async (e, orderId, doorId) => {
        const res = await axios.delete(`api/orders/${orderId}/doors/${doorId}`);
        if(res.status === 200) {

        }
    }

    render() { 
        const order_id = this.props.match.params.orderId;
        var order_HTMLTABLE ="";
        if (this.state.loading)
        {
            order_HTMLTABLE = <tr><td colSpan="5"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            order_HTMLTABLE =
            this.state.orders.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link to={`doors/${item.id}/parts`} className="btn btn-primary btn-sm">View</Link>
                        </td>
                        <td>
                            <Link to={`doors/${item.id}/edit`} className="btn btn-primary btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteDoor(e, order_id, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Doors
                                    <Link to='doors/new-door' className="btn btn-primary btm-sm float-end">New Door</Link>
                                    <Link to='/orders' className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Door name</th>
                                                <th>Door notes</th>
                                                <th>Select</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order_HTMLTABLE}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default OrderDoors;